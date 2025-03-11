"use client";
import { useTransitionContext } from "@/context/TransitionalContext";
import useCustomRouter from "@/lib/hooks/useCustomRouter";
import React from "react";

const Tag = ({ tag }: { tag: string }) => {
  const { currentParams, pathname } = useCustomRouter();
  const { navTo } = useTransitionContext();

  const closeTag = () => {
    currentParams.delete("family", tag.toLowerCase());
    currentParams.delete("q", tag.toLowerCase());
    const path = `${pathname}?${currentParams.toString()}`;
    navTo(path);
  };
  return (
    <button
      onClick={closeTag}
      key={tag}
      className="relative shadow-xl rounded-full px-4 py-2 bg-blue-500 font-semibold text-center text-white hover:scale-110 duration-200 hover:cursor-pointer"
    >
      {decodeURI(tag)}
      <div className="absolute top-0 right-0 text-xs px-1 rounded-full bg-gray-300 text-black hover:scale-105 hover:cursor-pointer duration-200">
        X
      </div>
    </button>
  );
};

export default Tag;
