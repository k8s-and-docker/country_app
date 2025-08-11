import {Link} from "react-router-dom";
import type {ICountryProps} from "../../../../interfaces";
import "./CountryListElement.css";
import {CountryValue} from "../country_value";

export const CountryListElement = ({country, index}:ICountryProps) => {

    return (
        <li className={"country-list-element"}>
            <Link to={`/countries/${country.cca2}`} className={"country-list-element-link"}>
                <CountryValue>#{index + 1}</CountryValue>
                <CountryValue>{country.cca2}</CountryValue>
                <CountryValue>{country.cca3}</CountryValue>
                <CountryValue>{country.capital}</CountryValue>
            </Link>
        </li>
    )
}