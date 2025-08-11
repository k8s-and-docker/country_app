import {makeAutoObservable, runInAction} from "mobx";
import type {ICountry, IStore} from "../../interfaces";
import CountryService from "../../services/CountryService.ts";

export default class CurrentCountryStore implements IStore{
    country = {} as ICountry;
    isLoading: boolean | undefined;
    id: string = "";

    constructor() {
        makeAutoObservable(this);
        this.updateLoadingState(true);
    }

    public updateCountry(country: ICountry) {
        runInAction(() => {
            this.country = country;
        })
    }

    public updateLoadingState(status: boolean) {
        runInAction(() => {
            this.isLoading = status
        })
    }

    public updateId(id:string) {
        this.updateLoadingState(true);
        runInAction(() => {
            this.id = id;
        })
        this.getCurrentCountry().then();
    }

    private async getCurrentCountry() {
        try {
            const result = await CountryService.getCountry(this.id);
            this.updateCountry(result.data);
        } catch (e) {
            console.error(e)
        } finally {
            this.updateLoadingState(false);
        }
    }

}