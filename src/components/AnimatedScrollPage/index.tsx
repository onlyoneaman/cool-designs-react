import React, { useRef } from 'react';
import { useScroll, animated, useSpring } from '@react-spring/web';

const X_LINES = 40;
const PAGE_COUNT = 5;
const INITIAL_WIDTH = 20;

const AnimatedScroll = () => {
  const containerRef = useRef(null);
  const barContainerRef = useRef(null);

  const [textStyles, textApi] = useSpring(() => ({
    y: '100%',
  }));

  const { scrollYProgress } = useScroll({
    container: containerRef,
    onChange: ({ value: { scrollYProgress } }) => {
      if (scrollYProgress > 0.7) {
        textApi.start({ y: '0' });
      } else {
        textApi.start({ y: '100%' });
      }
    },
    default: {
      immediate: true,
    },
  });

  return (
    <div
      ref={containerRef}
      className="relative bg-[#171717] h-[calc(100vh-8rem)] w-full overflow-y-scroll"
    >
      <div className="w-full h-full fixed inset-0 top-16 pointer-events-none">
        {/* Right-aligned bars */}
        <animated.div
          ref={barContainerRef}
          className="flex flex-col items-end justify-between h-full"
        >
          {Array.from({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i}
              className="h-[1vh] bg-white/40"
              style={{
                width: scrollYProgress.to(scrollP => {
                  const percentilePosition = (i + 1) / X_LINES;
                  return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32;
                }),
              }}
            />
          ))}
        </animated.div>

        {/* Left-aligned bars */}
        <animated.div className="flex flex-col items-start justify-between h-full absolute top-0 left-0 w-full">
          {Array.from({ length: X_LINES }).map((_, i) => (
            <animated.div
              key={i}
              className="h-[1vh] bg-white/40"
              style={{
                width: scrollYProgress.to(scrollP => {
                  const percentilePosition = 1 - (i + 1) / X_LINES;
                  return INITIAL_WIDTH / 4 + 40 * Math.cos(((percentilePosition - scrollP) * Math.PI) / 1.5) ** 32;
                }),
              }}
            />
          ))}
        </animated.div>

        {/* Animated dot with text */}
        <animated.div
          className="bg-orange-500 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-full h-full"
          style={{
            clipPath: scrollYProgress.to(val => `circle(${val * 100}%)`),
          }}
        >
          <h1 className="text-[#054aee] text-[8vw] pl-[8vw]">
            <span className="block overflow-hidden">
              <animated.span className="block" style={textStyles}>
                Aha!
              </animated.span>
            </span>
            <span className="block overflow-hidden">
              <animated.span className="block" style={textStyles}>
                You found me!
              </animated.span>
            </span>
          </h1>
        </animated.div>
      </div>

      {/* Scroll pages */}
      {Array.from({ length: PAGE_COUNT }).map((_, index) => (
        <div key={index} className="w-full h-screen" />
      ))}
    </div>
  );
};

export default AnimatedScroll;
