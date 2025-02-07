import * as SecureStore from 'expo-secure-store';

type Library = {
  id: string;
  name: string;
  address: string;
  secondAddress?: string;
  email: string;
  secondEmail?: string;
  floor?: string[];
};

// will delete soon (db has the data for libraries)
export const libraries: Library[] = [
  {
    id: '1.0',
    name: 'Bibliotheksbereich 1: Universitätsbibliothek',
    address: 'Garystr. 39 (Haupteingang), 14195 Berlin',
    email: 'auskunft@ub.fu-berlin.de',
    floor: ['UG', 'EG'],
  },
  {
    id: '1.1',
    name: 'Bibliotheksbereich 1: Campusbibliothek',
    address: 'Fabeckstr. 23-25, 14195 Berlin',
    email: 'auskunft@campusbib.fu-berlin.de',
  },
  {
    id: '2.0',
    name: 'Bibliotheksbereich 2: Rechtswissenschaft',
    address: "Van't-Hoff-Str. 8, 14195 Berlin",
    email: 'bibliothek@rewiss.fu-berlin.de',
  },
  {
    id: '3.0',
    name: 'Bibliotheksbereich 3: Wirtschaftswissenschaft',
    address: 'Garystr. 21 Untergeschoss 14195 Berlin',
    email: 'bibliothek@wiwiss.fu-berlin.de',
  },
  {
    id: '4.0',
    name: 'Bibliotheksbereich 4: Sozialwissenschaften und Osteuropastudien',
    address:
      'Garystr. 55, 14195 Berlin (Leihstelle, Freihand, Offenes Magazin, Einzel- und Gruppenarbeitsplätze, Bibliotheksgarten)',
    secondAddress:
      'Ihnestr. 21, 14195 Berlin (Stiller Lesesaal, Semesterapparate, Zeitschriftenlesesaal, aktuelle Zeitungen, Auflichtscanner, Kopierer/Drucker, Computerarbeitsplätze)',
    email: 'bibliothek@polsoz.fu-berlin.de',
  },
  {
    id: '4.1',
    name: 'Bibliotheksbereich 4: John-F.-Kennedy-Institut für Nordamerikastudien',
    address: 'Lansstr. 7-9, 14195 Berlin',
    email: 'library@jfki.fu-berlin.de',
  },
  {
    id: '5.0',
    name: 'Bibliotheksbereich 5: Philologische Bibliothek',
    address: 'Habelschwerdter Allee 45, 14195 Berlin',
    email: 'info@philbib.fu-berlin.de',
    secondEmail: 'ausleihe@philbib.fu-berlin.de',
  },
  {
    id: '5.1',
    name: 'Bibliotheksbereich 5: Institut für Theaterwissenschaft',
    address: 'Grunewaldstr. 35, 12165 Berlin',
    email: 'thewibib@zedat.fu-berlin.de',
  },
  {
    id: '6.0',
    name: 'Bibliotheksbereich 6: Friedrich-Meinecke-Institut für Geschichtswissenschaften',
    address: 'Koserstr. 20, 14195 Berlin',
    email: 'ausleihe@geschkult.fu-berlin.de',
  },
  {
    id: '6.1',
    name: 'Bibliotheksbereich 6: Kunsthistorisches Institut',
    address: 'Koserstr. 20, 14195 Berlin',
    email: 'ausleihe@geschkult.fu-berlin.de',
  },
  {
    id: '7.0',
    name: 'Bibliotheksbereich 7: Veterinärmedizin',
    address: 'Oertzenweg 19b, 14163 Berlin',
    email: 'info-vetlibrary@fu-berlin.de',
  },
  {
    id: '8.0',
    name: 'Bibliotheksbereich 8: Bibliothek am Botanischen Garten und Botanischen Museum',
    address:
      'Königin-Luise-Str. 6-8, 14195 Berlin (1. OG im Botanischen Museum)',
    email: 'library@bgbm.org',
  },
  {
    id: '8.1',
    name: 'Bibliotheksbereich 8: Bereichsbibliothek Biologie/Standort BGBM',
    address:
      'Königin-Luise-Str. 6-8, 14195 Berlin (1. OG im Botanischen Museum)',
    email: 'library@bgbm.org',
  },
  {
    id: '9.0',
    name: 'Bibliotheksbereich 9: Geowissenschaftliche Bibliothek',
    address: 'Malteserstr. 74-100 Haus O, 12249 Berlin',
    email: 'geolib@zedat.fu-berlin.de',
  },
  {
    id: '9.1',
    name: 'Bibliotheksbereich 9: Bibliothek des Instituts für Meteorologie',
    address: 'Carl-Heinrich-Becker Weg 6-10, 12165 Berlin',
    email: 'bibliothek@met.fu-berlin.de',
  },
];

// Library Utilities

let library: Library | undefined = undefined;

export const setLibrary = (lib: Library) => {
  library = lib;

  return library;
};

export const getLibrary = () => {
  return library;
};

let floor: string | undefined = undefined;

export const setFloor = (val: string) => {
  floor = val;

  return floor;
};

export const getFloor = () => {
  return floor;
};
