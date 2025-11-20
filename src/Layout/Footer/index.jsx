import FooterLink from "./components/FooterLink.jsx";
import FooterTop from "./components/FooterTop.jsx";
import FooterCopyrightAndSocial from "./components/FooterCopyrightAndSocial.jsx"

export default function Footer() {
    return (
        <footer className="mt-18 space-y-12">
            <FooterTop/>
            <FooterLink/>
            <FooterCopyrightAndSocial/>
        </footer>
    )
}