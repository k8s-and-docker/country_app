import type {ICountryValueProps} from "../../../../interfaces";
import {ALTER_COUNTRY_VALUE_IN_CASE_EMPTY} from "../../../../constants";

export const CountryValue = ({ children, title }: ICountryValueProps) => {
    return (
        title
            ? <WithTitle title={title}>{children}</WithTitle>
            : <WithoutTitle>{children}</WithoutTitle>
    )
}

const WithTitle = ({ children, title }: ICountryValueProps) => {
    return (
        <span
            className={"country-info__value"}
            data-title={title}
        >
            { children || ALTER_COUNTRY_VALUE_IN_CASE_EMPTY }
        </span>
    )
}

const WithoutTitle = ({ children }: ICountryValueProps) => {
    return (
        <span className={"country-list-element-link__value"}>
            { children || ALTER_COUNTRY_VALUE_IN_CASE_EMPTY }
        </span>
    )
}