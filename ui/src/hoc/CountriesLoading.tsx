import {useGetContext} from "../hooks";
import {observer} from "mobx-react-lite";
import type {IHOCProps} from "../interfaces";

export const CountriesLoading = observer(({children}:IHOCProps) => {
    const {countryStore} = useGetContext();

    if (countryStore.isLoading) {
        return <div>Loading...</div>
    }

    return children

})