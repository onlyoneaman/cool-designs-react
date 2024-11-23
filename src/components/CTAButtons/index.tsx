import React from "react";

const AnimatedCTAButton = () => {
  return (
    <div className="flex items-center justify-center">
      <button
        className="relative flex items-center gap-3 py-4 px-8 rounded-full bg-black hover:bg-black/90 text-white text-lg font-medium overflow-hidden group transition-all duration-300"
      >
        {/* Left Icon Container */}
        <span className="relative -ml-2 transition-transform duration-500 ease-out group-hover:-translate-x-12 opacity-100 group-hover:opacity-0">
          🍎
        </span>

        {/* Text Container */}
        <span className="relative transition-transform duration-500 ease-out group-hover:-translate-x-4">
          Download for Mac
        </span>

        {/* Right Icon Container */}
        <span className="absolute right-6 transition-all duration-500 ease-out translate-x-8 opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
          →
        </span>
      </button>
    </div>
  );
};

export default AnimatedCTAButton;
