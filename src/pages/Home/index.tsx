import HeroSection from "./HeroSection/HeroSection";
import FeaturedProperty from "./FeaturedProperty/FeaturedProperty";
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
