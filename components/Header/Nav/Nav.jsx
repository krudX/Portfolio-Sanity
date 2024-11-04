import styles from "./style.module.scss";
import { motion } from "framer-motion";
import { links, footerLinks } from "./data";
import { pullUp, slideIn } from "./anim";

import { usePathname } from "next/navigation";
import TransitionLink from "@/components/PageTransitionEffect/TransitionLink";

export default function Nav({ toggleMenu }) {
  const pathName = usePathname();

  return (
    <div className={styles.nav}>
      <div className={styles.body}>
        {links.map((link, i) => {
          const { label, path } = link;

          return (
            <div key={`b_${i}`} className={styles.linkContainer}>
              <motion.div custom={i} variants={slideIn} initial="initial" animate="enter" exit="exit">
                <TransitionLink
                  onClick={toggleMenu}
                  path={pathName}
                  href={path}
                  className="text-h2-mobile lg:text-h2 md:text-h2-tablet font-semibold text-neutral-800"
                >
                  {label}
                </TransitionLink>
              </motion.div>
              {/* <Link
                // initial={"initial"}
                // animate={"animate"}
                onClick={!pathName == path && toggleMenu}
                href={path}
                className="relative block overflow-hidden whitespace-nowrap text-h2 text-neutral-800 leading-none"
              >
                {label.split("").map((l, i) => (
                  <motion.span variants={pullUp} initial="initial" animate="enter" exit="exit" className="inline-block" key={i} custom={i}>
                    {l}
                  </motion.span>
                ))}
              </Link> */}
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
