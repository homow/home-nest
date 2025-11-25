import {useState} from "react";
import Icon from "@ui/icons/Icon.tsx";

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
            className={"inline-block p-1 rounded-full cursor-pointer"}
        >
            <Icon
                className={"size-6"}
                icon={theme === "dark" ? "sun" : "moon"}
            />
        </div>
    )
}
