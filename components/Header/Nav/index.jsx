import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { links, footerLinks } from "./data";
import { perspective, slideIn } from "./anim";
import Link from "next/link";

export default function index() {
  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { label, path } = link;
          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div custom={i} variants={slideIn} initial="initial" animate="enter" exit="exit">
                <Link href={path} className="text-h2 text-neutral-800">
                  {label}
                </Link>
              </motion.div>
            </div>
          );
        })}
      </div>
      <motion.div className={styles.footer}>
        {footerLinks.map((link, i) => {
          const { label, href } = link;
          return (
            <motion.a
              href={href}
              className="text-sm text-neutral-700"
              target="_blank"
              variants={slideIn}
              custom={i}
              initial="initial"
              animate="enter"
              exit="exit"
              key={`f_${i}`}
            >
              {label}
            </motion.a>
          );
        })}
      </motion.div>
    </div>
  );
}
