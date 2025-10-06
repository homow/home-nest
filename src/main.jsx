import React, {StrictMode} from 'react'
import ReactDOM from 'react-dom/client'
import {BrowserRouter} from "react-router-dom"
import {BASE_PATH} from "@/config.js";
import App from '@/App'
import "@/styles/global.css"

ReactDOM.createRoot(document.getElementById('root')).render(
    <StrictMode>
        <BrowserRouter basename={BASE_PATH}>
            <App/>
        </BrowserRouter>
    </StrictMode>
)
