"use client";

import { motion, AnimatePresence } from "framer-motion";
import { usePathname } from "next/navigation";
import { LayoutRouterContext } from "next/dist/shared/lib/app-router-context.shared-runtime";
import { useContext, useRef, useState, useEffect } from "react";

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

  useEffect(() => {
    setLoadingProgress(0);
    setIsLoading(true);

    const interval = setInterval(() => {
      setLoadingProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setIsLoading(false);
          return 100;
        }
        return prev + 2;
      });
    }, 50);

    return () => clearInterval(interval);
  }, [pathname]);

  return (
    <AnimatePresence mode="popLayout">
      {isLoading ? (
        <motion.div
          key="loading-screen"
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 1000, transition: { delay: 0.35, duration: 0.35 } }}
          transition={{ duration: 0.5, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] }}
          style={{
            position: "fixed",
            top: 0,
            left: 0,
            width: "100vw",
            height: "100vh",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            backgroundColor: "#F7F7F7",
            color: "#333333",
            zIndex: 1000,
          }}
        >
          <motion.div
            style={{
              fontSize: "3.5rem",
              fontWeight: 600,
              textAlign: "center",
            }}
          >
            {loadingProgress}%
          </motion.div>
        </motion.div>
      ) : (
        <motion.div
          key={pathname}
          initial={{ opacity: 0, y: -1000 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 1000 }}
          transition={{ ease: "easeOut", duration: 0.55, delay: 0.35, ease: [0.76, 0, 0.24, 1] }}
        >
          <FrozenRouter>{children}</FrozenRouter>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default PageTransitionEffect;
