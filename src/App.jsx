import Header from "@/Layout/Header"
import MainLayout from "@/Layout/MainLayout";
import Footer from "@/Layout/Footer";
import SvgDefs from "@/components/ui/SvgDefs.jsx";

export default function App() {
    return (
        <>
            <SvgDefs/>
            <Header/>
            <MainLayout/>
            <Footer/>
        </>
    )
}