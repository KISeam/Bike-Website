import React from "react";
import { Link } from "react-router-dom";

const ServiceImg = () => {
  return (
    <div className="relative">
      <div
        className="relative"
        style={{
          backgroundImage: `url("https://upload.wikimedia.org/wikipedia/commons/thumb/2/2e/Norton_Motorcycle.jpg/1200px-Norton_Motorcycle.jpg")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className="absolute inset-0 bg-black/70 bg-opacity-10"></div>

        <div className="relative z-10 w-11/12 2xl:w-9/12 mx-auto py-16 md:py-20 lg:py-36">
          <div className="flex flex-col gap-6 text-white w-full lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-semibold uppercase">
              Free Service — Exclusive for Premium Members
            </h1>
            <p className="text-base lg:text-lg roboto font-normal">
              Whether it’s a question, comment, or suggestion, we’re all ears.
              Contact us by phone, email, or post — we’re here for you.
            </p>

            <Link
              to="/contact"
              className="bg-gradient-to-r from-red-600 to-red-700 text-white px-6 py-3.5 rounded-md hover:from-red-700 hover:to-red-600 cursor-pointer transition duration-300 w-fit uppercase font-semibold"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceImg;
