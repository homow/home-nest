import {ChildrenComponentProps} from "@/types/ui";
import "@/styles/globals.css";

export default function RootLayout(
    {
        children,
    }: ChildrenComponentProps
) {
    return (
        <html lang="en">
        <body
            className={
                "antialiased"
            }
        >
        {children}
        </body>
        </html>
    );
};