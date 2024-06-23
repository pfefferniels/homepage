import { ReactNode } from "react"

const ContactInfo = ({ name, children }: { name: string, children: ReactNode }) => {
    return (
        <tr>
            <td style={{
                height: '2em',
                textAlign: 'right',
                paddingRight: '2em'
            }}>
                {name}
            </td>
            <td style={{
                textAlign: 'left'
            }}>
                {children}
            </td>
        </tr>

    )
}

export const Contact = () => {
    return (
        <div style={{
            marginLeft: 'auto',
            marginRight: 'auto'
        }}>
            <table style={{
                marginLeft: 'auto',
                marginRight: 'auto',
                minWidth: '40vw'
            }}>
                <ContactInfo name='Mail'>niels.pfeffer@gmail.com</ContactInfo>
                <ContactInfo name='YouTube'>
                    <a style={{ color: 'inherit' }} href='https://www.youtube.com/@nielspfeffer/videos'>
                        @NielsPfeffer
                    </a>
                </ContactInfo>
                <ContactInfo name='Instagram'>
                    <a style={{ color: 'inherit' }} href='https://www.instagram.com/pfefferniels/'>
                        @pfefferniels
                    </a>
                </ContactInfo>
            </table>
        </div>
    )
}
