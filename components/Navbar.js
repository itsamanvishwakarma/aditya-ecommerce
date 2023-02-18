import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";
import {
  AiFillCloseCircle,
  AiFillMinusCircle,
  AiFillPlusCircle,
} from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { BiTrash } from "react-icons/bi";
import { BsFillBagCheckFill } from "react-icons/bs";
import { MdAccountCircle } from "react-icons/md";

const Navbar = ({ cart, addToCart, removeFromCart, clearCart, subTotal }) => {
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
      <div className="flex flex-col md:flex-row md:justify-start justify-center items-center py-2 shadow-xl sticky top-0 bg-white z-10">
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
        <div className="cursor-pointer cart absolute right-0 top-4 mx-5 flex">
          <FiShoppingCart
            onClick={toggleCart}
            className="text-xl md:text-2xl mx-3"
          />
          <Link href={"/login"}>
            <MdAccountCircle className="text-xl md:text-2xl" />
          </Link>
        </div>
        {/* Sidebar Shopping Cart */}
        <div
          ref={ref}
          className={`w-72 h-[100vh] sideCart absolute top-0 right-0 bg-indigo-200 px-8 py-10 transform transition-transform ${
            Object.keys(cart).length !== 0
              ? "translate-x-0"
              : "translate-x-full"
          }`}
        >
          <h1 className="font-bold text-xl text-center">Shopping Cart</h1>
          <div
            onClick={toggleCart}
            className="absolute top-5 right-2 cursor-pointer text-2xl text-indigo-500"
          >
            <AiFillCloseCircle />
          </div>
          <ol className="list-decimal font-semibold">
            {Object.keys(cart).length == 0 && (
              <div className="my-4 font-semibold">Your Cart is Empty!</div>
            )}
            {Object.keys(cart).map((k) => {
              return (
                <li key={k}>
                  <div className="item flex my-5">
                    <div className="w-2/3 font-semibold">{cart[k].name}</div>
                    <div className="flex font-semibold items-center justify-center w-1/3 text-lg">
                      <AiFillMinusCircle
                        onClick={() => {
                          removeFromCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="cursor-pointer text-indigo-500"
                      />
                      <span className="mx-2 text-sm">{cart[k].qty}</span>
                      <AiFillPlusCircle
                        onClick={() => {
                          addToCart(
                            k,
                            1,
                            cart[k].price,
                            cart[k].name,
                            cart[k].size,
                            cart[k].variant
                          );
                        }}
                        className="cursor-pointer text-indigo-500"
                      />
                    </div>
                  </div>
                </li>
              );
            })}
          </ol>
          <div className="font-bold my-2">Subtotal: ₹{subTotal}</div>
          <div className="flex">
            <Link href={"/checkout"}>
              <button className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm">
                <BsFillBagCheckFill className="m-1" />
                Checkout
              </button>
            </Link>
            <button
              onClick={clearCart}
              className="flex mr-2 text-white bg-indigo-500 border-0 py-2 px-2 focus:outline-none hover:bg-indigo-600 rounded text-sm"
            >
              <BiTrash className="m-1" />
              Clear Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
