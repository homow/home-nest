import {StrictMode} from 'react'
import {createRoot} from 'react-dom/client'
import {RouterProvider} from "react-router-dom"
import "@/styles/global.css"
import AppRoutes from "./routes/AppRoutes";

createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <RouterProvider router={AppRoutes}/>
    </StrictMode>
);