import {Link} from "react-router-dom";

export default function TopTitleSections({title, text, link = null, linkText}) {
    return (
        <div className={"relative space-y-2"}>
            <span className={"absolute -top-1/3 -right-2"}>
                <svg className={"w-12 h-5"}>
                    <use href="#topStarSections-icon"></use>
                </svg>
            </span>
            <h2>{title}</h2>
            {link ? (
                <div className={"lg:flex items-start justify-between gap-4"}>
                    <p className={"text-sm text-grey-60"}>{text}</p>
                    <Link className={"secondary-btn hidden lg:inline"} to={link}>{linkText}</Link>
                </div>
            ) : (
                <p className={"text-sm text-grey-60"}>{text}</p>
            )}
        </div>
    )
}
