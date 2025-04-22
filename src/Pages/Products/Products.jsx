import React, { useEffect, useState } from "react";
import { useSearchParams, useNavigate } from "react-router-dom";
import PageHeader from "../../Components/PageHeader";
import LeftCategory from "./Products Components/LeftCategory";
import RightProductsDetalis from "./Products Components/RightProductsDetalis";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [productCategories, setProductCategories] = useState([]);
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [searchQuery, setSearchQuery] = useState("");
  const [loading, setLoading] = useState(true);
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 6;
  const navigate = useNavigate();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  useEffect(() => {
    fetch("/Product-Data/Products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
        setLoading(false);
      });
  }, []);

  useEffect(() => {
    fetch("/Product-Data/ProductCategory.json")
      .then((res) => res.json())
      .then((data) => setProductCategories(data));
  }, []);

  useEffect(() => {
    const categoryParam = searchParams.get("category");
    if (categoryParam) {
      const decodedCategory = decodeURIComponent(categoryParam);
      window.scrollTo({ top: 0, behavior: "smooth" });
      if (!selectedCategories.includes(decodedCategory)) {
        setSelectedCategories([decodedCategory]);
      }
    } else {
      setSelectedCategories([]);
    }
  }, [searchParams]);

  useEffect(() => {
    if (selectedCategories.length > 0) {
      setSearchParams({ category: encodeURIComponent(selectedCategories[0]) });
    } else {
      setSearchParams({});
      window.scrollTo({ top: 0, behavior: "smooth" });
    }
    setCurrentPage(1); // Reset to page 1 when category changes
  }, [selectedCategories]);

  useEffect(() => {
    const delayDebounce = setTimeout(() => {
      setCurrentPage(1); // Reset to page 1 on search
    }, 300);
    return () => clearTimeout(delayDebounce);
  }, [searchQuery]);

  // Declare filteredProducts after all hooks
  const filteredProducts = products.filter(
    (product) =>
      (selectedCategories.length === 0 ||
        selectedCategories.includes(product.category)) &&
      (searchQuery === "" ||
        (product.name &&
          product.name.toLowerCase().includes(searchQuery.toLowerCase())))
  );

  const totalPages = Math.ceil(filteredProducts.length / itemsPerPage);
  const indexOfLastItem = currentPage * itemsPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsPerPage;
  const currentProducts = filteredProducts.slice(
    indexOfFirstItem,
    indexOfLastItem
  );

  return (
    <div>
      <PageHeader pageName={"Products"} />
      <div className="bg-black py-16 md:py-20">
        <div className="w-11/12 2xl:w-10/12 mx-auto">
          {loading ? (
            <div className="flex justify-center items-center h-screen">
              <div className="animate-spin rounded-full h-16 w-16 border-t-4 border-b-4 border-[#ff2626]"></div>
            </div>
          ) : (
            <div className="flex flex-col-reverse lg:flex-row gap-10 mb-10 lg:mb-16">
              <div className="w-full lg:w-1/4 lg:sticky lg:top-30 lg:self-start lg:overflow-y-auto">
                <LeftCategory
                  productCategories={productCategories}
                  selectedCategories={selectedCategories}
                  setSelectedCategories={setSelectedCategories}
                  searchQuery={searchQuery}
                  setSearchQuery={setSearchQuery}
                />
              </div>
              <div className="w-full lg:w-3/4">
                <RightProductsDetalis
                  products={currentProducts}
                  currentPage={currentPage}
                  totalPages={totalPages}
                  setCurrentPage={setCurrentPage}
                />
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Products;
