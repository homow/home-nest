function BottomHeroSectionBox({text, icon}) {
    return (
        <div className={"relative bg-grey-10 rounded-custom border border-grey-15 text-center flex flex-col items-center py-5 px-3.5 text-sm md:text-base"}>
            <span className={"absolute right-4 top-4"}>
                <svg className={"size-6 text-grey-30"}>
                    <use href="#longArrow-icon"></use>
                </svg>
            </span>
            <span>
                <svg className={"size-15"}>
                    <use href={`#${icon}`}></use>
                </svg>
            </span>
            <p>{text}</p>
        </div>
    )
}

export default function BottomHeroSection() {
    return (
        <div className={"container grid grid-cols-2 gap-2.5 border border-grey-15 rounded-xl p-2.5 shadow-custom-no-blur md:grid-cols-4 md:max-w-none"}>
            <BottomHeroSectionBox text={"خونه رویایی‌تو پیدا کن"} icon={"purpleSun-icon"}/>
            <BottomHeroSectionBox text={"ارزش خونه‌تو آزاد کن"} icon={"purpleBuilding-icon"}/>
            <BottomHeroSectionBox text={"مدیریت خونه و ملک بدون دردسر"} icon={"purpleCircleCart-icon"}/>
            <BottomHeroSectionBox text={"سرمایه‌گذاری هوشمند، تصمیم‌گیری حساب‌شده"} icon={"purpleHouse-icon"}/>
        </div>
    )
}
