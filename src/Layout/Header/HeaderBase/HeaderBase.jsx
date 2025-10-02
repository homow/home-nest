import HeaderNav from "./HeaderNav.jsx";
import ThemeSection from "./ThemeSection.jsx";

export default function HeaderBase() {
    return (
        <div className={"container flex flex-row items-center justify-between"}>
            {/* toggle nav menu in mobile */}
            <span className={"cursor-pointer"}>
                <svg className={"size-6"}>
                    <use href="#bars-icon"></use>
                </svg>
            </span>
            <HeaderNav/>
            <ThemeSection/>
        </div>
    )
}
