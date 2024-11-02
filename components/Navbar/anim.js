const transition = { duration: 2, ease: "linear" };

export const opacity = {
  initial: {
    opacity: 0,
  },

  open: {
    opacity: 1,
    transition,
  },

  closed: {
    opacity: 0,
    transition,
  },
};

const menu = {
  open: {
    width: "380px",
    height: "450px",
    top: "-12px",
    right: "-12px",
    transition: { duration: 0.75, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },

  closed: {
    width: "44px",
    height: "44px",
    top: "0px",
    right: "0px",
    transition: { duration: 0.75, delay: 0.35, type: "tween", ease: [0.76, 0, 0.24, 1] },
  },
};

export const slide = {
  initial: { y: 40 },

  enter: (i) => ({ y: 0, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),

  exit: (i) => ({ y: 40, transition: { duration: 0.8, ease: [0.76, 0, 0.24, 1], delay: 0.05 * i } }),
};
