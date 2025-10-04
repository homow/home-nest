import RightHeroSection from "./RightHeroSection.jsx";
import LeftHeroSection from "./LeftHeroSection.jsx";
import BottomHeroSection from "./BottomHeroSection.jsx";

export default function HeroSection() {
    return (
        <section className={"space-y-4 2xl:space-y-0"}>
            <div className={"space-y-20 xl:space-y-0 xl:flex flex-row items-center gap-10 2xl:-mt-10"}>
                <RightHeroSection className={"basis-1/2"}/>
                <LeftHeroSection className={"basis-1/2"}/>
            </div>
            <BottomHeroSection/>
        </section>
    )
}
