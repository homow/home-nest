import {NavLink} from "react-router-dom";

export default function HeaderNav({openMenu}) {
    return (
        <ul className={`flex items-start gap-4 max-md:nav-mobile ${openMenu ? "right-0" : "-right-41"}`}>
            <li className={"max-w-max w-full pr-2 py-1.5 cursor-pointer active:bg-glass"}>
                <NavLink to={"/"} className={({isActive}) =>  `block ${isActive && 'text-violet-500'}`}>
                    صفحه اصلی
                </NavLink>
            </li>
            <li className={"max-w-max w-full pr-2 py-1.5 cursor-pointer active:bg-glass"}>
                <NavLink to={"/properties"} className={({isActive}) => `block ${isActive && 'text-violet-500'}`}>
                    ملک ها
                </NavLink>
            </li>
            <li className={"max-w-max w-full pr-2 py-1.5 cursor-pointer active:bg-glass"}>
                <NavLink to={"/about"} className={({isActive}) => `block ${isActive && 'text-violet-500'}`}>
                    درباره ما
                </NavLink>
            </li>
            <li className={"max-w-max w-full pr-2 py-1.5 cursor-pointer active:bg-glass"}>
                <NavLink to={"/contact"} className={({isActive}) => `block ${isActive && 'text-violet-500'}`}>
                    تماس با ما
                </NavLink>
            </li>
        </ul>
    )
}
