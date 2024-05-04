
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
        <div>
        <div className="flex flex-row ml-36 h-[500px] w-[80vw] mt-12 mb-16">
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
                        <button className="bg-amber-400 text-black font-bold text-2xl px-20 py-3 m-2 mt-10 rounded-lg">{slides[currentSlide].button}</button>
                        
                   </div>
                </div>
                <button
                    className="absolute top-1/2 -translate-y-1/2 left-[-24px] border-black opacity-100 border-2 bg-white text-black px-4 py-2 rounded-full z-10"
                    onClick={handlePrevSlide}
                >
                    &lt;
                </button>
                <button
                    className="absolute top-1/2 -translate-y-1/2 right-[-24px] border-black opacity-100 border-2 bg-white text-black px-4 py-2 rounded-full z-10"
                    onClick={handleNextSlide}
                >
                    &gt;
                </button>
            </div>
        </div>
        </div>
    );
};

export default Beneficios;