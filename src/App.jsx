import {Outlet} from "react-router-dom";
import Header from "@/Layout/Header"
import Footer from "@/Layout/Footer";
import MainLayout from "@/Layout/MainLayout";
import SuspenseBoundary from "@ui/SuspenseBoundary";
import SvgDefs from "@/components/ui/SvgDefs";

export default function App() {
    return (
        <>
            <SvgDefs/>
            <Header/>
            <MainLayout>
                <SuspenseBoundary>
                    <Outlet/>
                </SuspenseBoundary>
            </MainLayout>
            <Footer/>
        </>
    )
};