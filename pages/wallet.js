/* eslint-disable @next/next/no-img-element */
/* eslint-disable react/no-unescaped-entities */
import React from "react";
import Link from "next/link";

const Wallet = () => {
  return (
    <>
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-wrap -m-4 justify-center">
            <div className="lg:w-1/5 md:w-1/2 p-4 w-full shadow-lg m-5">
              <Link
                href={"/product/Stand-out-from-the-crowd"}
                className="block relative rounded overflow-hidden"
              >
                <img
                  alt="ecommerce"
                  className="m-auto md:m-0 h-[30vh] md:h-[36vh] block"
                  src="https://m.media-amazon.com/images/I/41pIShJzyJS._SY395_SX395_.jpg"
                />
                <div className="mt-4 text-center">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                    SHOULDER BAG
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    Lavie Women's Nova Tote Bag | Ladies Purse Handbag
                  </h2>
                  <p className="mt-1">₹499</p>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Wallet;
