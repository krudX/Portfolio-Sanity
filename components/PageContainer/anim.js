export const pageVariants = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.2, delay: 1, type: "tween", ease: "easeOut" },
  },
  exit: {
    y: 20,
    opacity: 0,
    transition: { duration: 0.2, type: "tween", ease: "easeOut" },
  },
};
