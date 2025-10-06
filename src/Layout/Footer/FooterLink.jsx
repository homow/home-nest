import {Link} from "react-router-dom";
import Logo from "@/components/ui/Logo.jsx";

function FooterLinkBox({linkData}) {
    return (
        <div>
            <h6 className={"text-grey-60 mb-4 md:text-lg"}>{linkData.title}</h6>
            <ul className={"flex flex-col gap-2 md:gap-2.5"}>
                {linkData.links && linkData.links.map((link, i) =>
                    <li key={i} className={"*:text-sm *:font-normal md:*:text-base"}>
                        {link.tagName === "Link" ? (
                            <Link to={link.url}>{link.text}</Link>
                        ) : (

                            <a target="_blank" href={link.url}>{link.text}</a>
                        )}
                    </li>
                )}
            </ul>
        </div>
    )
}

function FooterLinkInput() {
    return (
        <div>
            <div className={"flex flex-row items-center gap-2 mb-3"}>
                <Logo className={"max-w-10"}/>
            </div>
            <form
                onSubmit={e => e.preventDefault()}
                className={"xl:min-w-80"}
            >
                <label dir="ltr" className={"flex flex-row items-center gap-2 border border-grey-15 rounded-xl pr-2"}>

                    {/* input */}
                    <input type="text" name="email" placeholder="ایمیل" autoComplete="email" className={"flex-1 w-full outline-none  pl-5 py-3 rounded-l-lg"}/>

                    {/* send icon */}
                    <span className={"inline-block max-w-max"}>
                        <svg className={"size-6"}>
                            <use href="#send-icon"></use>
                        </svg>
                    </span>
                </label>
            </form>
        </div>
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
                {tagName: "a", url: "https://homow.ir", text: "وبسایت اصلی"},
                {tagName: "a", url: "https://card.homow.ir", text: "ارتباط با من"},
                {tagName: "a", url: "https://t.me/homow_portfolio", text: "نمونه کارها"}
            ],
        },
        {
            title: "راه های ارتباطی",
            links: [
                {tagName: "a", url: "https://github.com/homow", text: "گیتهاب"},
                {tagName: "a", url: "tel:+989210629512", text: "شماره تلفن"},
                {tagName: "a", url: "https://www.youtube.com/@homow_dev", text: "یوتیوب آموزشِ فرانت"},
            ]
        }
    ]

    return (
        <div className={"container space-y-12 xl:flex flex-row-reverse items-start justify-between"}>
            <FooterLinkInput/>

            <div className={"grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-4 xl:gap-20"}>
                {footerLinkData && (
                    footerLinkData.map(link =>
                        <FooterLinkBox key={link.title} linkData={link}/>
                    )
                )}
            </div>
        </div>
    )
}
