import {lazy} from "react";
import {createBrowserRouter} from "react-router-dom";
import {BASE_PATH} from "@/config.js";

const App = lazy(() => import("@/App"));
const Home = lazy(() => import("@/pages/Home"));
const NotFound = lazy(() => import("@/pages/NotFound"));

const routes = createBrowserRouter(
    [
        {
            path: "/",
            element: <App/>,
            children: [
                {index: true, element: <Home/>},
                {path: "properties", element: <h1>Properties</h1>},
                {path: "about", element: <h1>About</h1>},
                {path: "contact", element: <h1>Contact</h1>},
            ]
        },
        {path: "*", element: <NotFound/>}
    ],
    {
        basename: BASE_PATH
    }
);

export default routes;