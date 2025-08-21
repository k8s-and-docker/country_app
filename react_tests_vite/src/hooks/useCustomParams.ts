import {useParams} from "react-router-dom";

export const useCustomParams = <T,>() => {
    return useParams() as T;
}