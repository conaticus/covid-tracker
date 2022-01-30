export interface CountryDataObject {
    confirmed: number;
    recovered: number;
    deaths: number;
    country: string;
    population: number;
    sq_km_area: number;
    life_expectancy: string;
    elevation_in_meters: number;
    continent: string;
    abbreviation: string;
    location: string;
    iso: number;
    capital_city: string;
    lat: string;
    long: string;
    updated: string;
}

export interface CaseDataObject {
    [key: string]: {
        All: CountryDataObject;
    };
}

export type SetDataFunction = (object: any) => void;
