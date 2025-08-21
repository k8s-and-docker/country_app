import {Link, Navigate} from "react-router-dom";
import {useGetCurrentUser} from "hooks";

export const CurrentUser = () => {
    const {loading, user} = useGetCurrentUser();

    if (loading) {
        return <div>Loading....</div>
    }

    if (!user) {
        return <Navigate to="/users" replace={true}/>
    }

    return (
        <div data-testid="current-user-details">
            <Link to={'/users'}>Return to users</Link>
            <h1>{ user.name }</h1>
            <ul>
                <li>{ user.username }</li>
                <li>{ user.id }</li>
                <li>{ user.email }</li>
                <li>{ user.phone }</li>
                <li>{ user.website }</li>
                <li>
                    <h3>{ user.address?.city }</h3>
                    <ul>
                        <li>{ user.address?.street }</li>
                        <li>{ user.address?.suite }</li>
                        <li>{ user.address?.zipcode }</li>
                        <li>
                            <h4>Geo</h4>
                            <ul>
                                <li>{ user.address?.geo?.lat }</li>
                                <li>{ user.address?.geo?.lng }</li>
                            </ul>
                        </li>
                    </ul>
                </li>
                <li>
                    <h3>{user.company?.name}</h3>
                    <ul>
                        <li>{ user.company?.bs }</li>
                        <li>{ user.company?.catchPhrase }</li>
                    </ul>
                </li>
            </ul>
        </div>
    )
}