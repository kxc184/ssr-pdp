"use client";
import React from "react";
import { ShoppingCart, Search } from "lucide-react";
import Link from "next/link";
import { useTransitionContext } from "@/context/TransitionalContext";
import useCustomRouter from "@/lib/hooks/useCustomRouter";

const Header = ({}) => {
  const [q, setQ] = React.useState("");
  const [tally, setTally] = React.useState(0);
  const { router, pathname, searchParams } = useCustomRouter();
  const { startTransition } = useTransitionContext();

  const onSearch = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQ(e.target.value);
  };

  const onKeyDown = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (q.length < 3) return;
    if (e.key === "Enter") {
      e.preventDefault();

      const currentParams = new URLSearchParams(
        Array.from(searchParams.entries())
      );
      currentParams.set("q", encodeURIComponent(q));
      currentParams.set("page", "1");
      startTransition(() => {
        router.push(`${pathname}?${currentParams.toString()}`);
      });
    }
  };

  return (
    <div className="sticky top-0 bg-gray-800 text-white px-8 py-4">
      <div className="flex justify-between  items-center container mx-auto  ">
        <Link
          href={"/"}
          className="text-2xl font-semibold hover:scale-110 duration-300 hover:shadow-md"
        >
          Color Chooser
        </Link>
        <div className="relative">
          <input
            type="search"
            onChange={onSearch}
            value={q}
            onKeyDown={onKeyDown}
            className="rounded-md min-w-100 bg-white pr-10 text-black px-2"
            placeholder="Search for products"
          />
          <Search className="absolute right-2 top-1/2 transform -translate-y-1/2 text-black" />
        </div>
        <button
          className="relative"
          onClick={() => console.log("cart clicked")}
        >
          <ShoppingCart className="text-2xl font-semibold hover:scale-120 duration-200 hover:cursor-pointer " />
          <span className="absolute bottom-0 font-semibold right-0 transform translate-x-1/2 translate-y-1/2 bg-red-500 text-white rounded-full p-[.5em] text-[10px] leading-[.5em]  ">
            {tally}
          </span>
        </button>
      </div>
    </div>
  );
};

export default Header;
