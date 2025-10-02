import {NavLink} from "react-router-dom";

export default function HeaderNav() {
    return (
        <div>
            <NavLink to={"/"} className={active => active && 'text-violet-500'}>
                صفحه اصلی
            </NavLink>
            <NavLink to={"/properties"} className={active => active && 'text-violet-500'}>
                ملک ها
            </NavLink>
            <NavLink to={"/about"} className={active => active && 'text-violet-500'}>
                درباره ما
            </NavLink>
            <NavLink to={"/contact"} className={active => active && 'text-violet-500'}>
                تماس با ما
            </NavLink>
        </div>
    )
}
