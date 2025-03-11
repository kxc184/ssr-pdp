import React from "react";

export interface ICard {
  title: string;
  description: string;
  price?: number;
  color: string;
}

const Card = ({ title, description, color }: ICard) => {
  return (
    <div className="py-5 rounded-md inline-flex items-center shadow-2xl max-h-96">
      <div className="flex flex-col px-8 w-full">
        <div className="flex justify-center w-full  ">
          <div
            style={{ background: color }}
            className={`h-32 w-full rounded-md hover:cursor-pointer`}
          />
        </div>
        <span className="group">
          <h1 className="text-lg font-semibold group-hover:underline hover:cursor-pointer">
            {title}
          </h1>
          <h3 className=" mb-8 text-sm group-hover:underline hover:cursor-pointer">
            SW{description}
          </h3>
        </span>
        <button className="px-2 py-2 bg-blue-500 text-white rounded-md font-semibold text-sm hover:cursor-pointer hover:bg-blue-600 duration-300">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
