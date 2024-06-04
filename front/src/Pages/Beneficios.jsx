import { useState } from "react";
import carousel1 from "../assets/Carrousel_imagen_1.png";
import carousel2 from "../assets/Carrousel_imagen_2.png";
import carousel3 from "../assets/Carrousel_imagen_3.png";

const Beneficios = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      image: carousel1,
      text: "Tarjetas de crédito para compras en cuotas",
      text2: "La mejor forma de alcanzar lo que deseas",
      text3: "¡Tarjetealo! 😎",
      button: "Conocer tarjetas",
    },
    {
      image: carousel2,
      text: "Disfruta los mejores espectaculos con tu tarjeta Premium",
      button: "Conocer mas",
    },
    {
      image: carousel3,
      text: "Veranito con promos para disfrutar en familia",
      text2: "Tenes ahorros y cuota sin interes estes donde estes",
      button: "Promociones",
    },
  ];

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="md:flex justify-center">
      <div className="flex xs:flex-col xl:flex-row xs:ml-[30px]  xs:h-[600px] xl:h-[500px] xs:w-[360px] xl:w-[80vw] mt-8 mb-16">
        <div className="flex-grow relative ">
          <div className="absolute top-0 right-0 bottom-0 left-4 flex items-center justify-around border-2 rounded-2xl ">
            <img
              src={slides[currentSlide].image}
              className="object-cover xs:h-[180px] xl:h-[400px] w-auto xs:mt-32 xl:ml-[620px] mb-20"
              alt="Carousel Slide"
            />
            <div className="text-black absolute top-0 left-0 xs:ml-20 xl:ml-28 xs:mt-4 xl:mt-20">
              <h1 className="xs:text-xl xs:text-center xl:text-5xl font-bold xs:w-[180px] xl:w-[600px] xs:-ml-2 xl:text-left flex-row xs:gap-6 xl:gap-10 mb-10 items-center">
                {slides[currentSlide].text}
              </h1>
              <h1 className="xs:text-xl xl:text-2xl mb-4 xs:w-[200px] xl:w-[400px] xs:text-center xl:text-left flex-row gap-10 items-center">
                {slides[currentSlide].text2}
              </h1>
              <h1 className=" xs:hidden xl:text-2xl xl:mt-8 xl:w-[400px] xl:text-left xl:flex-row xl:gap-10 xl:items-center">
                {slides[currentSlide].text3}
              </h1>
              <button className="bg-amber-400 xs:mt-[250px] text-black font-bold xs:text-lg xl:text-2xl xs:px-10 xl:px-20 xs:py-2 xl:py-3 xl:m-2 xl:mt-10 rounded-lg">
                {slides[currentSlide].button}
              </button>
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

