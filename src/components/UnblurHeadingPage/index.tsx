import React, {useEffect, useRef, useState} from "react";
import {useGlobalContext} from "@/context/GlobalContext.js";

const UnblurHeading = () => {
  const {setFullScreen} = useGlobalContext()
  const sectionRef = useRef(null);
  const [scrollProgress, setScrollProgress] = useState(0);

  useEffect(() => {
    setFullScreen(true)
    return () => {
      setFullScreen(false)
    }
  }, [])

  const words = ["We", "refuse", "to", "accept", "a", "future", "where", "our", "freedom", "is", "compromised"];

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const fullHeight = document.documentElement.scrollHeight;

      // Calculate progress as a value between 0 and 1
      const progress = Math.min(
        Math.max(scrollY / (fullHeight - windowHeight), 0),
        1
      );

      setScrollProgress(progress);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll(); // Initial calculation

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="relative">
      {/* Spacer for scrolling */}
      <div className="h-screen"/>

      {/* Fixed black section */}
      <div className="fixed inset-0 flex items-center justify-center bg-black">
        <div ref={sectionRef} className="max-w-7xl mx-auto px-4">
          <h1 className="flex flex-wrap justify-center gap-4 text-4xl md:text-6xl lg:text-8xl font-bold text-white">
            {words.map((word, index) => {
              // Calculate per-word progress based on overall scroll
              const wordProgress = Math.min(
                Math.max(
                  (scrollProgress * words.length - index) * 2,
                  0
                ),
                1
              );

              return (
                <span
                  key={index}
                  className="transition-all duration-300 ease-out"
                  style={{
                    opacity: wordProgress,
                    filter: `blur(${20 - wordProgress * 20}px)`,
                  }}
                >
                  {word}
                </span>
              );
            })}
          </h1>
        </div>
      </div>

      {/* Spacer for scrolling */}
      <div className="h-screen"/>
    </div>
  );
};

export default UnblurHeading;
