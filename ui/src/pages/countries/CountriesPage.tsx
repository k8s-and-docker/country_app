import "./CountriesPage.css";
import {useGetContext} from "../../hooks";
import {memo} from "react";
import {CountryListElement} from "../../components/templates/countries";

export const CountriesPage = memo(() => {
    const { countryStore } = useGetContext();

    return (
        <ul className={"country-list"}>
            {countryStore.countries.map((el, index) => {
                return <CountryListElement country={el} index={index} key={el.cca2}/>
            })}
        </ul>
    )
})