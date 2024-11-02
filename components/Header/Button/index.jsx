import { motion } from "framer-motion";
import styles from "./style.module.scss";

export default function Button({ isActive, toggleMenu }) {
  return (
    <div className={styles.button}>
      <motion.div
        className={styles.slider}
        // animate={{ top: isActive ? "-100%" : "0%" }}
        // transition={{ duration: 0.5, type: "tween", ease: [0.76, 0, 0.24, 1] }}
      >
        <button
          onClick={() => {
            toggleMenu();
          }}
        >
          <motion.div className={`bg-neutral-800 ${styles.line} ${isActive ? styles.lineActive : ""}`}></motion.div>
          <motion.div className={`bg-neutral-800 ${styles.line} ${isActive ? styles.lineActive : ""}`}></motion.div>
        </button>
      </motion.div>
    </div>
  );
}
