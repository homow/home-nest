import {Link} from "react-router-dom";

export default function PropertyCard({img, title, description, descriptionLink, features, price, propertyLink}) {
    return (
        <div className={"border border-grey-15 rounded-xl p-6 space-y-4"}>
            {/* image card */}
            <img className={"w-full"} loading={"lazy"} src={img} alt={`${title} picture`}/>

            {/* info card */}
            <div>
                <p className={"text-lg font-medium"}>{title}</p>
                <div className={"relative mt-1"}>
                    <span className={"text-grey-60 text-sm line-clamp-2"}>
                        {description}
                    </span> {" "}
                    <Link className={"underline-link text-sm inline-block absolute bottom-0 left-[29%]"} to={descriptionLink}>جزئیات</Link>
                </div>
            </div>

            {/* features card */}
            <div className={"flex flex-wrap flex-row gap-1"}>
                <p className={"flex flex-row items-baseline text-sm gap-1 px-3.5 py-1.5 border border-grey-15 rounded-custom-28"}>
                    <span>
                        <svg className={"size-4"}>
                            <use href="#buildingFeatures-icon"></use>
                        </svg>
                    </span>
                    {features[0]}-اتاق‌خواب
                </p>
                <p className={"flex flex-row items-baseline text-sm gap-1 px-3.5 py-1.5 border border-grey-15 rounded-custom-28"}>
                    <span>
                        <svg className={"size-4"}>
                            <use href="#bedFeatures-icon"></use>
                        </svg>
                    </span>
                    {features[1]}-حمام
                </p>
                <p className={"flex flex-row items-baseline text-sm gap-1 px-3.5 py-1.5 border border-grey-15 rounded-custom-28"}>
                    <span>
                        <svg className={"size-4"}>
                            <use href="#bathFeatures-icon"></use>
                        </svg>
                    </span>
                    {features[2]}
                </p>
            </div>

            {/* price and property link */}
            <div className={"flex flex-row items-center justify-between"}>
                <Link className={"primary-btn"} to={propertyLink}>جزئیات بیشتر</Link>
                <p className={"flex flex-col items-start"}>
                    <span className={"text-sm text-grey-60"}>قیمت</span>
                    <span className={"text-lg"}>${price}</span>
                </p>
            </div>
        </div>
    )
}
