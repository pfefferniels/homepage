import { useEffect, useState } from "react"

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
        <>
            <img
                src={images[index]}
                style={{
                    maxWidth: '20vw',
                    border: '1px solid black'
                }} />
        </>
    )
}