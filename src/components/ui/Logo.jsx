import {Link} from "react-router-dom";

export default function Logo({className}) {
    return (
        <Link className={`w-full inline-block hover:opacity-100 ${className}`} to={"/"}>
            <img className={"w-full"} src="/static/logo.webp" alt="Logo picture"/>
        </Link>
    )
}
