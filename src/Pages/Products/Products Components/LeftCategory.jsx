import React, { useEffect, useState } from "react";
import { IoSearchSharp } from "react-icons/io5";
import { useSearchParams } from "react-router-dom";

const LeftCategory = ({
  productCategories,
  selectedCategories,
  setSelectedCategories,
  searchQuery,
  setSearchQuery,
}) => {
  const [searchParams] = useSearchParams();
  const categoryParam = searchParams.get("category");
  const [localSearchQuery, setLocalSearchQuery] = useState(searchQuery || "");

  useEffect(() => {
    if (categoryParam) {
      const decodedCategory = decodeURIComponent(categoryParam);
      setSelectedCategories([decodedCategory]);
    } else {
      setSelectedCategories([]);
    }
  }, [categoryParam]);

  useEffect(() => {
    setSearchQuery(localSearchQuery);
  }, [localSearchQuery]);

  const handleCheckboxChange = (categoryName) => {
    if (categoryName === "All") {
      setSelectedCategories([]);
    } else if (selectedCategories.includes(categoryName)) {
      setSelectedCategories([]);
    } else {
      setSelectedCategories([categoryName]);
    }
  };

  const handleSearchChange = (e) => {
    setLocalSearchQuery(e.target.value);
  };

  return (
    <div>
      <div className="relative mb-8">
        <input
          className="w-full pl-4 pr-10 py-3 text-lg roboto text-white placeholder-gray-500 bg-[#121212] border border-gray-600 rounded-lg focus:outline-none focus:ring-2 focus:ring-[#ff2626] focus:border-transparent transition-all duration-200"
          type="text"
          placeholder="Search products..."
          value={localSearchQuery}
          onChange={handleSearchChange}
        />
        <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-500">
          <IoSearchSharp className="text-lg" />
        </div>
      </div>

      <div className="bg-[#121212] border border-gray-600 rounded-lg shadow-sm overflow-hidden">
        <h3 className="text-2xl 2xl:text-3xl font-semibold text-white bg-[#121212] px-6 py-4 border-b border-gray-600">
          Categories
        </h3>
        <div className="flex flex-col gap-2 p-4">
          <div
            className="flex items-center gap-3 text-sm text-white hover:text-[#ff2626] px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer"
            onClick={() => handleCheckboxChange("All")}
          >
            <input
              type="checkbox"
              class="checkbox checkbox-neutral checkbox-sm border-gray-600"
              checked={selectedCategories.length === 0}
              onChange={() => handleCheckboxChange("All")}
            />
            <span className="roboto text-lg">All</span>
          </div>

          {productCategories
            .filter((category) => category.name !== "All")
            .map((category) => (
              <div
                key={category.id}
                className="flex items-center gap-3 text-sm text-white hover:text-[#ff2626] px-4 py-2 rounded-md transition-colors duration-200 cursor-pointer"
                onClick={() => handleCheckboxChange(category.name)}
              >
                <input
                  type="checkbox"
                  className="checkbox checkbox-neutral checkbox-sm border-gray-300"
                  checked={selectedCategories.includes(category.name)}
                  onChange={() => handleCheckboxChange(category.name)}
                />
                <span className="roboto text-lg">{category.name}</span>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default LeftCategory;
