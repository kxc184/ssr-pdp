import Card, { ICard } from "@/components/ui/Card";
import React from "react";

const filters = [
  {
    name: "Colors",
    data: [
      { name: "red" },
      { name: "blue" },
      { name: "green" },
      { name: "yellow" },
      { name: "purple" },
      { name: "pink" },
      { name: "brown" },
      { name: "black" },
    ],
  },
  {
    name: "Type",
    data: [{ name: "interior" }, { name: "exterior" }],
  },
  ,
];

const Home = async ({ searchParams }: { searchParams: { q?: string } }) => {
  const q = searchParams.q || ""; // Get the search query from the URL
  // Fetch data based on the search query
  const res = await fetch(`http://localhost:3000/api/products?q=${q}`);
  const products = await res.json();
  console.log(products); // Debugging
  return (
    <div className="grid gap-5 grid-cols-6 m-4 mx-auto container">
      {/* Filter */}
      <div className="col-span-1 shadow-xl rounded-md px-2 font-semibold">
        {filters.map((filter, i) => (
          <div className="mb-2" key={i}>
            {filter && (
              <>
                <h1 className="text-lg font-semibold">{filter.name}</h1>
                {filter.data &&
                  filter.data.map((filter) => (
                    <div className="flex gap-2" key={filter.name}>
                      <input id={filter.name} type="checkbox" className="" />
                      <label
                        htmlFor={filter.name}
                        className="py-2 hover:cursor-pointer font-normal"
                      >
                        {filter.name}
                      </label>
                    </div>
                  ))}
              </>
            )}
          </div>
        ))}
      </div>
      {/* Product Listing */}
      <div
        className={`grid grid-cols-2 md:grid-cols-3 max-w-4xl col-span-5 gap-5 `}
      >
        {products.map((card: ICard) => (
          <Card
            key={card.title}
            title={card.title}
            description={card.description}
            price={card.price}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
