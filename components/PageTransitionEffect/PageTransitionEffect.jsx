"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef, useState, useEffect } from "react";

import styles from "./style.module.scss";
import { pageTransition } from "./anim";

function FrozenRouter(props) {
  const context = useContext(LayoutRouterContext ?? {});
  const frozen = useRef(context).current;

  if (!frozen) {
    return <>{props.children}</>;
  }

  return <LayoutRouterContext.Provider value={frozen}>{props.children}</LayoutRouterContext.Provider>;
}

const PageTransitionEffect = ({ children }) => {
  const pathname = usePathname();
  const [loadingProgress, setLoadingProgress] = useState(0);
  const [isLoading, setIsLoading] = useState(true);
  const [hasLoadedOnce, setHasLoadedOnce] = useState(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const loadedOnce = sessionStorage.getItem("hasLoadedOnce") === "true";
      setHasLoadedOnce(loadedOnce);
    }
  }, []);

  useEffect(() => {
    if (hasLoadedOnce) {
      setIsLoading(false);
      return;
    }

    setLoadingProgress(0);
    setIsLoading(true);

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          sessionStorage.setItem("hasLoadedOnce", "true");
          setHasLoadedOnce(true);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [pathname, hasLoadedOnce]);

  return (
    <AnimatePresence mode="popLayout">
      {!hasLoadedOnce && isLoading ? (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ y: -1000 }}
          transition={{ duration: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }}
          className={styles.loadingScreen}
        >
          <motion.div className={`text-h2-mobile md:text-h2-tablet lg:text-h2 fixed bottom-6 right-6`}>{loadingProgress}%</motion.div>
        </motion.div>
      ) : (
        <motion.div
          key={pathname}
          variants={pageTransition}
          initial="initial"
          animate="enter"
          exit="exit"
          transition={{ duration: 0.75, delay: 0.5, type: "tween", ease: [0.215, 0.61, 0.355, 1] }}
          className="bg-neutral-200"
        >
          <FrozenRouter>{children}</FrozenRouter>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransitionEffect;
