import { ALL_THE_SW_COLORS } from "@/lib/const";

export interface IColor {
  name: string;
  hex: string;
  colorNumber: string;
  colorFamilyNames: string[];
}

const DB: IColor[] = ALL_THE_SW_COLORS;
const PAGE_SIZE = 12;

export async function GET(request: Request) {
  // Parse the URL and extract query parameters
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase() || "";
  const family = searchParams.getAll("family") || "";
  const page = Number(searchParams.getAll("page") || "1");
  const pageIndex = (page - 1) * PAGE_SIZE;
  const pageLimit = pageIndex + PAGE_SIZE;
  console.log("Family", family, family.length === 1 && family[0] === "");

  const uniqueColorFamilies = new Set();
  // Filter the colors based on the query
  const queryColors = DB.filter((color) => {
    color.colorFamilyNames.forEach((familyName) => {
      uniqueColorFamilies.add(familyName);
    });
    return (
      color.name.toLowerCase().includes(query) ||
      color.colorNumber.toLowerCase().includes(query)
    );
  });

  const filterColors = !(family.length === 1 && family[0] === "")
    ? queryColors.filter((color) => {
        return family.includes(color.colorFamilyNames[0].toLowerCase());
      })
    : queryColors;

  const body = JSON.stringify({
    data: filterColors.slice(pageIndex, pageLimit),
    filters: [
      {
        name: "Color Families",
        data: Array.from(uniqueColorFamilies)
          .filter((family) => family !== "NA")
          .map((name) => {
            return { name };
          }),
      },
    ],
    pages: Math.ceil(filterColors.length / PAGE_SIZE),
  });

  console.log("filteredColors", body);
  // console.log("All color families", uniqueColorFamilies);
  return new Response(body, {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
