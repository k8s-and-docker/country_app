export interface ICountry {
    cca2: string;
    cca3: string;
    region?: string;
    capital: string[];
    subregion?: string;
    area?: number;
    population?: number;
    independent?: boolean;
}