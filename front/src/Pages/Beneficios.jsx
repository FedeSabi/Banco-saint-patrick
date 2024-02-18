/*
import { useState } from 'react';
import carousel1 from '../assets/Carrousel_imagen_1.png'
import carousel2 from '../assets/Carrousel_imagen_2.png'
import carousel3 from '../assets/Carrousel_imagen_3.png'

const Beneficios = () => {
    const [currentSlide, setCurrentSlide] = useState(0);

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? 2 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 2 ? 0 : prevSlide + 1));
    };

    return (
        <div className="flex flex-row h-[900px]">
            <div className="flex-grow relative">
            <div className="flex-grow flex items-left justify-left">
                <div className="flex-row gap-10 items-center text-left mt-[400px] w-[600px] ml-24">
                    <h1 className="text-5xl font-bold mb-4">Tarjetas de crédito para compras en cuotas</h1>
                    <h2 className="text-xl font-semibold mb-4">La mejor forma de alcanzar lo que deseas.</h2>
                    <h2 className="text-xl font-semibold mb-8">¡Tarjetealo!</h2>
                    <button className="bg-green-800 text-white px-8 py-4 rounded-lg">Conocer tarjetas</button>
                </div>
            </div>
            
                <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-around">
                    <img
                        src={currentSlide === 0 ? carousel1 : currentSlide === 1 ? carousel2 : carousel3}
                        className="object-cover h-[700px] ml-[700px]"
                        alt="Carousel Slide"
                    />
                </div>
                <button
                    className="absolute top-1/2 -translate-y-1/2 left-2 bg-green-800 text-white px-6 py-2 rounded-lg z-10"
                    onClick={handlePrevSlide}
                >
                    &lt;
                </button>
                <button
                    className="absolute top-1/2 -translate-y-1/2 right-2 bg-green-800 text-white px-6 py-2 rounded-lg z-10"
                    onClick={handleNextSlide}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Beneficios;

*/

import { useState } from 'react';
import carousel1 from '../assets/Carrousel_imagen_1.png';
import carousel2 from '../assets/Carrousel_imagen_2.png';
import carousel3 from '../assets/Carrousel_imagen_3.png';

const Beneficios = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const slides = [carousel1, carousel2, carousel3];

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div className="flex flex-row h-[900px]">
            <div className="flex-grow relative">
                <div className="flex-grow flex items-left justify-left">
                    <div className="flex-row gap-10 items-center text-left mt-[400px] w-[600px] ml-24">
                        <h1 className="text-5xl font-bold mb-4">Tarjetas de crédito para compras en cuotas</h1>
                        <h2 className="text-xl font-semibold mb-4">La mejor forma de alcanzar lo que deseas.</h2>
                        <h2 className="text-xl font-semibold mb-8">¡Tarjetealo!</h2>
                        <button className="bg-green-800 text-white px-8 py-4 rounded-lg">Conocer tarjetas</button>
                    </div>
                </div>
                
                <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-around mt-52">
                    <img
                        src={slides[currentSlide]}
                        className="object-cover h-[700px] ml-[700px]"
                        alt="Carousel Slide"
                    />
                </div>
                <button
                    className="absolute top-1/2 -translate-y-1/2 left-2 bg-green-800 text-white px-6 py-2 rounded-lg z-10"
                    onClick={handlePrevSlide}
                >
                    &lt;
                </button>
                <button
                    className="absolute top-1/2 -translate-y-1/2 right-2 bg-green-800 text-white px-6 py-2 rounded-lg z-10"
                    onClick={handleNextSlide}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Beneficios;
