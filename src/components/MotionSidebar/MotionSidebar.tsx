import * as React from "react";
import {useRef} from "react";
import {motion, sync, useCycle} from "framer-motion";
import {useDimensions} from "./useDimensions.ts";
import {MenuToggle} from "./MenuToggle.tsx";
import {Navigation} from "./Navigation.tsx";
import {useGlobalContext} from "@/context/GlobalContext.js";

const sidebar = {
  open: (height = 1000) => ({
    clipPath: `circle(${height * 2 + 200}px at 40px 40px)`,
    transition: {
      type: "spring",
      stiffness: 20,
      restDelta: 2
    }
  }),
  closed: {
    clipPath: "circle(30px at 40px 40px)",
    transition: {
      delay: 0.5,
      type: "spring",
      stiffness: 400,
      damping: 40
    }
  }
};

const MotionSidebar = () => {
  const {setFullScreen} = useGlobalContext()
  const [isOpen, toggleOpen] = useCycle(false, true);
  const containerRef = useRef(null);
  const {height} = useDimensions(containerRef);

  React.useEffect(() => {
    setFullScreen(true);
    return () => {
      setFullScreen(false);
    }
  }, []);

  return (
    <div
      className="fixed items-center justify-center inset-0 overflow-hidden min-h-screen bg-gradient-to-b from-blue-500 to-blue-700"
    >
      <motion.nav
        className='absolute top-0 left-0 bottom-0 w-[300px]'
        initial={false}
        animate={isOpen ? "open" : "closed"}
        custom={height}
        ref={containerRef}
      >
        <motion.div
          className="absolute top-0 left-0 bottom-0 w-[300px] bg-white"
          variants={sidebar}
        />
        <Navigation/>
        <MenuToggle toggle={() => toggleOpen()}/>
      </motion.nav>
    </div>
  )
};

export default MotionSidebar;
