import {useEffect, useState} from "react";

export const useSetData = () => {
    const [value, setValue] = useState(null);
    const [status, setStatus] = useState(false);
    const [target, setTarget] = useState("");

    const click = () => setStatus(prev => !prev);
    const change = (e) => setTarget(e.target.value);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setValue({});
        }, 100)

        return () => {
            clearTimeout(timeout);
        }
    }, []);

    return { value, status, click, change, target }
}