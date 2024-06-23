import { ReactNode } from "react"

export const Body = ({ children }: { children: ReactNode }) => {
    return (
        <main style={{
            marginTop: '8rem',
            textAlign: 'center'
        }}>
            {children}
        </main>
    )
}
