import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { GoArrowUpRight } from "react-icons/go";

const BikeCategory = () => {
  const [bikes, setBikes] = useState([])

  useEffect(() => {
    fetch("/Bike-Data/BikeCategory.json")
      .then((res) => res.json())
      .then((data) => setBikes(data))
  }, [])

  return (
    <div className="bg-[#121212] py-16 md:py-20">
      <div className="w-11/12 2xl:w-9/12 mx-auto overflow-hidden">
        <div className="flex flex-col gap-6 md:gap-12">
          <div className="flex flex-wrap justify-between items-end uppercase text-white">
            <div className="space-y-4">
              <p className="bg-[#ff2626] py-2 px-2 md:px-4 text-sm w-fit">
                Our Bike Categories
              </p>
              <h1 className="text-4xl lg:text-5xl font-semibold">Bike Types</h1>
            </div>

            <Link
              to="/bikes"
              className="flex items-center gap-1 border-transparent border-b-2 hover:border-[#ff2626]"
            >
              <p className="text-base font-semibold">View All Bikes</p>
              <GoArrowUpRight className="text-xl mt-1" />
            </Link>
          </div>

          <div className="flex gap-4 h-[500px]">
            {bikes.map((bike) => (
              <div
                key={bike.id}
                className="card min-w-[70px] h-full rounded-[30px] flex items-end relative overflow-hidden transition-all duration-500 ease-in-out flex-grow hover:flex-grow-[7]"
              >
                <img
                  src={bike.imageUrl}
                  alt={bike.name}
                  className="absolute w-full h-full object-cover transition-all duration-500"
                />
                <div className="absolute inset-0 bg-opacity-30 opacity-0 hover:opacity-100 transition-opacity duration-500 flex items-end p-6">
                  <h3 className="text-black text-3xl font-semibold">
                    {bike.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default BikeCategory;
