"use client";
import { useState, useEffect } from "react";

const useScreenSize = () => {
  const [screenSize, setScreenSize] = useState({
    width: 0, // Default value
    height: 0, // Default value
  });

  useEffect(() => {
    const handleResize = () => {
      if (typeof window !== "undefined") {
        // Check if window is defined
        setScreenSize({
          width: window.innerWidth,
          height: window.innerHeight,
        });
      }
    };

    handleResize(); // Set initial size
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return screenSize;
};

export default useScreenSize;
