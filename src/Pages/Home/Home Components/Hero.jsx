import React, { useState, useEffect } from "react";
import { FaAnglesRight } from "react-icons/fa6";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "react-router-dom";
import heroImg from "../../../assets/Images/heroImg.jpg";
import heroImg1 from "../../../assets/Images/helmet-banner.jpg";
import heroImg2 from "../../../assets/Images/header-banner2.jpg";

const Hero = () => {
  const slides = [
    {
      id: 1,
      image: heroImg,
      title: "New Collection",
      price: "Starting at $2000.00",
      link: "/bikes",
    },
    {
      id: 2,
      image: heroImg1,
      title: "Explore Helmet Collection",
      price: "Starting at $29.99",
      link: "/products",
    },
    {
      id: 3,
      image: heroImg2,
      title: "Explore Accessories",
      price: "Starting at $29.99",
      link: "/products",
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  return (
    <div className="relative w-full">
      <div className="flex transition-transform duration-700 ease-in-out overflow-hidden">
        <AnimatePresence initial={false} custom={currentSlide}>
          <motion.div
            key={currentSlide}
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "-100%" }}
            transition={{ duration: 0.8 }}
            className="w-full flex-shrink-0 relative"
          >
            <div className="h-[500px] md:h-[600px] lg:h-[800px] w-full overflow-hidden relative">
              <img
                src={slides[currentSlide].image}
                alt={slides[currentSlide].title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-transparent"></div>
            </div>

            <div className="absolute top-1/3 left-4 md:left-10 lg:left-20 2xl:left-60 flex flex-col gap-1 z-10">
              <motion.h1
                className="text-4xl md:text-5xl lg:text-6xl font-semibold text-white mb-4 drop-shadow-md"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
              >
                {slides[currentSlide].title}
              </motion.h1>
              <motion.p
                className="text-white text-lg md:text-xl lg:text-2xl mb-4 drop-shadow-md"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                {slides[currentSlide].price}
              </motion.p>
              <Link
                to={slides[currentSlide].link}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-md hover:from-red-700 hover:to-red-600 cursor-pointer transition duration-300 w-fit"
              >
                Shop Now
                <FaAnglesRight className="inline-block ml-2" />
              </Link>
            </div>
          </motion.div>
        </AnimatePresence>
      </div>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            } transition duration-300`}
            onClick={() => setCurrentSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
