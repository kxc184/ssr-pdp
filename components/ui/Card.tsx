import React from "react";

export interface ICard {
  title: string;
  description: string;
  price: number;
}

const Card = ({ title, description, price }: ICard) => {
  return (
    <div className="py-5 rounded-md inline-flex items-center shadow-2xl max-h-96">
      <div className="flex flex-col px-8 w-full">
        <div className="flex justify-center w-full  ">
          <div className="h-32 w-full rounded-md  bg-blue-300 hover:cursor-pointer" />
        </div>
        <span className="group">
          <h1 className="text-lg font-semibold group-hover:underline hover:cursor-pointer">
            {title}
          </h1>
          <h3 className=" mb-8 text-sm group-hover:underline hover:cursor-pointer">
            {description}
          </h3>
        </span>
        <h3 className="text-black/50 mb-2">
          {new Intl.NumberFormat("en-US", {
            style: "currency",
            currency: "USD",
          }).format(price)}
        </h3>
        <button className="px-2 py-2 bg-blue-500 text-white rounded-md font-semibold text-sm hover:cursor-pointer hover:bg-blue-600 duration-300">
          Add To Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
