"use client";
import { ChevronLeft, ChevronRight } from "lucide-react";
import React from "react";
import useCustomRouter from "@/lib/hooks/useCustomRouter";

const Pagination = ({ pages }: { pages: number }) => {
  const { currentParams, pathname, router } = useCustomRouter();
  const pageIndex = Number(currentParams.get("page") || 1);
  const startPage = Math.max(1, pageIndex - 2);
  const endPage = Math.min(pages, startPage + 4);

  const paginate = (pageIndex: number) => {
    currentParams.set("page", String(pageIndex));
    router.push(`${pathname}?${currentParams.toString()}`);
  };

  return (
    <span className=" flex justify-center items-center gap-2 text-lg font-light ">
      <button
        onClick={() => paginate(pageIndex - 1)}
        disabled={pageIndex === 1}
      >
        <ChevronLeft className="hover:text-blue-500 text-center rounded-full hover:scale-105 duration-200 hover:cursor-pointer hover:bg-white hover:shadow-lg" />
      </button>
      {Array.from({ length: endPage - startPage }, (_, i) => startPage + i).map(
        (nextPage, i) => (
          <button
            onClick={() => paginate(nextPage)}
            disabled={pageIndex === nextPage}
            value={nextPage}
            key={nextPage + i}
            style={{
              fontWeight: pageIndex === nextPage ? "bold" : "inherit",
              background: pageIndex === nextPage ? "#297FFF" : "inherit",
              color: pageIndex === nextPage ? "white" : "inherit",
            }}
            className=" hover:text-blue-500 rounded-full hover:bg-white hover:shadow-lg rounded-m hover:scale-105 duration-200 hover:cursor-pointer px-3"
          >
            {nextPage}
          </button>
        )
      )}
      <p> ... </p>
      <button
        className=" hover:text-blue-500 rounded-full hover:bg-white hover:shadow-lg rounded-m hover:scale-105 duration-200 hover:cursor-pointer p-1"
        onClick={() => paginate(pages)}
        disabled={pageIndex === pages}
      >
        {pages}
      </button>
      <button
        onClick={() => paginate(pageIndex + 1)}
        disabled={pageIndex === pages}
      >
        <ChevronRight className="hover:text-blue-500 rounded-full text-center hover:scale-105 duration-200 hover:cursor-pointer hover:bg-white hover:shadow-lg" />
      </button>
    </span>
  );
};
export default Pagination;
