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
  const [direction, setDirection] = useState(1); // 1 for forward, -1 for backward

  useEffect(() => {
    const interval = setInterval(() => {
      setDirection(1);
      setCurrentSlide((prev) => (prev === slides.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToSlide = (index) => {
    setDirection(index > currentSlide ? 1 : -1);
    setCurrentSlide(index);
  };

  const variants = {
    enter: (direction) => ({
      x: direction > 0 ? "100%" : "-100%",
      opacity: 1,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (direction) => ({
      x: direction > 0 ? "-100%" : "100%",
      opacity: 1,
    }),
  };

  return (
    <div className="relative w-full bg-black h-[500px] md:h-[600px] lg:h-[800px] overflow-hidden">
      <AnimatePresence custom={direction} initial={false}>
        <motion.div
          key={currentSlide}
          custom={direction}
          variants={variants}
          initial="enter"
          animate="center"
          exit="exit"
          transition={{
            x: { type: "spring", stiffness: 300, damping: 100 },
            opacity: { duration: 0.2 },
          }}
          className="absolute inset-0 w-full h-full"
        >
          <div className="w-full h-full relative">
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
              transition={{ duration: 0.8, delay: 0.3 }}
            >
              {slides[currentSlide].title}
            </motion.h1>
            <motion.p
              className="text-white text-lg md:text-xl lg:text-2xl mb-4 drop-shadow-md"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              {slides[currentSlide].price}
            </motion.p>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.8, delay: 0.9 }}
            >
              <Link
                to={slides[currentSlide].link}
                className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3 rounded-md hover:from-red-700 hover:to-red-600 cursor-pointer transition duration-300 w-fit"
              >
                Shop Now
                <FaAnglesRight className="inline-block ml-2" />
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Slide Indicators */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2 z-10">
        {slides.map((_, index) => (
          <div
            key={index}
            className={`w-3 h-3 rounded-full cursor-pointer ${
              index === currentSlide ? "bg-white" : "bg-gray-400"
            } transition duration-300`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
