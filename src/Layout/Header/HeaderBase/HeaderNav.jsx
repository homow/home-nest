import {NavLink} from "react-router-dom";

export default function HeaderNav({openMenu, setOpenMenu}) {
    // close menu after click to menu links
    const handleCloseMenu = () => setOpenMenu(false);
    // active style to links
    const linkClass = ({isActive}) => `block ${isActive ? 'text-violet-500' : ''}`;

    return (
        <ul className={`flex items-start gap-4 max-md:nav-mobile ${openMenu ? "right-0" : "-right-41"}`}>
            <li
                className={"md:hidden w-full pr-2 py-1.5 cursor-pointer hover:opacity-100 md:max-w-max text-center"}>

                <a href="">Logo.</a>
            </li>
            <li
                onClick={handleCloseMenu}
                className={"w-full pr-2 py-1.5 cursor-pointer max-md:active:bg-glass md:max-w-max"}>
                <NavLink
                    to={"/"}
                    className={linkClass}>
                    صفحه اصلی
                </NavLink>
            </li>
            <li
                onClick={handleCloseMenu}
                className={"w-full pr-2 py-1.5 cursor-pointer max-md:active:bg-glass md:max-w-max"}>
                <NavLink
                    to={"/properties"}
                    className={linkClass}>
                    ملک ها
                </NavLink>
            </li>
            <li
                onClick={handleCloseMenu}
                className={"w-full pr-2 py-1.5 cursor-pointer max-md:active:bg-glass md:max-w-max"}>
                <NavLink
                    to={"/about"}
                    className={linkClass}>
                    درباره ما
                </NavLink>
            </li>
            <li
                onClick={handleCloseMenu}
                className={"w-full pr-2 py-1.5 cursor-pointer max-md:active:bg-glass md:max-w-max"}>
                <NavLink
                    to={"/contact"}
                    className={linkClass}>
                    تماس با ما
                </NavLink>
            </li>
        </ul>
    )
}
