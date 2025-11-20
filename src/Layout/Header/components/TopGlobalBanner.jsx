import {useState, useEffect} from "react";
import Icon from "@ui/icons/Icon.jsx";

export default function TopGlobalBanner() {
    const [visible, setVisible] = useState(true);

    useEffect(() => {
        const isDismissed = localStorage.getItem("topGlobalBannerVisible") === "false";

        if (isDismissed) setVisible(false);
    }, []);

    if (!visible) return null;

    return (
        <div id="TopGlobalBanner" className={"relative overflow-hidden pt-10 pb-5 border-grey-15 border-b md:py-3.5"}>
            <span className={"absolute -z-10 inset-0 -left-237 sm:left-0 opacity-20 dark:opacity-40"}>
                <Icon
                    className={"w-full"}
                    icon={"waveField"}
                />
            </span>

            <div className={"container relative text-sm sm:text-base"}>
                <div className={"flex flex-row items-center justify-end md:justify-center gap-2 sm:gap-4"}>
                    <p>✨ خانه‌ٔ رویایی‌تو با آشیانه بساز</p>
                    <a target="_blank" href="https://homow.ir" className="underline-link">جزئیات</a>
                </div>
                <span
                    onClick={() => {
                        setVisible(false)
                        localStorage.setItem("topGlobalBannerVisible", "false")
                    }}
                    className={"absolute right-4 top-1/2 -translate-y-1/2 bg-glass backdrop-blur-sm rounded-full cursor-pointer p-1"}>
                    <svg className={"size-4 sm:size-5"}>
                        <use href="#close-icon"></use>
                    </svg>
                </span>
            </div>
        </div>
    )
}
