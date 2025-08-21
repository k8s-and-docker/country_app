import {useEffect, useState} from "react";
import type {IUser} from "models";
import {UsersService} from "services";

export const useGetUsers = () => {
    const [users, setUsers] = useState([] as IUser[]);

    useEffect(() => {

        (async () => {
            const usersService = new UsersService();
            const response = await usersService.getUsers();
            setUsers(response.data);
        })()

    }, []);

    return { users }
}