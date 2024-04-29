import React, { useEffect, useState } from "react";
import Product_Base_Head from "./product_base_head";
import { Link } from "react-router-dom";

function Product_Base() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  useEffect(() => {
    if (isSidebarOpen) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [isSidebarOpen]);

  return (
    <main className="my-10 py-10">
      <div className="container grid grid-cols-4 gap-6 pt-4 pb-16 items-start mx-auto">
        <div
          className={`z-10000 fixed inset-0 top-14 pt-4 col-span-12 bg-white px-4 pb-6 shadow overflow-auto md:block md:relative md:overflow-visible ${
            isSidebarOpen ? "block" : "hidden"
          } md:col-span-1`}
        >
          <div className="divide-y divide-gray-200 space-y-5">
            <div>
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Categories
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="cat-1"
                    id="cat-1"
                    className="text-primary focus:ring-0 cursor-pointer"
                  />
                  <label
                    htmlFor="cat-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Hats
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(2)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="cat-2"
                    id="cat-2"
                    className="text-primary focus:ring-0 cursor-pointer"
                  />
                  <label
                    htmlFor="cat-2"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Tops
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(9)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="cat-3"
                    id="cat-3"
                    className="text-primary focus:ring-0 cursor-pointer"
                  />
                  <label
                    htmlFor="cat-3"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Bottoms
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(11)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="cat-4"
                    id="cat-4"
                    className="text-primary focus:ring-0 cursor-pointer"
                  />
                  <label
                    htmlFor="cat-4"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Accessories
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(23)</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Brands
              </h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="brand-1"
                    id="brand-1"
                    className="text-primary focus:ring-0 cursor-pointer"
                  />
                  <label
                    htmlFor="brand-1"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Acme
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(15)</div>
                </div>
                <div className="flex items-center">
                  <input
                    type="checkbox"
                    name="brand-2"
                    id="brand-2"
                    className="text-primary focus:ring-0 cursor-pointer"
                  />
                  <label
                    htmlFor="brand-2"
                    className="text-gray-600 ml-3 cursor-pointer"
                  >
                    Elastic Path
                  </label>
                  <div className="ml-auto text-gray-600 text-sm">(9)</div>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Price
              </h3>
              <div className="mt-4 flex items-center">
                <input
                  type="text"
                  name="min"
                  id="min"
                  className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                  placeholder="min"
                />
                <span className="mx-3 text-gray-500">-</span>
                <input
                  type="text"
                  name="max"
                  id="max"
                  className="w-full border-gray-300 focus:border-primary focus:ring-0 px-3 py-1 text-gray-600 shadow-sm"
                  placeholder="max"
                />
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Size
              </h3>
              <div className="flex items-center gap-2">
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-xs"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-xs"
                    className="text-xs border border-gray-200 h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XS
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-sm"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-sm"
                    className="text-xs border border-gray-200 h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    S
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-m"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-m"
                    className="text-xs border border-gray-200 h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    M
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-l"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-l"
                    className="text-xs border border-gray-200 h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    L
                  </label>
                </div>
                <div className="size-selector">
                  <input
                    type="radio"
                    name="size"
                    id="size-xl"
                    className="hidden"
                  />
                  <label
                    htmlFor="size-xl"
                    className="text-xs border border-gray-200 h-6 w-6 flex items-center justify-center cursor-pointer shadow-sm text-gray-600"
                  >
                    XL
                  </label>
                </div>
              </div>
            </div>

            <div className="pt-4">
              <h3 className="text-xl text-gray-800 mb-3 uppercase font-medium">
                Color
              </h3>
              <div className="flex items-center gap-2">
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    id="black"
                    className="hidden"
                  />
                  <label
                    htmlFor="black"
                    className="border border-gray-200 h-6 w-6 cursor-pointer shadow-sm block"
                    style={{ backgroundColor: "#000" }}
                  ></label>
                </div>
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    id="white"
                    className="hidden"
                  />
                  <label
                    htmlFor="white"
                    className="border border-gray-200 h-6 w-6 cursor-pointer shadow-sm block"
                    style={{ backgroundColor: "#fff" }}
                  ></label>
                </div>
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    id="gray"
                    className="hidden"
                  />
                  <label
                    htmlFor="gray"
                    className="border border-gray-200 h-6 w-6 cursor-pointer shadow-sm block"
                    style={{ backgroundColor: "#a4a9ad" }}
                  ></label>
                </div>
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    id="blue"
                    className="hidden"
                  />
                  <label
                    htmlFor="blue"
                    className="border border-gray-200 h-6 w-6 cursor-pointer shadow-sm block"
                    style={{ backgroundColor: "#0033cc" }}
                  ></label>
                </div>
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    id="navy"
                    className="hidden"
                  />
                  <label
                    htmlFor="navy"
                    className="border border-gray-200 h-6 w-6 cursor-pointer shadow-sm block"
                    style={{ backgroundColor: "#091740" }}
                  ></label>
                </div>
                <div className="color-selector">
                  <input
                    type="radio"
                    name="color"
                    id="red"
                    className="hidden"
                  />
                  <label
                    htmlFor="red"
                    className="border border-gray-200 h-6 w-6 cursor-pointer shadow-sm block"
                    style={{ backgroundColor: "#990000" }}
                  ></label>
                </div>
              </div>
            </div>
            {isSidebarOpen && (
              <div className="pt-4 px-5 flex justify-center w-full">
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="bg-black text-white w-[50%] max-w-full text-center py-1 px-5 rounded"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsSidebarOpen(false)}
                  className="bg-black text-white w-[50%] max-w-full text-center ml-3 py-1 px-5 rounded"
                >
                  Apply
                </button>
              </div>
            )}
          </div>
        </div>

        <div className="col-span-12 md:col-span-3">
          <div
            className="text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm md:hidden"
            onClick={() => {
              setIsSidebarOpen(!isSidebarOpen);
            }}
          >
            <h4>Filter</h4>
          </div>
          <div className="flex items-center mb-4 ">
            <select
              name="sort"
              id="sort"
              className="w-44 text-sm text-gray-600 py-3 px-4 border-gray-300 shadow-sm focus:ring-primary focus:border-primary"
            >
              <option value="">Default sorting</option>
              <option value="price-low-to-high">Price low to high</option>
              <option value="price-high-to-low">Price high to low</option>
              <option value="latest">Latest product</option>
            </select>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 md:grid-cols-2 items-center justify-center">
            {/* Repeat this product card for each product */}
            {/* <div className="bg-white shadow-md overflow-hidden">
              <div className="relative group">
                <img
                  src="tshirt-back-white-large.png"
                  alt="product 1"
                  className="w-full"
                />
                <div
                  className="absolute inset-0 bg-black bg-opacity-40 flex items-center 
                            justify-center gap-2 opacity-0 group-hover:opacity-100 transition"
                >
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="view product"
                  >
                    <i className="gg-search"></i>
                  </a>
                  <a
                    href="#"
                    className="text-white text-lg w-9 h-8 bg-primary flex items-center justify-center hover:bg-gray-800 transition"
                    title="add to wishlist"
                  >
                    <i className="gg-heart"></i>
                  </a>
                </div>
              </div>
              <div className="pt-4 pb-3 px-4">
                <a href="#">
                  <h4 className="uppercase font-medium text-xl mb-2 text-gray-800 hover:text-primary transition">
                    Shirt
                  </h4>
                </a>
                <div className="flex items-baseline mb-1 space-x-2">
                  <p className="text-xl text-primary font-semibold">$9.99</p>
                  <p className="text-sm text-gray-400 line-through">$19.99</p>
                </div>
                <div className="flex items-center">
                  <div className="flex gap-1">
                    <i className="star"></i>
                    <i className="star"></i>
                    <i className="star"></i>
                    <i className="star"></i>
                    <i className="star"></i>
                  </div>
                  <div className="text-xs text-gray-500 ml-3">(150)</div>
                </div>
              </div>
              <a
                href="#"
                className="block w-full py-3 text-center text-white bg-green-700 border border-primary hover:bg-green-500 transition"
              >
                Add to cart
              </a>
            </div> */}
            {/* End of product card */}
            <Link
            //   to={`/Product/All/${datass.subcatname}/${datass.Product.productpath}`}
            >
              <section className="p-5 text-left shadow-md cursor-pointer">
                <img
                  className="p-5"
                  src="https://as2.ftcdn.net/v2/jpg/01/34/95/79/1000_F_134957942_Gta5V1G41izwt8uq66qVDDikBeOdnjit.jpg"
                  alt=""
                />
                <h1 className="text-xl xl:text-2xl mb-1 xl:mb-5 ">
                  Vogue Essence
                </h1>
                <p className="mb-2 xl:mb-5 text-sm xl:text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, incidunt!
                </p>
                <h2 className="font-semibold mb-3 xl:mb-5">$32.99</h2>
                <button className="p-2 px-6 bg-black text-white rounded-md hover:bg-red-600">
                  Add To Cart
                </button>
              </section>
            </Link>

            <Link
            //   to={`/Product/All/${datass.subcatname}/${datass.Product.productpath}`}
            >
              <section className="p-5 text-left shadow-md cursor-pointer">
                <img
                  className="p-5"
                  src="https://as1.ftcdn.net/v2/jpg/03/39/79/28/1000_F_339792803_2cG1l2nfS3cmPqiWQ1fdNzREINds2Nzv.jpg"
                  alt=""
                />
                <h1 className="text-xl xl:text-2xl mb-1 xl:mb-5 ">
                Chic Elegance
                </h1>
                <p className="mb-2 xl:mb-5 text-sm xl:text-md">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Distinctio, incidunt!
                </p>
                <h2 className="font-semibold mb-3 xl:mb-5">$32.99</h2>
                <button className="p-2 px-6 bg-black text-white rounded-md hover:bg-red-600">
                  Add To Cart
                </button>
              </section>
            </Link>
          </div>
        </div>
      </div>
    </main>
  );
}

export default Product_Base;
