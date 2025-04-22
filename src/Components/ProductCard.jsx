import React, { useState } from "react";
import { FaShoppingCart, FaEye, FaStar, FaFire } from "react-icons/fa";
import { FaRegHeart } from "react-icons/fa6";
import { IoMdAdd } from "react-icons/io";
import { MdOutlineMinimize, MdPreview } from "react-icons/md";
import { TiMinus } from "react-icons/ti";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const ProductCard = ({
  id,
  name,
  image,
  category,
  rating,
  discountPrice,
  price,
  discountPresent,
  productSell,
  viewCart,
  review,
  shortDetails,
  brandName,
  model,
  sku,
}) => {
  const [quantity, setQuantity] = useState(1);
  const location = useLocation();
  const isProductsPage = location.pathname === "/products";
  const productLink = isProductsPage ? `${id}` : `products/${id}`;

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  return (
    <div className="group text-decoration-none">
      <div className="bg-[#121212] shadow-xl hover:shadow-2xl rounded-lg transform transition-transform duration-300 p-4 w-full max-w-sm">
        <div className="h-60 rounded-xl overflow-hidden relative">
          <img className="w-full h-full object-cover" src={image} alt={name} />

          <div className="flex flex-col gap-2 absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-1000">
            <div
              className="flex items-center justify-center p-3.5 border border-white/50 hover:bg-red-600 cursor-pointer text-white/90 hover:text-white transition-all duration-300 ease-in-out"
              onClick={() => document.getElementById("my_modal_2").showModal()}
            >
              <FaEye className="text-base" />
            </div>

            <dialog id="my_modal_2" className="modal modal-middle">
              <div className="modal-box max-w-[1232px] w-full p-0 overflow-hidden relative">
                <form method="dialog" className="absolute right-2 top-2 z-10">
                  <button className="btn btn-sm btn-circle btn-ghost text-white">
                    ✕
                  </button>
                </form>
                <div className="flex flex-col md:flex-row items-stretch max-h-[90vh]">
                  <div className="w-full md:w-1/2 h-auto">
                    <img
                      className="w-full h-full object-cover"
                      src={image}
                      alt={name}
                    />
                  </div>
                  <div className="w-full md:w-1/2 p-5 md:p-10 bg-[#222222] text-white space-y-4 md:space-y-7 overflow-y-auto">
                    <div className="space-y-2 md:space-y-4">
                      <h3 className="font-semibold text-2xl md:text-4xl leading-5">
                        {name}
                      </h3>
                      <p className="text-sm uppercase roboto">
                        Total Price:{" "}
                        <span className="text-lg md:text-2xl uppercase text-red-500 font-semibold">
                          {discountPrice}
                        </span>
                      </p>
                    </div>

                    <div className="border-t border-white/20 pt-4 md:pt-6">
                      <p className="roboto text-[#b1b1b1] text-base leading-7">
                        {shortDetails}
                      </p>
                    </div>

                    <div className="space-y-3.5 md:space-y-5">
                      <div className="flex flex-wrap gap-4">
                        <div className="flex items-center border border-gray-500 hover:border-gray-300 rounded-lg w-fit">
                          <button
                            className="px-3.5 py-3 rounded-l-lg transition-colors duration-300 cursor-pointer text-gray-400 hover:text-gray-100"
                            onClick={() => handleQuantityChange("decrease")}
                          >
                            <TiMinus className="bg-black/50 rounded-full" />
                          </button>
                          <input
                            type="text"
                            value={quantity}
                            className="w-10 text-center focus:outline-none"
                            readOnly
                          />
                          <button
                            className="px-3.5 py-3 rounded-l-lg transition-colors duration-300 cursor-pointer text-gray-400 hover:text-gray-100 "
                            onClick={() => handleQuantityChange("increase")}
                          >
                            <IoMdAdd className="bg-black/50 rounded-full" />
                          </button>
                        </div>

                        <div>
                          <button className="flex items-center gap-2 px-4 py-2.5 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-lg cursor-pointer text-base">
                            <FaShoppingCart className="h-4 w-4" />
                            <span className="mt-[1px]">Add to Cart</span>
                          </button>
                        </div>
                      </div>

                      <div className="space-y-2 md:space-y-4">
                        <div className="flex gap-2">
                          <p className=" text-nowrap roboto font-semibold">
                            SKU :
                          </p>
                          <p className="roboto text-nowrap text-[#b1b1b1]">
                            {sku}
                          </p>
                        </div>

                        <div className="flex gap-2">
                          <p className=" text-nowrap roboto font-semibold">
                            Category :
                          </p>
                          <p className="roboto text-nowrap text-[#b1b1b1]">
                            {category}
                          </p>
                        </div>

                        <div className="flex gap-2">
                          <p className=" text-nowrap roboto font-semibold">
                            Model :
                          </p>
                          <p className="roboto text-nowrap text-[#b1b1b1]">
                            {model}
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <form method="dialog" className="modal-backdrop">
                <button>close</button>
              </form>
            </dialog>
          </div>

          <Link
            to={productLink}
            className="absolute bottom-0 bg-red-600 py-2 w-full text-center opacity-0 group-hover:opacity-100 transition-opacity duration-1000 cursor-pointer"
          >
            <p className="uppercase text-white text-sm 2xl:text-base roboto">
              View Product
            </p>
          </Link>
        </div>

        <div className="pt-4 px-2">
          <h2 className="text-lg md:text-xl font-bold text-white truncate">
            {brandName}
          </h2>
          <p className="text-sm text-gray-400 mt-1">Make</p>

          <div className="flex items-center mt-2">
            <span className="text-yellow-400 flex items-center">
              <FaStar className="mr-1" />
              <FaStar className="mr-1" />
              <FaStar className="mr-1" />
              <FaStar className="mr-1" />
              <FaStar className="mr-1 text-gray-600" />
            </span>
            <span className="ml-2 text-gray-500 text-sm">({rating})</span>
          </div>

          <div className="mt-2 flex items-center justify-between">
            <p className="text-base font-semibold text-white">
              &#2547; {discountPrice}{" "}
              <span className="text-sm text-gray-600 line-through">
                &#2547; {price}
              </span>
            </p>
            <p className="text-sm text-red-500">{discountPresent}% Off</p>
          </div>

          <div className="flex items-center justify-between mt-2 text-sm text-gray-400 gap-2">
            <div className="flex items-center gap-1">
              <FaFire className="text-red-500" />
              <span>{productSell}k sold</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[1px] h-4 bg-gray-600"></div>
            </div>
            <div className="flex items-center gap-1">
              <FaEye />
              <span>{viewCart}k views</span>
            </div>
            <div className="flex items-center gap-1">
              <div className="w-[1px] h-4 bg-gray-600"></div>
            </div>
            <div className="flex items-center gap-1">
              <MdPreview />
              <span>{review}k reviews</span>
            </div>
          </div>

          <div className="flex justify-center items-center mt-4">
            <button className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-red-600 to-red-700 text-white rounded-lg hover:from-red-700 hover:to-red-600 transition-all duration-300 shadow-lg cursor-pointer text-base w-full justify-center">
              <FaShoppingCart className="h-4 w-4" />
              <span className="mt-[1px] roboto">Add to Cart</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
