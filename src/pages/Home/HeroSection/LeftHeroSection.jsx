import {Link} from "react-router-dom";

function LeftHeroSectionState({title, text}) {
    return (
        <div className={"bg-grey-10 border border-grey-15 rounded-lg p-4"}>
            <strong className={"text-lg"}>{title}</strong>
            <p className={"text-grey-60 text-sm"}>{text}</p>
        </div>
    )
}

function LeftHeroSectionInfo() {
    return (
        <div>
            <h1 className={"font-medium"}>
                با آشیانه، خانهٔ رویایی‌تو رو بساز
            </h1>
            <p className={"text-sm text-grey-60"}>
                سفرِ پیدا کردن خونه رویایی‌ت از همین‌جا شروع میشه.
                آگهی‌هامون رو بگرد، اون خونه‌ای که تو رویات دیدی رو پیدا کن.
            </p>
            <div>
                <Link className={"primary-btn"} to="/properties">دیدن خانه ها</Link>
                <a className={"secondary-btn"} target={"_blank"} href="https://card.homow.ir">اطلاعات بیشتر</a>
            </div>
        </div>
    )
}

export default function LeftHeroSection() {
    return (
        <div className={"container"}>
            {/* info and title */}
            <LeftHeroSectionInfo/>

            {/* state box hero section */}
            <div>
                <LeftHeroSectionState title={"200+"} text={"مشتری های راضی"}/>
                <LeftHeroSectionState title={"10هزار"} text={"خانه براش مشتری ها"}/>
                <LeftHeroSectionState title={"16+"} text={"سال سابقه"}/>
            </div>
        </div>
    )
}
