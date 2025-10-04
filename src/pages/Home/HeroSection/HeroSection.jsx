import RightHeroSection from "./RightHeroSection.jsx";
import LeftHeroSection from "./LeftHeroSection.jsx";

export default function HeroSection() {
    return (
        <section className={"space-y-20 xl:space-y-0 xl:flex flex-row items-center gap-10 xl:-mt-10"}>
            <RightHeroSection className={"basis-1/2"}/>
            <LeftHeroSection className={"basis-1/2"}/>
        </section>
    )
}
