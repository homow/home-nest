import {NavLink} from "react-router-dom";
import Logo from "@/components/ui/Logo.jsx";

export default function HeaderNav({openMenu, setOpenMenu}) {
    // close menu after click to menu links
    const handleCloseMenu = () => setOpenMenu(false);
    // active style to links
    const linkClass = ({isActive}) => `pr-2 py-3 block md:p-0 ${isActive ? 'text-violet-500' : ''}`;

    return (
        <ul className={`flex items-start max-md:nav-mobile md:gap-4 ${openMenu ? "right-0" : "-right-41"}`}>
            <li
                className={"md:hidden w-full cursor-pointer hover:opacity-100 md:max-w-max text-center mb-5"}>
                <Logo className={"max-w-10"}/>
            </li>
            <li
                onClick={handleCloseMenu}
                className={"w-full cursor-pointer max-md:active:bg-glass md:max-w-max"}>
                <NavLink
                    to={"/"}
                    className={linkClass}>
                    صفحه اصلی
                </NavLink>
            </li>
            <li
                onClick={handleCloseMenu}
                className={"w-full cursor-pointer max-md:active:bg-glass md:max-w-max"}>
                <NavLink
                    to={"/properties"}
                    className={linkClass}>
                    ملک ها
                </NavLink>
            </li>
            <li
                onClick={handleCloseMenu}
                className={"w-full cursor-pointer max-md:active:bg-glass md:max-w-max"}>
                <NavLink
                    to={"/about"}
                    className={linkClass}>
                    درباره ما
                </NavLink>
            </li>
            <li
                onClick={handleCloseMenu}
                className={"w-full cursor-pointer max-md:active:bg-glass md:max-w-max"}>
                <NavLink
                    to={"/contact"}
                    className={linkClass}>
                    تماس با ما
                </NavLink>
            </li>
        </ul>
    )
}
