export const API_ROOT = process.env.REACT_APP_API_ROOT;

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

export function delayLink(e, url) {
  console.log("Delaying...");
  e.preventDefault();

  setTimeout(function() {
    window.location = url;
  }, 5000);
}
