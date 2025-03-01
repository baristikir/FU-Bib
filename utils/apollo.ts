import {
  ApolloClient,
  ApolloLink,
  createHttpLink,
  from,
  InMemoryCache,
  NextLink,
  NormalizedCacheObject,
  Operation,
  split,
} from '@apollo/client';
import { onError } from '@apollo/client/link/error';
import { asyncMap, getMainDefinition } from '@apollo/client/utilities';
import { WebSocketLink } from './websocket';
import { setContext } from '@apollo/client/link/context';
import * as SecureStore from 'expo-secure-store';

const wsLink =
  typeof window !== 'undefined'
    ? new WebSocketLink({
        url: 'ws://localhost:4000/graphql',
      })
    : null;

const httpLink = createHttpLink({
  uri: 'http://localhost:4000/graphql',
  credentials: 'include',
});

const splitLink =
  typeof window !== 'undefined'
    ? split(
        ({ query }) => {
          const definition = getMainDefinition(query);
          return (
            definition.kind === 'OperationDefinition' &&
            definition.operation === 'subscription'
          );
        },
        wsLink!,
        httpLink
      )
    : httpLink;

const authLink = new ApolloLink((operation, forward) => {
  return asyncMap(forward(operation), async (response) => {
    const {
      response: { headers },
    } = operation.getContext();

    if (headers) {
      const token = await headers.get('session');

      if (token) {
        await SecureStore.setItemAsync('session', token);
      }
    }
    setContext(async (_, { headers }) => {
      const token = await SecureStore.getItemAsync('session');
      console.log(token);

      return {
        headers: {
          ...headers,
          session: token ? token : '',
        },
      };
    });

    return response;
  });
});

const errorLink = onError(({ graphQLErrors, networkError }) => {
  if (graphQLErrors)
    graphQLErrors.map(({ message, locations, path }) =>
      console.log(
        `[GraphQL error]: Message: ${message}, Location: ${locations}, Path: ${path}`
      )
    );
  if (networkError) console.log(`[Network error]: ${networkError}`);
});

export function createApolloClient(initialState: NormalizedCacheObject) {
  let link: ApolloLink = from([errorLink, authLink, splitLink]);

  return new ApolloClient({
    link: link,
    cache: new InMemoryCache().restore(initialState),
    defaultOptions: {
      watchQuery: {
        fetchPolicy: 'cache-and-network',
      },
    },
  });
}
