import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { cn } from "@/lib/utils"; // ShadCN utility for conditional classNames

const TabContent = {
  latest: "Discover the latest trends, news, and fresh updates here!",
  popular: "Check out what's buzzing! The most popular content awaits.",
  oldest: "Revisit classics and explore our oldest, cherished content.",
};

const TabsComponent: React.FC = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const query = new URLSearchParams(location.search);
  const tab = query.get("tab") || "latest";

  const handleTabClick = (newTab: string) => {
    navigate(`?tab=${newTab}`);
  };

  return (
    <div className="max-w-4xl mx-auto mt-8 p-4 bg-black text-white rounded-lg shadow-lg">
      {/* Tabs */}
      <div className="flex items-center justify-center gap-4 border-b border-gray-700 pb-2">
        {["latest", "popular", "oldest"].map((key) => (
          <button
            key={key}
            onClick={() => handleTabClick(key)}
            className={cn(
              "px-6 py-2 text-sm font-medium rounded-lg transition-all",
              tab === key
                ? "bg-white text-black shadow-md"
                : "bg-gray-800 text-gray-400 hover:text-white hover:bg-gray-700"
            )}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)}
          </button>
        ))}
      </div>
      {/* Content */}
      <div className="mt-6">
        <p className="text-gray-300 text-lg">{TabContent[tab as keyof typeof TabContent]}</p>
      </div>
    </div>
  );
};

export default TabsComponent;
