import {useState} from "react";

export default function ThemeSection() {
    const [theme, setTheme] = useState(localStorage.getItem("theme") === "dark" ? "dark" : "light");

    const changeTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        document.documentElement.classList.toggle("dark", newTheme === "dark");
        localStorage.setItem("theme", newTheme);
    }

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
