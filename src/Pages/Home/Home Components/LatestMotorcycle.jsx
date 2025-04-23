import React, { useEffect, useState } from "react";
import { GoArrowUpRight, GoChevronLeft, GoChevronRight } from "react-icons/go";
import { Link } from "react-router-dom";
import BikeCard from "../../../Components/BikeCard";

const LatestMotorcycle = () => {
  const [bikes, setBikes] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const bikesPerPage = 3;

  useEffect(() => {
    fetch("/Bike-Data/Bikes.json")
      .then((res) => res.json())
      .then((data) => setBikes(data));
  }, []);

  const handleNext = () => {
    if (currentIndex + bikesPerPage < bikes.length) {
      setCurrentIndex(currentIndex + bikesPerPage);
    }
  };

  const handlePrevious = () => {
    if (currentIndex - bikesPerPage >= 0) {
      setCurrentIndex(currentIndex - bikesPerPage);
    }
  };

  const visibleBikes = bikes.slice(currentIndex, currentIndex + bikesPerPage);

  return (
    <div className="bg-[#121212] py-16 md:py-20">
      <div className="w-11/12 2xl:w-9/12 mx-auto">
        <div className="flex flex-col gap-6 md:gap-12">
          {/* Header */}
          <div className="flex flex-wrap justify-between items-end uppercase text-white">
            <div className="space-y-4">
              <p className="bg-[#ff2626] py-2 px-2 md:px-4 text-sm w-fit">
                Our Bike Categories
              </p>
              <h1 className="text-4xl lg:text-5xl font-semibold">
                Latest Motorbikes
              </h1>
            </div>

            <Link
              to="/bikes"
              className="flex items-center gap-1 border-transparent border-b-2 hover:border-[#ff2626]"
            >
              <p className="text-base font-semibold">View All Bikes</p>
              <GoArrowUpRight className="text-xl mt-1" />
            </Link>
          </div>

          {/* Cards with Side Arrow Buttons */}
          <div className="relative flex items-center justify-center">
            {/* Left Arrow */}
            <button
              onClick={handlePrevious}
              disabled={currentIndex === 0}
              className="absolute left-[-30px] lg:left-[-70px] cursor-pointer bg-[#ff2626] text-white p-3 rounded-full disabled:opacity-50"
            >
              <GoChevronLeft size={24} />
            </button>

            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
              {visibleBikes.map((bike) => (
                <BikeCard
                  key={bike.id}
                  name={bike.name}
                  images={bike.images}
                  originalPrice={bike.originalPrice}
                  shortDescription={bike.shortDescription}
                  topSpeed={bike.topSpeed}
                  power={bike.power}
                  torque={bike.torque}
                  companyName={bike.companyName}
                  engineType={bike.engineType}
                  bikeWeight={bike.bikeWeight}
                />
              ))}
            </div>

            {/* Right Arrow */}
            <button
              onClick={handleNext}
              disabled={currentIndex + bikesPerPage >= bikes.length}
              className="absolute right-[-30px] lg:right-[-70px] cursor-pointer bg-[#ff2626] text-white p-3 rounded-full disabled:opacity-50"
            >
              <GoChevronRight size={24} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LatestMotorcycle;
