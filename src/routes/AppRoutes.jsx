import {useRoutes} from "react-router-dom"
import Home from "@/pages/Home"

export default function AppRoutes() {
    return useRoutes([
        {path: "/", element: <Home/>},
        {path: "/properties", element: <h1>Properties</h1>},
        {path: "/about", element: <h1>About</h1>},
        {path: "/contact", element: <h1>Contact</h1>},
    ])
}
