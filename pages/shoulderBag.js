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
          <div className="flex flex-wrap -m-4 justify-center">
            {products.map((item) => {
              return (
                <Link key={item._id} href={"/product/Stand-out-from-the-crowd"}>
                  <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-5">
                    <a className="block relative rounded overflow-hidden">
                      <img
                        alt="ecommerce"
                        className="m-auto md:mx-0 h-[30vh] md:h-[36vh] block"
                        src="https://m.media-amazon.com/images/I/41pIShJzyJS._SY395_SX395_.jpg"
                      />
                    </a>
                    <div className="mt-4 text-center md:text-left">
                      <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                        SHOULDER BAG
                      </h3>
                      <h2 className="text-gray-900 title-font text-lg font-medium">
                        Ladies Purse Handbag
                      </h2>
                      <p className="mt-1">₹499</p>
                      <p className="mt-1">S, M, L, XL, XXL</p>
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
  let products = await Product.find();

  return {
    props: { products: JSON.parse(JSON.stringify(products)) }, // will be passed to the page component as props
  };
}

export default ShoulderBag;
