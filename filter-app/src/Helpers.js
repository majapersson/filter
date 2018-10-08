// CONSTANTS

export const API_ROOT = process.env.REACT_APP_API_ROOT;

export const COLORS = {
  accent: "#E1AB99",
  dark: "#000",
  light: "#fff",
  bg: "#fff",
  fg: "#000"
};

export const FONTS = {
  serif: "Tiempos Regular, serif",
  sansSerif: "National, sans-serif"
};

// FUNCTIONS

export const throttle = (fn, delay) => {
  let lastCall = 0;
  return function(...args) {
    const now = new Date().getTime();
    if (now - lastCall < delay) {
      return;
    }
    lastCall = now;
    return fn(...args);
  };
};
