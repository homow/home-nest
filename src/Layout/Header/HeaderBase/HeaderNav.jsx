import {NavLink} from "react-router-dom";

export default function HeaderNav({openMenu, setOpenMenu}) {
    return (
        <ul className={`flex items-start gap-4 max-md:nav-mobile ${openMenu ? "right-0" : "-right-41"}`}>
            <li className={"md:hidden w-full pr-2 py-1.5 cursor-pointer hover:opacity-100 md:max-w-max text-center"}>
                <a href="">.Logo</a>
            </li>
            <li onClick={() => setOpenMenu(false)} className={"w-full pr-2 py-1.5 cursor-pointer active:bg-glass md:max-w-max"}>
                <NavLink to={"/"} className={({isActive}) =>  `block ${isActive && 'text-violet-500'}`}>
                    صفحه اصلی
                </NavLink>
            </li>
            <li onClick={() => setOpenMenu(false)} className={"w-full pr-2 py-1.5 cursor-pointer active:bg-glass md:max-w-max"}>
                <NavLink to={"/properties"} className={({isActive}) => `block ${isActive && 'text-violet-500'}`}>
                    ملک ها
                </NavLink>
            </li>
            <li onClick={() => setOpenMenu(false)} className={"w-full pr-2 py-1.5 cursor-pointer active:bg-glass md:max-w-max"}>
                <NavLink to={"/about"} className={({isActive}) => `block ${isActive && 'text-violet-500'}`}>
                    درباره ما
                </NavLink>
            </li>
            <li onClick={() => setOpenMenu(false)} className={"w-full pr-2 py-1.5 cursor-pointer active:bg-glass md:max-w-max"}>
                <NavLink to={"/contact"} className={({isActive}) => `block ${isActive && 'text-violet-500'}`}>
                    تماس با ما
                </NavLink>
            </li>
        </ul>
    )
}
