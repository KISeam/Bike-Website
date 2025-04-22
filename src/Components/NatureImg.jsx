import React from "react";

const NatureImg = () => {
  return (
    <div className="relative">
      <div
        className="relative"
        style={{
          backgroundImage: `url("https://img.freepik.com/premium-photo/classic-motorcycle-edge-road-sunset_258246-11376.jpg?semt=ais_hybrid&w=740")`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className="absolute inset-0 bg-black/50 bg-opacity-10"></div>
        
        <div className="relative z-10 w-11/12 2xl:w-9/12 mx-auto py-16 md:py-20 lg:py-36">
          <div className="flex flex-col gap-6 text-white w-full lg:w-1/2">
            <h1 className="text-4xl lg:text-5xl font-semibold uppercase">
              A Step Above — Built for Riders, Inspired by the Road
            </h1>
            <p className="text-base lg:text-lg roboto font-normal">
              We're here to help you stay safe and moving — whether you're
              driving, relaxing at home, or exploring new places. We make our
              Members' days a little better, every day. And since we're Members
              too, you can trust we'll always do what's right.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NatureImg;