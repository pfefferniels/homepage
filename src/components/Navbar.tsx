import { ReactNode } from 'react'
import { Link } from 'react-router-dom'

const NavLink = ({ to, children }: { to: string, children: ReactNode }) => {
    return (
        <Link
            to={to}
            style={{
                textDecoration: 'none',
                color: 'inherit'
            }}>
            {children}
        </Link>
    )
}

const Title = ({ children }: { children: ReactNode }) => {
    return (
        <NavLink to='/'>
            <div style={{
                fontSize: '1.1em',
                fontWeight: 'bold'
            }}>

                {children}
            </div>
        </NavLink>
    )
}

export const NavItem = ({ children, to }: { to: string, children: ReactNode }) => {
    return (
        <NavLink to={to}>
            <div style={{
                margin: '0.1em 1em'
            }}>
                {children}
            </div>
        </NavLink>
    )
}

export const Navbar = ({ title, children }: { title: ReactNode, children: ReactNode }) => {
    return (
        <header style={{
            position: 'fixed',
            width: '100%',
            top: 0,
            zIndex: 2,
            backgroundColor: 'white'
        }}>
            <div style={{
                paddingTop: '1.8vw',
                paddingBottom: '1.8vw',
                paddingLeft: '7vw',
                paddingRight: '7vw',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'start',
                flexWrap: 'nowrap',
                flex: '1 0 67%'
            }}>
                <Title>
                    {title}
                </Title>
                <div style={{
                    textAlign: 'right',
                    marginLeft: 'auto',
                    paddingLeft: '2vw',
                    flexGrow: 1,
                    flexShrink: 1
                }}>
                    <nav style={{
                        display: 'inline-flex',
                        justifyContent: 'flex-end',
                    }}>
                        {children}
                    </nav>
                </div>
            </div>
        </header>
    )
}
