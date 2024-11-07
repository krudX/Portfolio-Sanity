export const pageTransition = {
  initial: {
    zIndex: 1,
    y: 1000,
    scale: 0.95,
    opacity: 1,
  },
  enter: {
    y: 0,
    scale: 1,
    transition: {
      duration: 0.75,
      delay: 0.2,
      type: "tween",
      ease: "easeOut",
    },
  },
  exit: {
    zIndex: 0,
    y: 0,
    scale: 0.75,
    opacity: 0,
    transition: {
      duration: 0.75,
      delay: 0.15,
      type: "tween",
      ease: "easeOut",
    },
  },
};
