import {Link} from "react-router-dom";

export default function TopTitleSections({title, text, link = null, linkText}) {
    return (
        <div className={"relative space-y-2"}>

            {/* star icon */}
            <span className={"absolute -top-1/3 -right-2 -scale-x-100"}>
                <svg className={"w-12 h-5 lg:w-14 lg:h-6"}>
                    <use href="#topStarSections-icon"></use>
                </svg>
            </span>

            {/* title */}
            <h2>{title}</h2>

            {link ? (
                <div className={"relative lg:flex items-start justify-between gap-4 mt-3"}>
                    {/* text of title section */}
                    <p className={"text-sm text-grey-60 lg:text-base"}>{text}</p>

                    {/* link of title section */}
                    <Link className={"secondary-btn hidden lg:inline"} to={link}>{linkText}</Link>
                </div>
            ) : (
                // text
                <p className={"text-sm text-grey-60 lg:text-base"}>{text}</p>
            )}
        </div>
    )
}
