import useDocumentTitle from "@/hooks/useDocumentTitle";
import HeroSection from "./HeroSection/HeroSection";
import FeaturedProperty from "./FeaturedProperty/FeaturedProperty";
import LazyScroll from "@ui/suspense/LazyScroll";

export default function Home() {
    useDocumentTitle("صفحه اصلی | آشیانه");

    return (
        <>
            <HeroSection/>

            <LazyScroll>
                <FeaturedProperty/>
            </LazyScroll>
        </>
    );
};