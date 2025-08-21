import {NavLink} from "react-router-dom";
import './Header.css';

export const Header = () => {

    return (
        <header>
            <ul className={"list"}>
                <li className="list-element">
                    <NavLink to="/" data-testid="main-page-link">
                        Home
                    </NavLink>
                </li>
                <li className="list-element">
                    <NavLink to="/users" data-testid="users-link">
                        Users
                    </NavLink>
                </li>
                <li className="list-element">
                    <NavLink to="/counter" data-testid="counter-link">
                        Counter
                    </NavLink>
                </li>
            </ul>
        </header>
    )
}