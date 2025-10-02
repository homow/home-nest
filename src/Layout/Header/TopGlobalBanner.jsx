export default function TopGlobalBanner() {
    return (
        <div className={"hidden xx:block relative overflow-hidden pt-10 pb-5 text-xs xs:text-sm sm:text-base sm:py-3.5"}>
            <span className={"absolute -z-10 inset-0 -left-237 sm:left-0 opacity-40"}>
                <svg className={"w-full"}>
                    <use href="#waveField-icon"></use>
                </svg>
            </span>

            <div className={"container relative"}>
                <div className={"flex flex-row items-center justify-end md:justify-center gap-2 sm:gap-4"}>
                    <p>✨ خانه های رویایی رو با آشیانه پیدا کنید</p>
                    <a href="https://homow.ir" className={"underline"}>اطلاعات بیشتر</a>
                </div>
                <span className={"absolute right-4 top-1/2 -translate-y-1/2 inline-block bg-white/10 p-1 rounded-full cursor-pointer"}>
                    <svg className={"size-3.5 xs:size-4 sm:size-5"}>
                        <use href="#close-icon"></use>
                    </svg>
                </span>
            </div>
        </div>
    )
}
