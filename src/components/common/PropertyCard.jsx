import {Link} from "react-router-dom";

export default function PropertyCard({img, title, description, descriptionLink, features, price, link}) {
    return (
        <div className={"border border-grey-15 rounded-xl p-6"}>
            {/* image card */}
            <img className={"w-full"} loading={"lazy"} src={img} alt={`${title} picture`}/>

            {/* info card */}
            <div>
                <strong className={"text-lg font-bold"}>{title}</strong>
                <p className={"text-grey-60 line-clamp-2"}>{description} <Link className={"underline-link text-sm"} to={descriptionLink}>جزئیات</Link></p>
            </div>

            {/* features card */}
            <div className={"flex flex-wrap flex-row gap-1"}>
                <p className={"px-3.5 py-1.5 border border-grey-15 rounded-custom-28"}>
                    <span>
                        <svg href="#buildingFeatures-icon"></svg>
                    </span>
                    {features[0]}-اتاق‌خواب
                </p>
                <p className={"px-3.5 py-1.5 border border-grey-15 rounded-custom-28"}>
                    <span>
                        <svg href="#bedFeatures-icon"></svg>
                    </span>
                    {features[1]}-حمام
                </p>
                <p className={"px-3.5 py-1.5 border border-grey-15 rounded-custom-28"}>
                    <span>
                        <svg href="#bathFeatures-icon"></svg>
                    </span>
                    {features[2]}
                </p>
            </div>

            {/* price and property link */}
            <div>
                <p>
                    <span className={"text-sm text-grey-60"}>Price</span>
                    <span className={"text-lg"}>${price}</span>
                </p>
                <Link className={"primary-btn"} to={link}>جزئیات بیشتر</Link>
            </div>
        </div>
    )
}
