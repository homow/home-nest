import {Link} from "react-router-dom";

function FooterLinkBox({linkData}) {

    return (
        <ul>
            <h6 className={"text-grey-60"}>{linkData.title}</h6>
            {linkData.links && linkData.links.map(link =>
                <li key={link.title}>
                    {link.tagName === "Link" ? (
                        <Link to={link.url}>{link.text}</Link>
                    ) : (
                        <a target="_blank" href={link.url}>{link.text}</a>
                    )}
                </li>
            )}
        </ul>
    )
}

function FooterLinkInput() {
    return (
        <form onSubmit={e => e.preventDefault()}>
            <label>
                <input type="text" name="email" placeholder="ایمیل" autoComplete="email"/>
            </label>
        </form>
    )
}

export default function FooterLinks() {
    const footerLinkData = [
        {
            title: "صفحه اصلی",
            links: [
                {tagName: "Link", url: "/#hero-section", text: "بخش اصلی"},
                {tagName: "Link", url: "/#featured-property", text: "ملک های جدید"}
            ],
        },
        {
            title: "درباره ما",
            links: [
                {tagName: "Link", url: "/about", text: "داستان ما"},
                {tagName: "Link", url: "/about", text: "کارهای ما"}
            ],
        },
        {
            title: "پورتفولیو",
            links: [
                {tagName: "a", url: "https://homow.ir", text: "معرفی من"},
                {tagName: "a", url: "https://card.homow.ir", text: "ارتباط با من"}
            ],
        },
        {
            title: "صفحه اصلی",
            links: [
                {tagName: "Link", url: "/#hero-section", text: "بخش اصلی"},
                {tagName: "Link", url: "/#featured-property", text: "ملک های جدید"}
            ],
        },
    ]

    return (
        <div>

        </div>
    )
}
