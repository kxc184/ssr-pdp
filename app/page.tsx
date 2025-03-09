import Header from "@/components/ui/Header";
import Card from "../components/ui/Card";
import React from "react";

const cards = [
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

const Home = () => {
  const pagination = "< 1 2 3 4 5 >";
  return (
    <>
      <Header />
      <div className="grid gap-5 grid-cols-6 m-4">
        <div className="col-span-1 shadow-xl rounded-md px-2 font-semibold">
          Filter
        </div>
        <div className={`grid grid-cols-3 max-w-4xl col-span-5 gap-5 `}>
          {cards.map((card) => (
            <Card
              key={card.title}
              title={card.title}
              description={card.description}
              price={card.price}
            />
          ))}
          <div className="col-span-3 text-center">{pagination}</div>
        </div>
      </div>
    </>
  );
};

export default Home;
