import * as React from "react";
import { motion } from "framer-motion";

const variants = {
  open: {
    y: 0,
    opacity: 1,
    transition: {
      y: { stiffness: 1000, velocity: -100 }
    }
  },
  closed: {
    y: 50,
    opacity: 0,
    transition: {
      y: { stiffness: 1000 }
    }
  }
};

const colors = ["#FF008C", "#D309E1", "#9C1AFF", "#7700FF", "#4400FF"];

export const MenuItem = ({ i }) => {
  const style = { border: `2px solid ${colors[i]}` };
  return (
    <motion.li
      className='inset-0 mb-[20px] flex items-center cursor-pointer list-none'
      variants={variants}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
    >
      <div
        className="ml-5 rounded-full w-[40px] h-[40px] mr-5 flex-40px-0"
        style={style}
      />
      <div
        className="rounded-[5px] w-[200px] h-[20px] flex-1"
        style={style}
      />
    </motion.li>
  );
};
