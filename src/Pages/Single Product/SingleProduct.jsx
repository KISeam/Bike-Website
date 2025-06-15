import React, { useEffect, useState } from "react";
import { FaRegHeart, FaShoppingCart, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";
import PageHeader from "../../Components/PageHeader";
import { TiMinus } from "react-icons/ti";
import { IoMdAdd } from "react-icons/io";

const SingleProduct = () => {
  const [quantity, setQuantity] = useState(1);
  const [product, setProduct] = useState(null);
  const [relatedProducts, setRelatedProducts] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("/Product-Data/Products.json")
      .then((res) => res.json())
      .then((data) => {
        const filterProduct = data.find((prod) => prod.id == id);
        setProduct(filterProduct);
      });
  }, [id]);

  useEffect(() => {
    if (product) {
      fetch("/Product-Data/Products.json")
        .then((res) => {
          if (!res.ok) throw new Error("Failed to fetch related products");
          return res.json();
        })
        .then((data) => {
          const filteredRelatedProducts = data.filter(
            (item) =>
              item.category === product.category && item.id != product.id
          );
          setRelatedProducts(filteredRelatedProducts);
        })
        .catch((error) =>
          console.error("Error fetching related products:", error)
        );
    }
  }, [product]);

  const handleQuantityChange = (type) => {
    if (type === "increase") {
      setQuantity((prev) => prev + 1);
    } else if (type === "decrease" && quantity > 1) {
      setQuantity((prev) => prev - 1);
    }
  };

  if (!product) {
    return (
      <p className="text-center mt-10 text-gray-500">Loading product...</p>
    );
  }

  const {
    image,
    name,
    shortDetails,
    rating,
    review,
    discountPrice,
    price,
    discountPresent,
    detail,
    category,
    model,
    brandName,
    sku,
  } = product;

  return (
    <>
      <div>
        <PageHeader pageName={name} />
        <div className="bg-black py-16 md:py-20">
          <div className="p-6 max-w-6xl mx-auto">
            <div className="flex flex-col lg:flex-row gap-6 bg-[#121212] border border-gray-300 rounded-2xl p-6">
              <div className="w-full lg:w-1/2">
                <div className="w-full h-[400px] overflow-hidden lg:sticky lg:top-32 lg:self-start lg:overflow-y-auto rounded-2xl">
                  <img
                    src={image}
                    alt={name}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="w-full lg:w-1/2 space-y-4">
                <h1 className="text-3xl font-bold">{name}</h1>
                <p className="text-sm text-gray-300 leading-6">
                  {shortDetails}
                </p>
                <div className="flex items-center space-x-2 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <FaStar
                      key={i}
                      className={
                        i < Math.floor(rating)
                          ? "text-yellow-500"
                          : "text-gray-300"
                      }
                    />
                  ))}
                  <span className="text-sm text-gray-300">
                    ({review} reviews)
                  </span>
                </div>
                <div className="flex items-end gap-4 text-lg font-semibold">
                  <span className="text-2xl text-[#ff2626]">
                    ${discountPrice}
                  </span>
                  <span className="line-through text-gray-500">${price}</span>
                  <span className="text-sm text-white bg-[#ff2626] px-2 py-1 rounded">
                    {discountPresent}% Off
                  </span>
                </div>
                <p className="text-sm text-gray-300 leading-6">{detail}</p>
                <ul className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                  <li className="text-gray-200">
                    <span className="font-semibold text-white">Category:</span>{" "}
                    {category}
                  </li>
                  <li className="text-gray-200">
                    <span className="font-semibold text-white">Model:</span>{" "}
                    {model}
                  </li>
                  <li className="text-gray-200">
                    <span className="font-semibold text-white">Brand:</span>{" "}
                    {brandName}
                  </li>
                  <li className="text-gray-200">
                    <span className="font-semibold text-white">SKU:</span> {sku}
                  </li>
                </ul>
                <div className="flex items-center gap-4 mt-4">
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
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default SingleProduct;
