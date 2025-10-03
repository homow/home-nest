export default function RightHeroSection() {
    return (
        <div className={"relative container"}>
            {/* image and wave svg */}
            <div className={"relative bg-zinc-900 rounded-lg overflow-hidden border border-grey-15"}>
                <span className={"absolute inset-0 opacity-20 dark:opacity-40"}>
                    <svg className={"w-full h-full"}>
                        <use href="#waveField-icon"></use>
                    </svg>
                </span>

                <img className={"w-full relative z-10"} src="/static/img/home/hero-section-img.webp" alt="Building Hero section Images"/>
            </div>

            {/* circle svg */}
            <span className={"absolute z-10 left-[5%] -bottom-[18%]"}>
                <svg className={"size-30"}>
                    <use href="#discoverCircle-icon"></use>
                </svg>
            </span>
        </div>
    )
}
