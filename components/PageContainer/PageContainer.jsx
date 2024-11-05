"use client";
import { AnimatePresence, motion } from "framer-motion";

const pageVariants = {
  initial: {
    y: 20,
    opacity: 0,
  },
  enter: {
    y: 0,
    opacity: 1,
    transition: { duration: 0.5, delay: 1, type: "tween", ease: "easeOut" },
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: { duration: 0.15, type: "tween", ease: "easeOut" },
  },
};

const PageContainer = ({ children }) => {
  return (
    <AnimatePresence mode="wait">
      <motion.main variants={pageVariants} initial="initial" animate="enter" exit="exit" className="page-wrapper">
        {children}
      </motion.main>
    </AnimatePresence>
  );
};

export default PageContainer;
