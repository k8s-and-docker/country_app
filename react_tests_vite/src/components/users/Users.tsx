import {useGetUsers} from "hooks";
import {Link} from "react-router-dom";

export const Users = () => {
    const { users } = useGetUsers();

    return (
        <ul data-testid="user-list-page">
            {
                users.map((user, index) => {
                    return (
                        <li key={user.id} data-testid={"user-item"}>
                            <span>{ index + 1 }</span>
                            <Link to={`/users/${user.id}`} data-testid={"path-to-current-user"}>{ user.name }</Link>
                        </li>
                    )
                })
            }
        </ul>
    )
}