export const slideDown = {
  initial: {
    opacity: 0,
    y: -40,
  },
  enter: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 1.5,
      ease: [0.215, 0.61, 0.355, 1],
    },
  },
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
};
