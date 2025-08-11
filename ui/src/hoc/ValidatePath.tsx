import {Navigate, useLocation} from "react-router-dom";
import type {IHOCProps} from "../interfaces";

export const ValidatePath = ({children}:IHOCProps) => {
    const { pathname } = useLocation();

    if (pathname === "/") {
        return <Navigate to={"/countries"} replace={false}/>
    }

    return children
}