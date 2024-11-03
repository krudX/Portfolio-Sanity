"use client";
import { AnimatePresence, motion } from "framer-motion";
import { pageVariants } from "./anim";

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
