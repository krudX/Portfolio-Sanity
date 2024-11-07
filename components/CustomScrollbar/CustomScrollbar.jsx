"use client";
import { motion, useScroll, useSpring } from "framer-motion";
import styles from "./styles.module.scss";

export const CustomScrollbar = () => {
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 500,
    damping: 10,
    restDelta: 0.001,
  });

  return (
    <div className={styles.scrollContainer}>
      <motion.div className={styles.scrollbar} style={{ scaleY }} />
    </div>
  );
};
