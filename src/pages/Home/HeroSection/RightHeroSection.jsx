export default function RightHeroSection({className}) {
    return (
        <div className={`relative container xl:p-0 xl:w-full ${className}`}>
            {/* image and wave svg */}
            <div className={"relative bg-zinc-900 rounded-lg overflow-hidden border border-grey-15 max-w-200 mx-auto xl:max-w-230 xl:mx-0 xl:rounded-none"}>
                <span className={"absolute inset-0 opacity-20 dark:opacity-40"}>
                    <svg className={"w-full h-full"}>
                        <use href="#waveField-icon"></use>
                    </svg>
                </span>
                <img className={"w-full relative z-10"} src="https://xbeopbkmgpzwzhtijiir.supabase.co/storage/v1/object/public/static-assets/ui/home/hero-section-img.webp" alt="Building Hero section Images"/>
            </div>

            {/* circle svg */}
            <span className={"absolute z-10 left-[4%] -bottom-[18%] sm:-bottom-[14%] sm:left-[2%] md:-bottom-[10%] lg:left-[11%] lg:-bottom-[8%] xl:bottom-2/3 xl:-left-4"}>
                <svg className={"size-30"}>
                    <use href="#discoverCircle-icon"></use>
                </svg>
            </span>
        </div>
    )
}
