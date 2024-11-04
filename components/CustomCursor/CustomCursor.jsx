"use client";
import "./style.module.css";

import React, { useState, useEffect } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";
import useScreenSize from "@/lib/hooks/useScreenSize";

const CustomCursor = () => {
  const screenSize = useScreenSize();

  let isDesktop = null;

  if (screenSize.width > 786) {
    isDesktop = true;
  } else {
    isDesktop = false;
  }

  const [isHovering, setIsHovering] = useState(false);
  const [cursorText, setCursorText] = useState("");
  const [isHidden, setIsHidden] = useState(false);
  const [isEnlarged, setIsEnlarged] = useState(false);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 50, stiffness: 500 };
  const x = useSpring(mouseX, springConfig);
  const y = useSpring(mouseY, springConfig);

  const cursorVariants = {
    default: {
      width: "44px",
      height: "44px",
      scale: 1,
    },
    enlarge: {
      width: "64px",
      height: "64px",
      scale: 1.5,
    },
    hover: {
      width: "auto",
      height: "44px",
      scale: 1,
    },
    hidden: {
      opacity: 0,
      scale: 0,
    },
  };

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX - 16);
      mouseY.set(e.clientY - 16);
    };

    const handleMouseEnter = (e) => {
      const hideCursorParent = e.target.closest("[data-hide-cursor]");
      const enlargeCursorParent = e.target.closest("[data-enlarge-cursor]");

      if (hideCursorParent) {
        setIsHidden(true);
        return;
      }

      if (enlargeCursorParent) {
        setIsEnlarged(true);
        return;
      }

      if (e.target.hasAttribute("data-hover-text")) {
        setIsHovering(true);
        setCursorText(e.target.getAttribute("data-hover-text"));
      }
    };

    const handleMouseLeave = (e) => {
      if (e.target.hasAttribute("data-hide-cursor")) {
        const relatedTarget = e.relatedTarget;
        if (!e.target.contains(relatedTarget)) {
          setIsHidden(false);
        }
      }

      if (e.target.hasAttribute("data-enlarge-cursor")) {
        const relatedTarget = e.relatedTarget;
        if (!e.target.contains(relatedTarget)) {
          setIsEnlarged(false);
        }
      }

      if (e.target.hasAttribute("data-hover-text")) {
        setIsHovering(false);
        setCursorText("");
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    window.addEventListener("mouseover", handleMouseEnter);
    window.addEventListener("mouseout", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      window.removeEventListener("mouseover", handleMouseEnter);
      window.removeEventListener("mouseout", handleMouseLeave);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="custom-cursor bg-overlay-medium-neutral backdrop-blur-[1px]"
      style={{
        x,
        y,
        position: "fixed",
        pointerEvents: "none",
        display: isDesktop ? "flex" : "none",
        alignItems: "center",
        justifyContent: "center",
        color: "#333333",
        fontSize: "14px",
        zIndex: 1000,
        borderRadius: "99px",
        whiteSpace: "nowrap",
        minWidth: "20px",
        minHeight: "20px",
        border: !(isHovering || isEnlarged) && "1px solid #DEE1E5",
      }}
      initial="default"
      animate={isHidden ? "hidden" : isHovering ? "hover" : isEnlarged ? "enlarge" : "default"}
      variants={cursorVariants}
      transition={{
        type: "spring",
        damping: 35,
        stiffness: 150,
        duration: 0.2,
      }}
    >
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: isHovering ? 1 : 0 }}
        transition={{ duration: 0.2, delay: 0.2 }}
        style={{ padding: isHovering ? "0 12px" : 0 }}
      >
        {cursorText}
      </motion.span>
    </motion.div>
  );
};

export default CustomCursor;
