import {createBrowserRouter} from "react-router-dom";
import App from "@/App";
import Home from "@/pages/Home";

const routes = createBrowserRouter([
    {
        path: "/",
        element: <App/>,
        children: [
            {index: true, element: <Home/>},
            {path: "/properties", element: <h1>Properties</h1>},
            {path: "/about", element: <h1>About</h1>},
            {path: "/contact", element: <h1>Contact</h1>},
        ]
    },
]);

export default routes;