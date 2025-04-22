import React, { useEffect, useState } from "react";
import BikeCard from "../../Components/BikeCard";
import PageHeader from "../../Components/PageHeader";

const Bikes = () => {
  const [sortOption, setSortOption] = useState("default");
  const [bikes, setBikes] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
    fetch("/Bike-Data/Bikes.json")
      .then((res) => res.json())
      .then((data) => {
        setBikes(data);
        setIsLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching bikes:", error);
        setIsLoading(false);
      });
  }, []);

  const sortedBikes = [...bikes].sort((a, b) => {
    if (sortOption === "price-low-to-high") {
      return a.originalPrice - b.originalPrice;
    }
    if (sortOption === "price-high-to-low") {
      return b.originalPrice - a.originalPrice;
    }
    return 0; // Default: no sorting
  });

  if (isLoading)
    return <div className="text-white text-center py-20">Loading bikes...</div>;

  return (
    <>
    <div>
    <PageHeader pageName={"Bikes"} />
    <div className="bg-black py-16 md:py-20">
      <div className="w-11/12 md:w-9/12 mx-auto">
        <div className="flex flex-col gap-6 md:gap-12">
          <div className="flex flex-wrap items-center justify-between gap-6 py-10 border-b border-gray-600">
            <p className="text-[#b1b1b1] font-normal text-base">
              {bikes.length} Products available
            </p>
            <div className="flex items-center gap-6">
              <p className="text-[#b1b1b1] font-normal text-base">Sort By</p>
              <select
                className="bg-[#121212] text-[#b1b1b1] font-normal text-base border border-[#333333] rounded-md p-2"
                value={sortOption}
                onChange={(e) => setSortOption(e.target.value)}
              >
                <option value="default">Default</option>
                <option value="price-low-to-high">Price: Low to High</option>
                <option value="price-high-to-low">Price: High to Low</option>
              </select>
            </div>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
            {sortedBikes.map((bike) => (
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
        </div>
      </div>
    </div>
    </div>
    </>
  );
};

export default Bikes;
