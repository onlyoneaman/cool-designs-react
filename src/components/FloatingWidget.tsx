import React from "react";
import { Link } from "react-router-dom";
import { Home } from "lucide-react";
import {useGlobalContext} from "@/context/GlobalContext.js";

const FloatingWidget = () => {
  const { isFullScreen } = useGlobalContext()

  if(!isFullScreen) return null

  return (
    <div className="fixed bottom-4 right-4 z-50 flex items-center gap-3">

      {/* Home Button */}
      <Link
        to="/"
        className="bg-black text-white p-3 rounded-full shadow-lg hover:bg-gray-800 transition"
        title="Go Home"
      >
        <Home size={20} />
      </Link>
    </div>
  );
};

export default FloatingWidget;