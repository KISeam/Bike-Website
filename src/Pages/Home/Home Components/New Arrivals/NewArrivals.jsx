import React, { useEffect, useState } from "react";
import NewArrivalsCarts from "./New Arrivals Components/NewArrivalsCarts";

const NewArrivals = ({ category }) => {
  const [selectedCategory, setSelectedCategory] = useState("All");

  return (
    <>
      <div>
        <div className="my-16 md:my-20">
          <div className="flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
              <div className="space-y-4">
                <p className="bg-[#ff2626] py-2 px-2 md:px-4 text-sm w-fit">
                  Our Bike Categories
                </p>
                <h1 className="text-4xl lg:text-5xl font-semibold">
                  New Arrivals
                </h1>
              </div>

              <div className="flex flex-wrap gap-2 overflow-hidden">
                {category.map((cat) => (
                  <button
                    key={cat.id}
                    onClick={() => setSelectedCategory(cat.name)}
                    className={`text-md font-medium ${
                      selectedCategory === cat.name
                        ? "text-white bg-[#ff2626]"
                        : "text-gray-800 bg-gray-100"
                    } px-3 py-1 rounded-md w-fit cursor-pointer`}
                  >
                    {cat.name}
                  </button>
                ))}
              </div>
            </div>
            <NewArrivalsCarts selectedCategory={selectedCategory} />
          </div>
        </div>
      </div>
    </>
  );
};

export default NewArrivals;
