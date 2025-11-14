import {Outlet} from "react-router-dom";
import Header from "@/Layout/Header"
import Footer from "@/Layout/Footer";
import MainLayout from "@/Layout/MainLayout";
import SvgDefs from "@/components/ui/SvgDefs";

export default function App() {
    return (
        <>
            <SvgDefs/>
            <Header/>
            <MainLayout>
                <Outlet/>
            </MainLayout>
            <Footer/>
        </>
    )
}