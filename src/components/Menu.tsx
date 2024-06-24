import { useLocation } from "react-router";
import { Navbar, NavItem } from "./Navbar";

const uppercase = (s: string) => {
    if (!s.length) return ''

    return `${s[0].toUpperCase()}${s.slice(1)}`
}


export const Menu = () => {
    const { pathname } = useLocation()

    const pages = ['vita', 'media', 'contact']

    return (
        <Navbar title='Niels Pfeffer'>
            {pages.map(page => (
                <NavItem key={`page_${page}`} to={`#/${page}`}>
                    {pathname.slice(1) === page
                        ? <b>{uppercase(page)}</b>
                        : uppercase(page)
                    }
                </NavItem>
            ))}
        </Navbar>
    )
}
