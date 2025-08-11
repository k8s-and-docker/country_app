import {useGetContext} from "../hooks";
import type {IHOCProps} from "../interfaces";
import {Navigate} from "react-router-dom";

export const ValidateCountry = ({children}: IHOCProps) => {
    const { currentCountryStore: currentCountry } = useGetContext();

    if (currentCountry.country.cca2 === undefined) {
        return <Navigate to={"/404"} replace={false}/>
    }

    return children;
}