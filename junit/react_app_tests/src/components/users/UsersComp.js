import {useGetUsers} from "../../hooks/useGetUsers";

export const UsersComp = () => {
    const { users } = useGetUsers();

    return (
        <ul>
            {
                users.map((user, index) => {
                    return (
                        <li key={user.id} data-testid={"user-item"}>
                            <span>{ index + 1 }</span>
                            <span>{ user.name }</span>
                        </li>
                    )
                })
            }
        </ul>
    )
}