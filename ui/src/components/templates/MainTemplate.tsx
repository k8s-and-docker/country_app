import {Outlet} from "react-router-dom";
import "./MainTemplate.css";

export const MainTemplate = () => {

    return (
        <div className={"skeleton"}>
            <header>Header</header>
            <main><Outlet /></main>
            <footer>Footer</footer>
        </div>
    )
}