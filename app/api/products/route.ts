export interface IProduct {
  title: string;
  description: string;
  price: number;
}

const DB: IProduct[] = [
  { title: "red", description: "red paint", price: 20 },
  { title: "blue", description: "blue paint", price: 25 },
  { title: "green", description: "green paint", price: 30 },
  { title: "yellow", description: "yellow paint", price: 35 },
  { title: "purple", description: "purple paint", price: 40 },
  { title: "orange", description: "orange paint", price: 45 },
  { title: "pink", description: "pink paint", price: 50 },
  { title: "brown", description: "brown paint", price: 55 },
  { title: "black", description: "black paint", price: 60 },
];

export async function GET(request: Request) {
  // Parse the URL and extract query parameters
  const { searchParams } = new URL(request.url);
  const query = searchParams.get("q")?.toLowerCase() || "";

  // Filter the colors based on the query
  const filteredColors = DB.filter(
    (color) =>
      color.title.toLowerCase().includes(query) ||
      color.description.toLowerCase().includes(query)
  );

  return new Response(JSON.stringify(filteredColors), {
    status: 200,
    headers: {
      "Content-Type": "application/json",
    },
  });
}
