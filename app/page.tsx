import Image from "next/image";
import Link from "next/link";
import React from "react";

const categories = [
  {
    name: "Interior Paints",
    src: "/interiorpaints.png",
    href: "/products/interior",
  },
  {
    name: "Exterior Paints",
    src: "/exteriorpaint.png",
    href: "/products/exterior",
  },
  {
    name: "Painting Tools & Supplies",
    src: "/paintsupplies.png",
    href: "/products/tools&supplies",
  },
];

const Home = () => {
  return (
    <div className="container mx-auto m-4 grid grid-cols-1 sm:grid-cols-3 gap-5 font-semibold text-lg text-white  justify-center">
      {/* Categories */}
      {categories.map(({ name, src, href }) => (
        <Link
          // TODO: do I need individual routes for each category
          // I think each product will be displayed on same product listing component
          // does that mean I should differentiate the product by category?
          href={href}
          key={name}
          className="flex flex-col items-center border-solid border-2 rounded-md shadow-md p-4 hover:scale-105 transition-all duration-300"
        >
          <Image src={src} alt={name} width={200} height={200} />
          <h1 className="border-solid border-2 rounded-md p-4 bg-blue-500">
            {name}
          </h1>
        </Link>
      ))}
    </div>
  );
};
export default Home;
