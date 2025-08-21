import {useCustomParams} from "./useCustomParams.ts";
import type {IUserParams, IUserSingle} from "models";
import {useEffect, useState} from "react";
import {UsersService} from "services";

export const useGetCurrentUser = () => {
    const params = useCustomParams<IUserParams>();
    const [ user, setUser ] = useState<IUserSingle | undefined>(undefined)
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        (async () => {
            try {
                const userService = new UsersService();
                const response = await userService.getUser(params.id);
                setUser(response?.data ?? undefined)
            } catch (e) {
                console.error(e);
                setUser(undefined);
            } finally {
                setLoading(false);
            }

        })()
    }, [params.id]);

    return { user, loading }
}