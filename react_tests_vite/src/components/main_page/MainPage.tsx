import {Outlet} from "react-router-dom";
import { Header } from "./header";

export const MainPage = () => {

    return (
        <div className="App">
           <Header />
            <main>
                <Outlet />
            </main>
            <footer>Footer</footer>
        </div>
    )
}