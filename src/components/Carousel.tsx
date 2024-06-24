import { useEffect, useState } from "react"
import styled from "styled-components"

const ImageWrapper = styled.div`
    max-width: 70vw;
    margin-left: auto; 
    margin-right: auto;

    @media(min-width: 768px) {
        max-width: 20vw;
    }
`

export const Carousel = ({ images, seconds }: { images: string[], seconds: number }) => {
    const [index, setIndex] = useState(0)

    useEffect(() => {
        const id = setInterval(
            () => setIndex(prev => prev === images.length - 1 ? 0 : prev + 1),
            seconds * 1000)

        return () => clearInterval(id)
    }, [images.length, seconds])

    if (index >= images.length) return <span>Something went wrong</span>

    return (
        <ImageWrapper>
            <img
                src={images[index]}
                style={{
                    width: '100%',
                    border: '1px solid black'
                }} />
        </ImageWrapper>
    )
}