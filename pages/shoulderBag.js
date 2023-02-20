/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import Link from "next/link";
import React from "react";
import Product from "@/models/Product";
import mongoose from "mongoose";

const ShoulderBag = ({ products }) => {
  return (
    <div>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="grid lg:grid-cols-4 md:grid-cols-1 sm:grid-cols-1 gap-4">
            {Object.keys(products).map((item) => {
              return (
                <Link
                  passHref={true}
                  key={products[item]._id}
                  href={`/product/${products[item].slug}`}
                >
                  <div className="lg:w-auto md:w-auto p-4 w-full shadow-lg m-5">
                    <a className="block relative rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="m-auto h-[30vh] md:h-[36vh] block"
                        src={products[item].img}
                      />
                    </a>
                    <div className="mt-4 text-center md:text-left">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        SHOULDER BAG
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        {products[item].title}
                      </h2>
                      <p className="mt-1">₹{products[item].price}</p>
                      <div className="mt-1">
                        {products[item].size.includes("S") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            S
                          </span>
                        )}
                        {products[item].size.includes("M") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            M
                          </span>
                        )}
                        {products[item].size.includes("L") && (
                          <span className="border border-gray-300 px-1 mx-1">
                            L
                          </span>
                        )}
                      </div>
                      <div className="mt-1">
                        {products[item].color.includes("Red") && (
                          <button className="border-2 border-gray-300 ml-1 bg-red-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("Green") && (
                          <button className="border-2 border-gray-300 ml-1 bg-green-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("Pink") && (
                          <button className="border-2 border-gray-300 ml-1 bg-pink-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                        {products[item].color.includes("Blue") && (
                          <button className="border-2 border-gray-300 ml-1 bg-blue-700 rounded-full w-6 h-6 focus:outline-none"></button>
                        )}
                      </div>
                    </div>
                  </div>
                </Link>
              );
            })}
            ;
          </div>
        </div>
      </section>
    </div>
  );
};

export async function getServerSideProps(context) {
  if (!mongoose.connections[0].readyState) {
    await mongoose.connect(process.env.MONGO_URI);
  }
  let products = await Product.find({ category: "shoulderbag" });
  const shoulderbag = {};

  products.forEach((item) => {
    if (!shoulderbag[item.title]) {
      shoulderbag[item.title] = {
        ...item.toObject(),
        color: [],
        size: [],
      };
    }

    if (item.availableQty > 0) {
      if (!shoulderbag[item.title].color.includes(item.color)) {
        shoulderbag[item.title].color.push(item.color);
      }
      if (!shoulderbag[item.title].size.includes(item.size)) {
        shoulderbag[item.title].size.push(item.size);
      }
    }
  });

  return {
    props: { products: JSON.parse(JSON.stringify(shoulderbag)) }, // will be passed to the page component as props
  };
}

export default ShoulderBag;
