import { opacity } from "../Navbar/anim";

export const pageTransition = {
  initial: {
    height: 900,
    y: 1000,
    scale: 1,
  },
  enter: {
    height: "auto",
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: 0.2,
      type: "tween",
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
  exit: {
    zIndex: 0,
    scale: 0.95,
    y: -400,
    transition: {
      duration: 0.65,
      type: "tween",
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
};
