"use client";
import React from "react";
import Card from "./Card";
import Pagination from "./Pagination";
import { IColor } from "@/app/api/colors/route";
import Filter from "./Filter";
import { useTransitionContext } from "@/context/TransitionalContext";

const ColorGrid = ({ colors }) => {
  const { data, pages } = colors;
  const { isPending } = useTransitionContext();

  return (
    <section className="grid gap-5 grid-cols-6 m-4 mx-auto container w-full">
      <Filter data={colors.filters} />
      <div className={`col-span-5 ${isPending ? "animate-pulse" : ""}`}>
        <div
          className={`grid grid-cols-2 md:grid-cols-3 max-w-4xl col-span-5 gap-5`}
        >
          {data.map((card: IColor, i: number) => (
            <Card
              key={card.name + i}
              title={card.name}
              description={card.colorNumber}
              color={card.hex}
            />
          ))}
        </div>
        <div className="shadow-md rounded-md p-5 bg-white text-center mt-2 ">
          <Pagination pages={pages} />
        </div>
      </div>
    </section>
  );
};

export default ColorGrid;
