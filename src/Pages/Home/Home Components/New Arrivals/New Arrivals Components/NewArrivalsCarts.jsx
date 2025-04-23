import React, { useEffect, useState } from "react";
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import ProductCard from "../../../../../Components/ProductCard";

const NewArrivalsCarts = ({ selectedCategory = "All" }) => {
  const [allProducts, setAllProducts] = useState([]);
  const [filteredProducts, setFilteredProducts] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  const productsPerPage = 3;
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setIsLoading(true);
    fetch("/Product-Data/Products.json")
      .then((res) => res.json())
      .then((data) => {
        const newArrivals = data.filter(
          (product) => product.groupName === "New Products"
        );
        setAllProducts(newArrivals);
        setFilteredProducts(newArrivals);
      })
      .catch((error) => {
        console.error("Error loading products:", error);
      })
      .finally(() => {
        setIsLoading(false);
      });
  }, []);

  useEffect(() => {
    if (selectedCategory === "All") {
      setFilteredProducts(allProducts);
    } else {
      const filtered = allProducts.filter(
        (product) => product.category === selectedCategory
      );
      setFilteredProducts(filtered);
    }
    setCurrentIndex(0);
  }, [selectedCategory, allProducts]);

  const handleNext = () => {
    const nextIndex = currentIndex + productsPerPage;
    if (nextIndex < filteredProducts.length) {
      setCurrentIndex(nextIndex);
    }
  };

  const handlePrevious = () => {
    const prevIndex = currentIndex - productsPerPage;
    if (prevIndex >= 0) {
      setCurrentIndex(prevIndex);
    }
  };

  const visibleProducts = filteredProducts.slice(
    currentIndex,
    currentIndex + productsPerPage
  );

  const showArrows = filteredProducts.length > productsPerPage;

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-48">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-[#ff2626]"></div>
      </div>
    );
  }

  return (
    <div className="relative">
      {/* Products Grid */}
      <div className="w-full">
        {filteredProducts.length === 0 ? (
          <div className="flex justify-center items-center h-48 text-gray-500 text-lg font-medium">
            {allProducts.length === 0
              ? "No products available"
              : "No products found in this category"}
          </div>
        ) : (
          <div className="relative">
            {showArrows && (
              <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className="absolute left-[-40px] top-1/2 transform -translate-y-1/2 cursor-pointer bg-[#ff2626] text-white p-3 rounded-full disabled:opacity-50 z-10 hover:bg-[#e60000] transition-colors"
              >
                <GoChevronLeft size={24} />
              </button>
            )}

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
              {visibleProducts.map((product) => (
                <ProductCard
                  key={product.id}
                  id={product.id}
                  name={product.name}
                  image={product.image}
                  category={product.category}
                  rating={product.rating}
                  discountPrice={product.discountPrice}
                  price={product.price}
                  discountPresent={product.discountPresent}
                  productSell={product.productSell}
                  viewCart={product.viewCart}
                  review={product.review}
                  shortDetails={product.shortDetails}
                  brandName={product.brandName}
                  model={product.model}
                  sku={product.sku}
                />
              ))}
            </div>

            {showArrows && (
              <button
                onClick={handleNext}
                disabled={
                  currentIndex + productsPerPage >= filteredProducts.length
                }
                className="absolute right-[-40px] top-1/2 transform -translate-y-1/2 cursor-pointer bg-[#ff2626] text-white p-3 rounded-full disabled:opacity-50 z-10 hover:bg-[#e60000] transition-colors"
              >
                <GoChevronRight size={24} />
              </button>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default NewArrivalsCarts;