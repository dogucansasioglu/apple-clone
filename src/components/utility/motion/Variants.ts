export const fadeYVariants = {
  out: {
    y: 10,
    opacity: 0,
  },
  in: {
    y: 0,
    opacity: 1,
  },
};

export const fadeXVariants = {
  out: {
    x: 10,
    opacity: 0,
  },
  in: {
    x: 0,
    opacity: 1,
  },
};

export const fadeVariants = {
  out: {
    opacity: 0,
  },
  in: (delay: number) => ({
    opacity: 1,
    transition: {
      delay,
    },
  }),
};

export const containerVariants = {
  out: {
    y: 0,
  },
  in: {
    y: 0,
    transition: {
      duration: 0.75,
      // The first child will appear AFTER the parrent has appeared on the screen
      delayChildren: 0.2,
      // The next sibling will appear 0.2s after the previous one
      staggerChildren: 0.2,
    },
  },
};
