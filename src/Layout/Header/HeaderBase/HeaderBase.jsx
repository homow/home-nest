import {useState} from "react";
import HeaderNav from "./HeaderNav.jsx";
import ThemeSection from "./ThemeSection.jsx";

export default function HeaderBase() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <nav className={"container flex flex-row items-center justify-between"}>
            {/* toggle nav menu in mobile */}
            <span
                onClick={() => setIsOpenMenu(!isOpenMenu)}
                className={"cursor-pointer md:hidden"}>
                <svg className={"size-6"}>
                    <use href="#bars-icon"></use>
                </svg>
            </span>
            <HeaderNav openMenu={isOpenMenu}/>
            <ThemeSection/>
        </nav>
    )
}
