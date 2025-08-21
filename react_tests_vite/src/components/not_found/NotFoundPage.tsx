import {Link, useLocation} from "react-router-dom";
import './NotFoundPage.css';

export const NotFoundPage = () => {
    const { pathname } = useLocation();
    const pathnameValue = pathname.slice(1);

    return (
        <div
            className="not-found-page-box"
            data-testid="not-found-page-box"
        >
            <h1 className="not-found-page-box__value">
                Page with path { pathnameValue } not found
            </h1>

            <Link to={"/"} replace={true} className="not-found-page-box__link">
                Return to the main page
            </Link>
        </div>
    )
}