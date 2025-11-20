import {useState} from "react";
import HeaderNav from "./HeaderNav.jsx";
import ThemeSection from "./ThemeSection.jsx";
import Overlay from "@ui/Overlay.jsx";
import Logo from "@ui/Logo.jsx";
import Icon from "@ui/icons/Icon.jsx";

export default function HeaderBase() {
    const [isOpenMenu, setIsOpenMenu] = useState(false);

    return (
        <>
            <Overlay flag={isOpenMenu} setFlag={setIsOpenMenu}/>
            <div className={`bg-header-bg border-b border-dark-blue-15 transition-all duration-300`}>
                <nav className={"container py-5 flex flex-row items-center justify-between"}>
                    <div className={"hidden md:block h-10"}>
                        <Logo className={"max-w-10"}/>
                    </div>

                    {/* Header Navigation */}
                    <HeaderNav openMenu={isOpenMenu} setOpenMenu={setIsOpenMenu}/>

                    {/* theme icon and control */}
                    <ThemeSection/>

                    {/* toggle nav menu in mobile */}
                    <span
                        onClick={() => setIsOpenMenu(!isOpenMenu)}
                        className={"cursor-pointer md:hidden"}>
                        <Icon
                            parentClassName={"inline"}
                            className={"-scale-x-100"}
                            icon={isOpenMenu ? "close" : "bars"}
                        />
                    </span>
                </nav>
            </div>
        </>
    );
};