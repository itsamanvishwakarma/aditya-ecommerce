import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { BsFillBagCheckFill } from "react-icons/bs";
import { ImBin } from "react-icons/im";
import { FiShoppingCart } from "react-icons/fi";

const Navbar = () => {
  const toggleCart = () => {
    if (ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-full");
      ref.current.classList.add("translate-x-0");
    } else if (!ref.current.classList.contains("translate-x-full")) {
      ref.current.classList.remove("translate-x-0");
      ref.current.classList.add("translate-x-full");
    }
  };
  const ref = useRef();
  return (
    <>
      <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-lg">
        <div className="logo mx-5">
          <Link href={"/"}>
            <Image src="/logo.png" alt="" width={100} height={20} />
          </Link>
        </div>
        <div className="nav">
          <ul className="flex items-center space-x-6 font-bold md:text-md">
            <Link href={"/shoulderBag"}>
              <li>Shoulder Bag</li>
            </Link>
            <Link href={"/slingBag"}>
              <li>Sling Bag</li>
            </Link>
            <Link href={"/wallet"}>
              <li>Wallet</li>
            </Link>
          </ul>
        </div>
        <div
          onClick={toggleCart}
          className="cursor-pointer cart absolute right-0 top-4 mx-5"
        >
          <FiShoppingCart className="text-xl md:text-2xl" />
        </div>
        {/* Sidebar Shopping Cart */}
        <div
          ref={ref}
          className="w-72 h-full sideCart absolute top-0 right-0 bg-indigo-100 px-8 py-10 transform transition-transform translate-x-full"
        >
          <h1 className="font-bold text-xl text-center">Shopping Cart</h1>
          <div
            onClick={toggleCart}
            className="absolute top-5 right-2 cursor-pointer text-2xl text-indigo-500"
          >
            <AiFillCloseCircle />
          </div>
          <ol className="list-decimal font-semibold">
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold">
                  Handpurse - Ladies Hand Purse
                </div>
                <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                  <AiFillMinusCircle className="cursor-pointer text-indigo-500" />
                  <span className="mx-2 text-sm">1</span>
                  <AiFillPlusCircle className="cursor-pointer text-indigo-500" />
                </div>
              </div>
            </li>
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold">
                  Handpurse - Ladies Hand Purse
                </div>
                <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                  <AiFillMinusCircle className="cursor-pointer text-indigo-500" />
                  <span className="mx-2 text-sm">1</span>
                  <AiFillPlusCircle className="cursor-pointer text-indigo-500" />
                </div>
              </div>
            </li>
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold">
                  Handpurse - Ladies Hand Purse
                </div>
                <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                  <AiFillMinusCircle className="cursor-pointer text-indigo-500" />
                  <span className="mx-2 text-sm">1</span>
                  <AiFillPlusCircle className="cursor-pointer text-indigo-500" />
                </div>
              </div>
            </li>
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold">
                  Handpurse - Ladies Hand Purse
                </div>
                <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                  <AiFillMinusCircle className="cursor-pointer text-indigo-500" />
                  <span className="mx-2 text-sm">1</span>
                  <AiFillPlusCircle className="cursor-pointer text-indigo-500" />
                </div>
              </div>
            </li>
            <li>
              <div className="item flex my-5">
                <div className="w-2/3 font-semibold">
                  Handpurse - Ladies Hand Purse
                </div>
                <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                  <AiFillMinusCircle className="cursor-pointer text-indigo-500" />
                  <span className="mx-2 text-sm">1</span>
                  <AiFillPlusCircle className="cursor-pointer text-indigo-500" />
                </div>
              </div>
            </li>
          </ol>
          <div className="flex">
            <button className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">
              <BsFillBagCheckFill className="m-1" />
              Checkout
            </button>
            <button className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">
              <ImBin className="m-1" />
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
