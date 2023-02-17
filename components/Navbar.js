import React from "react";
import Image from "next/image";
import Link from "next/link";
import { AiOutlineShoppingCart } from "react-icons/ai";

const Navbar = () => {
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
        <div className="cart absolute right-0 top-4 mx-5">
          <AiOutlineShoppingCart className="text-xl md:text-2xl" />
        </div>
      </div>
    </>
  );
};

export default Navbar;
