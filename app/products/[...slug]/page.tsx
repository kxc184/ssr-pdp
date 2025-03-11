import { IColor } from "@/app/api/colors/route";
import Card from "@/components/ui/Card";
import Filter from "@/components/ui/Filter";
import Pagination from "@/components/ui/Pagination";
import Tag from "@/components/ui/Tag";
import React from "react";

const Products = async ({
  searchParams,
}: {
  searchParams: { q?: string; family?: string | string[]; page: string };
}) => {
  const q = searchParams.q || "";
  const pageNum = searchParams.page || "";
  let family = searchParams.family || [];

  // Combine query and family to get all tags
  if (typeof family === "string") {
    family = [family];
  }
  const tags = [...family, q].filter((tag) => tag !== "");

  // Fetch data based on the search params
  const res = await fetch(
    `http://localhost:3000/api/colors?q=${q}&family=${family}&page=${pageNum}`
  );
  const { data, filters, pages } = await res.json();
  console.log("data length", data.length);
  return (
    <>
      <div className=" sticky container mx-auto shadow-md rounded-md p-2 w-full flex gap-4 flex-wrap top-15 bg-white">
        {tags.map((tag, i) => (
          <Tag key={tag + i} tag={tag} />
        ))}
      </div>
      <div className="grid gap-5 grid-cols-6 m-4 mx-auto container w-full">
        <Filter data={filters} />
        {/* Product Listing */}
        <section className="col-span-5">
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
        </section>
      </div>
    </>
  );
};

export default Products;
