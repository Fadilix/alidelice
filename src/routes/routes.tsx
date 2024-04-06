import { createBrowserRouter } from "react-router-dom";
import Home from "../pages/Home";
import AdminPage from "../pages/AdminPage";


export const routes = createBrowserRouter([
    {
        path: "/",
        Component: Home
    },
    {
        path: "/alidadmin",
        Component: AdminPage
    }
])