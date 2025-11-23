import {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {RouterProvider} from "react-router-dom"
import "@/styles/global.css"
import AppRoutes from "./routes/AppRoutes";

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <RouterProvider router={AppRoutes}/>
    </StrictMode>
);