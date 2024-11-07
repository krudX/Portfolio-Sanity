// export const perspective = {
//   initial: {
//     opacity: 0,
//     rotateX: 90,
//     translateY: 80,
//     translateX: -20,
//   },
//   enter: (i) => ({
//     opacity: 1,
//     rotateX: 0,
//     translateY: 0,
//     translateX: 0,
//     transition: {
//       duration: 0.65,
//       delay: 0.5 + i * 0.1,
//       ease: [0.215, 0.61, 0.355, 1],
//       opacity: { duration: 0.35 },
//     },
//   }),
//   exit: {
//     opacity: 0,
//     transition: { duration: 0.5, type: "linear", ease: [0.76, 0, 0.24, 1] },
//   },
// };

export const slideIn = {
  initial: {
    opacity: 0,
    y: 40,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.9,
      delay: 0.5 + i * 0.15,
      ease: [0.215, 0.61, 0.355, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
};

export const pullUp = {
  initial: {
    opacity: 0,
    y: 20,
  },
  enter: (i) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.25 + i * 0.05,
      type: "tween",
      ease: [0.6, 0.2, 0.3, 1],
    },
  }),
  exit: {
    opacity: 0,
    transition: { duration: 0.5, type: "tween", ease: "easeInOut" },
  },
};
