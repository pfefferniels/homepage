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
            <h1 className="sr-only">Contact</h1>
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
                <tr><td colSpan={2} style={{ height: '3rem' }} /></tr>
                <tr>
                    <td />
                    <td style={{ textAlign: 'left', lineHeight: '1.85rem' }}>
                        Interested in studying lute at ZHdK?
                        Feel free to contact me for a trial lesson.<br />
                        <a
                            style={{ color: 'inherit' }}
                            href='https://www.zhdk.ch/studium/musik/ma-music-performance-laute-21365'>
                            More info on the ZHdK lute programme</a>.
                    </td>
                </tr>
            </table>
        </div>
    )
}
