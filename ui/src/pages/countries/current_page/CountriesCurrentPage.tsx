import {Link} from "react-router-dom";
import {useGetContext} from "../../../hooks";
import {observer} from "mobx-react-lite";
import './CountriesCurrentPage.css';
import {CountryValue} from "../../../components/templates/countries";

export const CountriesCurrentPage = observer(() => {
    const {currentCountryStore: currentCountry} = useGetContext();
    const country = currentCountry.country;

    return (
        <div className={"country-page"}>
            <div className={"header"}>
                <h1>{country.cca2}</h1>
                <Link to={"/countries"}>Return</Link>
            </div>

            <div className={"country-info"}>
                <CountryValue title={'CCA-3'}>{ country.cca3 }</CountryValue>
                <CountryValue title={'Capital'}>{ country.capital }</CountryValue>
                <CountryValue title={'Area'}>{ country.area }</CountryValue>
                <CountryValue title={'Region'}>{ country.region }</CountryValue>
                <CountryValue title={'Subregion'}>{ country.subregion }</CountryValue>
                <CountryValue title={'Population'}>{ country.population }</CountryValue>
                <CountryValue title={'Independent'}>
                    { country.independent
                        ? "Yes"
                        : country.independent !== undefined
                            ? "No"
                            : country.independent
                    }
                </CountryValue>
            </div>
        </div>
    )
})