import { useState, useEffect } from 'react'

type CarouselProps = {
    images: string[];
}

export default function Carousel({ images }: CarouselProps) {
    const [curIndex, setCurIndex] = useState(0)

    useEffect(() => {
        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === 'ArrowLeft') prevSlide()
            if (e.key === 'ArrowRight') nextSlide()
        }

        window.addEventListener('keydown', handleKeyDown)
        return () => window.removeEventListener('keydown', handleKeyDown)
    }, [curIndex])

    const prevSlide = () => {
        setCurIndex((prevIndex) =>
            prevIndex === 0 ? images.length - 1 : prevIndex - 1
        )
    }

    const nextSlide = () => {
        setCurIndex((prevIndex) =>
            prevIndex === images.length - 1 ? 0 : prevIndex + 1
        )
    }

    if (images.length === 0) return <p>No images available</p>

    return (
        <div className="relative w-full max-w-lg mx-auto">
            <div className="overflow-hidden relative">
                <div className="whitespace-nowrap transition-transform ease-out duration-300"
                    style={{
                        transform: `translateX(-${curIndex * 100}%)`,
                    }}
                >
                    {images.map((image, index) => (
                        <img 
                            key={index}
                            src={image}
                            alt={`Slide ${index}`}
                            className="w-full h-64 object-cover inline-block"
                        />
                    ))}
                </div>
            </div>

            {images.length > 1 && (
                <>
                    <button
                        onClick={prevSlide}
                        className="absolute top-1/2 left-2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-black bg-opacity-50 text-white rounded-full"
                    >
                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-r-[10px] border-r-white"></div>
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute top-1/2 right-2 -translate-y-1/2 flex items-center justify-center w-10 h-10 bg-black bg-opacity-50 text-white rounded-full"
                    >
                        <div className="w-0 h-0 border-t-[6px] border-t-transparent border-b-[6px] border-b-transparent border-l-[10px] border-l-white"></div>
                    </button>
                </>
            )}

            <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
                {images.map((_, index) => (
                    <div
                        key={index}
                        className={`w-3 h-3 rounded-full ${
                            index === curIndex ? 'bg-blue-500' : 'bg-gray-300'
                        }`}
                    />
                ))}
            </div>
        </div>
    )
}