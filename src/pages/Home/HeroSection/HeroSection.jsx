import RightHeroSection from "./RightHeroSection.jsx";
import LeftHeroSection from "./LeftHeroSection.jsx";

export default function HeroSection() {
    return (
        <section className={"space-y-20"}>
            <RightHeroSection/>
            <LeftHeroSection/>
        </section>
    )
}
