import type {AxiosResponse} from "axios";
import type {ICountry} from "../interfaces";
import $api from "../http";

export default class CountryService {
    static async getCountries(): Promise<AxiosResponse<ICountry[]>> {
        return $api.get<ICountry[]>("/v1/countries");
    }

    static async getCountry(cc2: string | undefined): Promise<AxiosResponse<ICountry>> {
        return $api.get<ICountry>(`/v1/countries/cc2/${cc2}`);
    }

    static async processCountries(): Promise<void> {
        return $api.post("/v1/countries");
    }
}