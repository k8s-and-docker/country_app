import {Link} from "react-router-dom";
import './NotFoundPage.css';

export const NotFoundPage = () => {


    return (
        <div className={"not-found-page-data"}>
            <h1>Page not found 404</h1>
            <Link to={"/"}>Return to the main page</Link>
        </div>
    )
}