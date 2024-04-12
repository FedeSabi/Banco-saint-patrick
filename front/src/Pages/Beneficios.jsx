/*
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
                        <button className="bg-amber-500 text-black font-bold px-8 py-4 m-2 rounded-lg">Conocer tarjetas</button>
                    </div>
                </div>
                <div className="flex-grow flex items-left justify-left">
                    <div className="flex-row gap-10 items-center text-left mt-[400px] w-[600px] ml-24">
                        <h1 className="text-5xl font-bold mb-4">Disfruta los <span>mejores espectaculos</span> con tu tarjeta Premium </h1>
                        <button className="bg-amber-500 text-black font-bold px-8 py-4 m-2 rounded-lg">Conocer mas</button>
                    </div>
                </div>
                <div className="flex-grow flex items-left justify-left">
                    <div className="flex-row gap-10 items-center text-left mt-[400px] w-[600px] ml-24">
                        <h1 className="text-5xl font-bold mb-4">Veranito con promos para disfrutar en familia</h1>
                        <h2 className="text-xl font-semibold mb-4">Tenes ahorros y cuota sin interes estes donde estes</h2>
                        <h2 className="text-xl font-semibold mb-8">¡Tarjetealo!</h2>
                        <button className="bg-amber-500 text-black font-bold px-8 py-4 m-2 rounded-lg">Conocer promos</button>
                    </div>
                </div>
                <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-around mt-52">
                    <img
                        src={slides[currentSlide]}
                        className="object-cover h-[600px] w-auto ml-[620px]"
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
    
    const slides = [
        { image: carousel1, text: "Tarjetas de crédito para compras en cuotas", text2: "La mejor forma de alcanzar lo que deseas",text3: "¡Tarjetealo! 😎", button: "Conocer tarjetas"  },
        { image: carousel2, text: "Disfruta los mejores espectaculos con tu tarjeta Premium" , button: "Conocer mas"  },
        { image: carousel3, text: "Veranito con promos para disfrutar en familia", text2: "Tenes ahorros y cuota sin interes estes donde estes", button: "Conocer promos" }
    ];

    const handlePrevSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
    };

    const handleNextSlide = () => {
        setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
    };

    return (
        <div className="flex flex-row ml-36 h-[500px] w-[80vw] mt-12 bg-zinc-500 sm:bg-blue-300 md:bg-green-300 lg:bg-yellow-300 xl:bg-orange-300 2xl:bg-red-500 ">
            <div className="flex-grow relative ">
                <div className="absolute top-0 right-0 bottom-0 left-0 flex items-center justify-around border-2 rounded-2xl ">
                    <img
                        src={slides[currentSlide].image}
                        className="object-cover h-[450px] w-auto ml-[620px]"
                        alt="Carousel Slide"
                    />
                    <div className="text-black absolute top-0 left-0 ml-28 mt-20">
                        <h1 className="text-5xl font-bold w-[600px] text-left flex-row gap-10 mb-12 items-center">{slides[currentSlide].text}</h1>
                        <h1 className="text-2xl mb-4 w-[400px] text-left flex-row gap-10 items-center">{slides[currentSlide].text2}</h1>
                        <h1 className='text-2xl mt-8 w-[400px] text-left flex-row gap-10 items-center'>{slides[currentSlide].text3}</h1>
                        <button className="bg-amber-400 text-black font-bold text-2xl px-20 py-3 m-2 mt-16 rounded-lg">{slides[currentSlide].button}</button>
                        
                   </div>
                </div>
                <button
                    className="absolute top-1/2 -translate-y-1/2 left-2 border-black opacity-15 border-2 bg-white text-black px-4 py-2 rounded-full z-10"
                    onClick={handlePrevSlide}
                >
                    &lt;
                </button>
                <button
                    className="absolute top-1/2 -translate-y-1/2 right-2 border-black opacity-15 border-2 bg-white text-black px-4 py-2 rounded-full z-10"
                    onClick={handleNextSlide}
                >
                    &gt;
                </button>
            </div>
        </div>
    );
};

export default Beneficios;