import {useRef} from "react";
import ScrollUp from "@/components/ui/ScrollUp.jsx";
import TopGlobalBanner from "./components/TopGlobalBanner.jsx";
import HeaderBase from "@/Layout/Header/components/HeaderBase/HeaderBase.jsx";

export default function Header() {
    const refTrigger = useRef(null);

    return (
        <header>
            <div className={"absolute top-0"} ref={refTrigger}></div>
            <ScrollUp triggerRef={refTrigger}/>
            <TopGlobalBanner/>
            <HeaderBase/>
        </header>
    )
}
