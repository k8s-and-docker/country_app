import {useContext} from "react";
import {AppContext} from "../factory";

export const useGetContext = () => {
    return useContext(AppContext);
}