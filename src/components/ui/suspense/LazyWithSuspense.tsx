import type {JSX, ComponentType, LazyExoticComponent} from "react";
import {lazy} from "react";
import SuspenseBoundary from "./SuspenseBoundary";

function LazyWithSuspense(
    importFunc: () => Promise<{ default: ComponentType<any> }>
): () => JSX.Element {
    const Component: LazyExoticComponent<ComponentType<any>> = lazy(importFunc);

    return function Wrapped(): JSX.Element {
        return (
            <SuspenseBoundary>
                <Component/>
            </SuspenseBoundary>
        )
    }
}

export default LazyWithSuspense;