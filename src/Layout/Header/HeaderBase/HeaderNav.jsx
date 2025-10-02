import {NavLink} from "react-router-dom";

export default function HeaderNav() {
    return (
        <nav className={"absolute bg-zinc-950 right-0 bottom-0 top-0 pt-8 flex flex-col items-start gap-4"}>
            <NavLink to={"/"} className={({isActive}) => `pr-4 pl-12 py-1 ${isActive && 'text-violet-500'}`}>
                صفحه اصلی
            </NavLink>
            <NavLink to={"/properties"} className={({isActive}) => isActive && 'text-violet-500'}>
                ملک ها
            </NavLink>
            <NavLink to={"/about"} className={({isActive}) => isActive && 'text-violet-500'}>
                درباره ما
            </NavLink>
            <NavLink to={"/contact"} className={({isActive}) => isActive && 'text-violet-500'}>
                تماس با ما
            </NavLink>
        </nav>
    )
}
