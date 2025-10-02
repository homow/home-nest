import {useEffect, useState} from "react";


export default function ThemeSection() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark" ? "dark" : "light");

    const changeTheme = () => {
        setTheme(prevState => prevState === "dark" ? "light" : "dark");
    }

    useEffect(() => {
        document.documentElement.classList.toggle("dark", theme === "dark");
        localStorage.setItem("theme", theme);
    }, [theme]);

    return (
        <div
            onClick={changeTheme}
            className={"inline-block p-1 rounded-full cursor-pointer"}>
            <svg className={"size-6"}>
                <use href={`#${theme === "dark" ? "sun-icon" : "moon-icon"}`}></use>
            </svg>
        </div>
    )
}
