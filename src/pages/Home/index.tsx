import useDocumentTitle from "@/hooks/useDocumentTitle";
import HeroSection from "./HeroSection/HeroSection";
import LazyWithSuspense from "@ui/suspense/LazyWithSuspense";
import LazyScroll from "@ui/suspense/LazyScroll";

const FeaturedProperty = LazyWithSuspense(() => import("./FeaturedProperty/FeaturedProperty"));

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