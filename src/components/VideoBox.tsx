import { ReactNode } from "react";

export const VideoBox = ({ link, title, children }: { link: string, title: string, children: ReactNode }) => {
    const width = 600
    const ratio = 16/9
    const height = width / ratio

    return (
        <div
            style={{
                display: 'flex',
                width: 'fit-content',
                marginLeft: 'auto',
                marginRight: 'auto',
                padding: '1em',
                marginBottom: '2em'
            }}>
            <div>
                <iframe
                    style={{
                        border: 'none'
                    }}
                    width={width}
                    height={height}
                    src={link}
                    allowFullScreen />
            </div>
            <div
                style={{
                    textAlign: 'left',
                    marginLeft: '1em',
                    width: '30vw'
                }}>
                <h4
                    style={{
                        marginTop: 0,
                        paddingTop: 0
                    }}>{title}</h4>

                <div style={{
                    fontSize: '0.9em',
                    lineHeight: '1.5em'
                }}>
                    {children}
                </div>
            </div>
        </div>
    )
}
