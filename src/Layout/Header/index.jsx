import {useRef} from "react";
import ScrollUp from "@/components/ui/ScrollUp";
import TopGlobalBanner from "./components/TopGlobalBanner";
import HeaderBase from "@/Layout/Header/components/HeaderBase/HeaderBase";

export default function Header() {
    const refTrigger = useRef(null);

    return (
        <header>
            <div className={"absolute top-0"} ref={refTrigger}></div>
            <ScrollUp triggerRef={refTrigger}/>
            <TopGlobalBanner/>
            <HeaderBase/>
        </header>
    );
};