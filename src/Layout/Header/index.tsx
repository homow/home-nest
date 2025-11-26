import {useRef} from "react";
import ScrollUp from "@ui/ScrollUp.tsx";
import TopGlobalBanner from "./components/TopGlobalBanner";
import HeaderBase from "@/Layout/Header/components/HeaderBase/HeaderBase";

export default function Header() {
    const refTrigger = useRef(null);

    return (
        <header>
            <div
                className={"absolute top-0"}
                ref={refTrigger}
            />

            <ScrollUp
                triggerRef={refTrigger}
            />

            <TopGlobalBanner/>
            <HeaderBase/>
        </header>
    );
};