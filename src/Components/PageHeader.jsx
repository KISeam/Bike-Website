import React from "react";
import { Link } from "react-router-dom";

const PageHeader = ({ pageName }) => {
  return (
    <div className="w-full">
      <div
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-photo/une-honda-cbr-1000-rr-noir-avec-des-griffures-apparentes-sur-les-cts-1-de-chaques-cots_1305056-118610.jpg?semt=ais_hybrid&w=740")`,
        }}
        className="w-full bg-cover bg-center h-[200px] flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-black/50 z-0"></div>

        <div className="w-11/12 2xl:w-9/12 mx-auto relative z-10 text-white">
          <div className="flex flex-col gap-4">
            <div className="flex gap-6 items-center">
              <Link
                to="/"
                className="text-gray-300 hover:text-white transition"
              >
                Home
              </Link>
              <span className="text-gray-300">/</span>
              <p
                className="text-gray-300 hover:text-white transition"
              >
                {pageName}
              </p>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold">
              {pageName}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PageHeader;
