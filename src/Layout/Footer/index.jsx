import FooterLink from "./FooterLink";
import FooterTop from "./FooterTop";
import FooterCopyrightAndSocial from "./FooterCopyrightAndSocial"

export default function Footer() {
    return (
        <footer className="mt-18 space-y-12">
            <FooterTop/>
            <FooterLink/>
            <FooterCopyrightAndSocial/>
        </footer>
    )
}