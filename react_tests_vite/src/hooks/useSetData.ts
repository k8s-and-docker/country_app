import React, {useEffect, useState} from "react";
import type {IValue} from "models";

export const useSetData = () => {
    const [value, setValue] = useState<IValue>({} as IValue);
    const [status, setStatus] = useState(false);
    const [target, setTarget] = useState("");

    const click = () => setStatus(prev => !prev);
    const change = (e: React.ChangeEvent<HTMLInputElement>) =>
        setTarget(e.target.value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setValue({firstname: "hedgerock", lastName: "testovich"});
        }, 100)

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    return { value, status, click, change, target }
}