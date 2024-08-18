import { ReactNode } from "react";

export const Quote = ({ children }: { children: ReactNode }) => {
    return (
        <>
            »{children}«
        </>
    )
}
