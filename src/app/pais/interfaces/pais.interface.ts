// /** INTEFACE DE LOS PAISES OBTENIDOS DESDE EL API */

// export interface Country {
//     name: Name;
//     tld: string[];
//     cca2: string;
//     ccn3: string;
//     cca3: string;
//     cioc: string;
//     independent: boolean;
//     status: string;
//     unMember: boolean;
//     currencies: { [key: string]: Currency };
//     id: Idd;
//     capital: string[];
//     altSpellings: string[];
//     region: string;
//     subregion: string;
//     languages: Languages;
//     translations: { [key: string]: Translation };
//     latlng: number[];
//     landlocked: boolean;
//     borders: string[];
//     area: number;
//     demonyms: Demonyms;
//     flag: string;
//     maps: Maps;
//     population: number;
//     gini: { [key: string]: number };
//     fifa: string;
//     car: Car;
//     timezones: string[];
//     continents: string[];
//     flags: CoatOfArms;
//     coatOfArms: CoatOfArms;
//     startOfWeek: string;
//     capitalInfo: CapitalInfo;
//     postalCode?: PostalCode;
// }

// export interface CapitalInfo {
//     latlng: number[];
// }

// export interface Car {
//     signs: string[];
//     side: string;
// }

// export interface CoatOfArms {
//     png: string;
//     svg: string;
// }

// export interface Currency {
//     name: string;
//     symbol: string;
// }

// export interface Demonyms {
//     eng: Eng;
//     fra: Eng;
// }

// export interface Eng {
//     f: string;
//     m: string;
// }

// export interface Idd {
//     root: string;
//     suffixes: string[];
// }

// export interface Languages {
//     eng?: string;
//     spa?: string;
//     swa?: string;
// }

// export interface Maps {
//     googleMaps: string;
//     openStreetMaps: string;
// }

// export interface Name {
//     common: string;
//     official: string;
//     nativeName: NativeName;
// }

// export interface NativeName {
//     eng?: Translation;
//     spa?: Translation;
//     swa?: Translation;
// }

// export interface Translation {
//     official: string;
//     common: string;
// }

// export interface PostalCode {
//     format: string;
//     regex: string;
// }

export interface Country {
    name: string;
    topLevelDomain: string[];
    alpha2Code: string;
    alpha3Code: string;
    callingCodes: string[];
    capital: string;
    altSpellings: string[];
    subregion: string;
    region: string;
    population: number;
    latlng: number[];
    demonym: string;
    area: number;
    gini: number;
    timezones: string[];
    borders: string[];
    nativeName: string;
    numericCode: string;
    flags: Flags;
    currencies: Currency[];
    languages: Language[];
    translations: Translations;
    flag: string;
    regionalBlocs: RegionalBloc[];
    cioc: string;
    independent: boolean;
}

export interface Currency {
    code: string;
    name: string;
    symbol: string;
}

export interface Flags {
    svg: string;
    png: string;
}

export interface Language {
    iso639_1: string;
    iso639_2: string;
    name: string;
    nativeName: string;
}

export interface RegionalBloc {
    acronym: string;
    name: string;
    otherNames: string[];
    otherAcronyms?: string[];
}

export interface Translations {
    br: string;
    pt: string;
    nl: string;
    hr: string;
    fa: string;
    de: string;
    es: string;
    fr: string;
    ja: string;
    it: string;
    hu: string;
}
