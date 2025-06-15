import React, { useEffect, useState } from "react";
import NewArrivalsCarts from "./New Arrivals Components/NewArrivalsCarts";

const NewArrivals = () => {
  const [category, setCategory] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");

  useEffect(() => {
    fetch("/Product-Data/ProductCategory.json")
      .then((res) => res.json())
      .then((data) => {
        setCategory(data);
      });
  }, []);

  return (
    <>
      <div className="bg-[#121212] py-16 md:py-20">
        <div className="my-16 md:my-20">
          <div className="w-11/12 2xl:w-9/12 mx-auto flex flex-col gap-6">
            <div className="flex flex-col lg:flex-row justify-between lg:items-center gap-6">
              <div className="space-y-4">
                <p className="bg-[#ff2626] text-white py-2 px-2 md:px-4 text-sm w-fit">
                  Our New Products
                </p>
                <h1 className="text-4xl lg:text-5xl font-semibold text-white">
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
