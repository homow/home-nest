import {useEffect} from "react";
import {Outlet, useLocation} from "react-router-dom";

export default function MainLayout({children}) {
    const location = useLocation()

    useEffect(() => {
        if (location.hash) {
            const element = document.querySelector(location.hash)
            if (element) {
                element.scrollIntoView({behavior: "smooth"})
            }
        }
    }, [location])

    return (
        <main className={"mt-10 space-y-20"}>
            {children}
        </main>
    )
};