import Icon from "@ui/icons/Icon.tsx";

function FooterSocialMedia({link, icon}) {
    return (
        <a href={link} className={"inline-block bg-primary-bg rounded-full p-3 hover:opacity-100 hover:bg-violet-600 hover:*:text-white max-md:active:bg-violet-600 max-md:active:*:text-white"}>
            <Icon
                parentClassName={"inline"}
                className={"size-6"}
                icon={icon}
            />
        </a>
    )
}

function FooterCopyright() {
    return (
        <div className={"flex flex-col items-center justify-center gap-2 md:flex-row md:gap-10"}>
            <a
                rel={"noreferrer noopener"}
                target={"_blank"}
                href={"https://card.homow.ir"}
            >
                توسعه داده شده توسط homow.
            </a>
            <a
                rel={"noreferrer noopener"}
                target={"_blank"}
                href={"https://www.figma.com/design/zpwtuKCAGYyYZn0DMDNImy/Real-Estate-Business-Website-UI-Template---Dark-Theme-%7C-Produce-UI--Community-?node-id=139-6238&t=PAe85chdY6gZx8MK-0"}
            >
                لینک اصلی طرح
            </a>
        </div>
    )
}

export default function FooterCopyrightAndSocial() {
    return (
        <div className={"bg-grey-10 py-10"}>
            <div className={"container space-y-5 md:flex flex-row justify-between"}>
                {/* footer copy right */}
                <div className={"flex flex-row items-center justify-center gap-2"}>
                    <FooterSocialMedia
                        link={"https://github.com/homow"}
                        icon={"github"}
                    />
                    <FooterSocialMedia
                        link={"https://www.youtube.com/@homow_dev"}
                        icon={"youtube"}
                    />
                    <FooterSocialMedia
                        link={"https://homow.ir/"}
                        icon={"website"}
                    />
                    <FooterSocialMedia
                        link={"https://t.me/homow_dev"}
                        icon={"telegram"}
                    />
                    <FooterSocialMedia
                        link={"https://www.instagram.com/homow_dev"}
                        icon={"instagram"}
                    />
                </div>

                {/* footer social media links */}
                <FooterCopyright/>
            </div>
        </div>
    )
}
