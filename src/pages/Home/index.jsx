import HeroSection from "./HeroSection/HeroSection.jsx";
import FeaturedProperty from "./FeaturedProperty/FeaturedProperty.jsx";
import {useEffect} from "react";

export default function Home() {
    useEffect(() => {
        document.title = "صفحه اصلی | آشیانه";
    }, [])

    return (
        <>
            <HeroSection/>
            <FeaturedProperty/>
        </>
    )
}
