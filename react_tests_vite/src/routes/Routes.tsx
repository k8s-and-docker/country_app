import {Route, Routes} from "react-router-dom";
import {IndexedPage, MainPage} from "components/main_page";
import {CurrentUser, Users} from "components/users";
import {Counter} from "components/counter";
import {NotFoundPage} from "components/not_found";

export const ApplicationRoutes = () => {

    return (
        <Routes>
            <Route path={"/"} element={<MainPage />}>
                <Route index element={<IndexedPage />} />

                <Route path={"/users"} element={<Users />} />
                <Route path={"/users/:id"} element={<CurrentUser />} />
                <Route path={"/counter"} element={<Counter />} />

                <Route path={"/*"} element={<NotFoundPage />} />
            </Route>
        </Routes>
    )
}