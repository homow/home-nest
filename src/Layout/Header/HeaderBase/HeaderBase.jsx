import {useState} from "react";
import HeaderNav from "./HeaderNav.jsx";
import ThemeSection from "./ThemeSection.jsx";
import Overlay from "@/components/ui/Overlay.jsx";

export default function HeaderBase() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <>
            <Overlay flag={isOpenMenu} setFlag={setIsOpenMenu}/>
            <div className={`bg-header-bg border-b border-dark-blue-15 transition-all duration-300`}>
                <nav className={"container py-5 flex flex-row items-center justify-between"}>
                    <div className={"hidden md:block"}>
                        .Logo
                    </div>
                    {/* Header Navigation */}
                    <HeaderNav openMenu={isOpenMenu} setOpenMenu={setIsOpenMenu}/>
                    {/* theme icon and control */}
                    <ThemeSection/>
                    {/* toggle nav menu in mobile */}
                    <span
                        onClick={() => setIsOpenMenu(!isOpenMenu)}
                        className={"cursor-pointer md:hidden"}>
                        <svg className={"size-6 -scale-x-100"}>
                            <use href={isOpenMenu ? "#close-icon" : "#bars-icon"}></use>
                        </svg>
                    </span>
                </nav>
            </div>
        </>
    )
}
