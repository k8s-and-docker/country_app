import {useCustomParams, useGetContext} from "../hooks";
import type {ICurrentCountryParams, IHOCProps} from "../interfaces";
import {useEffect} from "react";
import {observer} from "mobx-react-lite";

export const CurrentCountryLoading = observer(
    ({children}: IHOCProps) => {
        const {currentCountryStore: currentCountry} = useGetContext();
        const params = useCustomParams<ICurrentCountryParams>();

        useEffect(() => {
            currentCountry.updateId(params.id);
        }, [params.id, currentCountry]);

        if (currentCountry.isLoading) {
            return (
                <div>Loading...</div>
            );
        }

        return children
    }
)