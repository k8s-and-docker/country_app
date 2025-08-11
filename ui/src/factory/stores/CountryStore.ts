import {makeAutoObservable, runInAction} from "mobx";
import type {ICountry, IStore} from "../../interfaces";
import CountryService from "../../services/CountryService.ts";

export default class CountryStore implements IStore{
    countries: ICountry[]= [];
    isLoading: boolean | undefined;

    constructor() {
        makeAutoObservable(this);
        this.updateLoadingState(true);
        this.getCountries().then();
    }

    private updateCountries(result: ICountry[]) {
        runInAction(() => {
            this.countries = result;
        })
    }

    private updateLoadingState(status: boolean) {
        runInAction(() => {
            this.isLoading = status;
        })
    }

    private async fetchOneMoreTime() {
        await CountryService.processCountries();
        const anotherResult = await CountryService.getCountries();
        this.updateCountries(anotherResult.data);
    }

    private async getCountries() {
        try {
            const result = await CountryService.getCountries();

            if(result.data.length === 0) {
                await this.fetchOneMoreTime();
                return;
            }

            this.updateCountries(result.data);
        } catch (e) {
            console.error(e);
        } finally {
            this.updateLoadingState(false);
        }
    }


}