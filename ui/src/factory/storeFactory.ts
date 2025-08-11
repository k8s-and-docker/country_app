import CountryStore from "./stores/CountryStore.ts";
import CurrentCountryStore from "./stores/CurrentCountryStore.ts";
import {createContext} from "react";

interface State {
    countryStore: CountryStore,
    currentCountryStore: CurrentCountryStore
}

const countryStore = new CountryStore();
const currentCountryStore = new CurrentCountryStore;

export const contextData = { countryStore, currentCountryStore }

export const AppContext = createContext<State>({ countryStore, currentCountryStore })