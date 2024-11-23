import React from "react";
import DesignCard from "./DesignCard.tsx";

const Home = () => {
  const pages = [
    {
      title: "Do Nothing Timer",
      description: "A minimalist timer that encourages mindfulness.",
      link: "/donothingforaminute",
    },
    {
      title: "Cool Page 2",
      description: "Another cool design you can showcase here.",
      link: "/design2",
    },
    {
      title: "Future Designs",
      description: "Keep adding more designs to expand your collection.",
      link: "/design3",
    },
  ];

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center py-8">
      <h1 className="text-3xl font-bold mb-6">Cool Design Pages</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl w-full px-4">
        {pages.map((page, index) => (
          <DesignCard
            key={index}
            title={page.title}
            description={page.description}
            link={page.link}
          />
        ))}
      </div>
    </div>
  );
};

export default Home;
