import React from "react";
import ProductCard from "../../../Components/ProductCard";

const RightProductsDetalis = ({
  products,
  currentPage,
  totalPages,
  setCurrentPage,
}) => {

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 2xl:grid-cols-3 gap-6">
        {products.map((product) => (
          <ProductCard
            key={product.id}
            id={product.id}
            name={product.name}
            image={product.image}
            category={product.category}
            rating={product.rating}
            discountPrice={product.discountPrice}
            discountPresent={product.discountPresent}
            price={product.price}
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
      {totalPages > 1 && (
        <div className="flex justify-center items-center gap-4 pt-10">
          <button
            onClick={() => setCurrentPage((prev) => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="px-4 py-2 bg-[#ff2626] text-white rounded disabled:opacity-50 cursor-pointer"
          >
            Prev
          </button>
          <span className="text-white text-lg">
            {currentPage} / {totalPages}
          </span>
          <button
            onClick={() =>
              setCurrentPage((prev) => Math.min(prev + 1, totalPages))
            }
            disabled={currentPage === totalPages}
            className="px-4 py-2 bg-[#ff2626] text-white rounded disabled:opacity-50 cursor-pointer"
          >
            Next
          </button>
        </div>
      )}
    </div>
  );
};

export default RightProductsDetalis;
