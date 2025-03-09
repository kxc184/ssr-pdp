"use client";
import React from "react";
import { ShoppingCart, Search } from "lucide-react";

const Header = () => {
  return (
    <div className="sticky top-0 bg-gray-800 text-white px-8 py-4 flex justify-between items-center">
      <h1 className="text-2xl font-semibold">PDP</h1>
      <div className="relative">
        <input
          className="rounded-md min-w-100 bg-white pr-10 text-black px-2"
          placeholder="Search for products"
        />
        <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black" />
      </div>
      <button onClick={() => console.log("cart clicked")}>
        <ShoppingCart className="text-2xl font-semibold hover:scale-120 duration-200 hover:cursor-pointer " />
      </button>
    </div>
  );
};

export default Header;
