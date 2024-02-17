import { useState } from 'react';
import carousel1 from '/docs/images/carousel/carousel-1.svg';
import carousel2 from '/docs/images/carousel/carousel-2.svg';
import carousel3 from '/docs/images/carousel/carousel-3.svg';
import carousel4 from '/docs/images/carousel/carousel-4.svg';
import carousel5 from '/docs/images/carousel/carousel-5.svg';

const Beneficios = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 4 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 4 ? 0 : prevSlide + 1));
    };

    return (
        <div>
            <div id="default-carousel" className="relative w-full" data-carousel="slide">
                <div className="relative h-56 overflow-hidden rounded-lg md:h-96">
                    <div className={currentSlide === 0 ? "block duration-700 ease-in-out" : "hidden"} data-carousel-item>
                        <img src={carousel1} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className={currentSlide === 1 ? "block duration-700 ease-in-out" : "hidden"} data-carousel-item>
                        <img src={carousel2} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className={currentSlide === 2 ? "block duration-700 ease-in-out" : "hidden"} data-carousel-item>
                        <img src={carousel3} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className={currentSlide === 3 ? "block duration-700 ease-in-out" : "hidden"} data-carousel-item>
                        <img src={carousel4} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                    <div className={currentSlide === 4 ? "block duration-700 ease-in-out" : "hidden"} data-carousel-item>
                        <img src={carousel5} className="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="..." />
                    </div>
                </div>
                <div className="absolute z-30 flex -translate-x-1/2 bottom-5 left-1/2 space-x-3 rtl:space-x-reverse">
                    {[0, 1, 2, 3, 4].map((index) => (
                        <button
                            key={index}
                            type="button"
                            className={`w-3 h-3 rounded-full ${currentSlide === index ? "bg-white" : "bg-gray-500"}`}
                            aria-current={currentSlide === index ? "true" : "false"}
                            aria-label={`Slide ${index + 1}`}
                            onClick={() => setCurrentSlide(index)}
                        />
                    ))}
                </div>
                <button type="button" className="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev onClick={handlePrevSlide}>
                    {/* Left arrow SVG */}
                </button>
                <button type="button" className="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next onClick={handleNextSlide}>
                    {/* Right arrow SVG */}
                </button>
            </div>
        </div>
    );
};

export default Beneficios;
