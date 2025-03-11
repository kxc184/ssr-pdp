import ColorGrid from "@/components/ui/ColorGrid";
import Tag from "@/components/ui/Tag";
import React from "react";

const fetchColors = async (searchParams: {
  q?: string;
  family?: string | string[];
  page: string;
}) => {
  const response = await fetch(
    `http://localhost:3000/api/colors?q=${searchParams.q || ""}&family=${
      searchParams.family || []
    }&page=${searchParams.page || "1"}`
  );
  const data = await response.json();
  return data;
};

const Products = async ({
  searchParams,
}: {
  searchParams: { q?: string; family?: string | string[]; page: string };
}) => {
  const q = searchParams.q || "";
  let family = searchParams.family || [];

  // Combine query and family to get all tags
  if (typeof family === "string") {
    family = [family];
  }
  const tags = [...family, q].filter((tag) => tag !== "");

  // Server action to fetch data server side
  const colors = await fetchColors(searchParams);
  return (
    <>
      <div className=" sticky container mx-auto shadow-md rounded-md p-2 w-full flex gap-4 flex-wrap top-15 bg-white">
        {tags.map((tag, i) => (
          <Tag key={tag + i} tag={tag} />
        ))}
      </div>

      <ColorGrid colors={colors} />
    </>
  );
};

export default Products;
