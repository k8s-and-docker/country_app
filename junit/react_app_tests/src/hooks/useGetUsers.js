import {useEffect, useState} from "react";
import axios from "axios";

export const useGetUsers = () => {
    const [users, setUsers] = useState([]);

    const getUsers = async () => {
        const response = await axios.get("https://jsonplaceholder.typicode.com/users");
        setUsers(response.data);
    }

    useEffect(() => {
        getUsers().then();
    }, []);

    return { users }
}