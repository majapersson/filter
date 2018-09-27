export const API_ROOT = process.env.REACT_APP_API_ROOT;

export function throttle(fn, wait) {
  var time = Date.now();
  return function() {
    if (time + wait - Date.now() < 0) {
      fn();
      time = Date.now();
    }
  };
}

export function delayLink(e, url) {
  console.log("Delaying...");
  e.preventDefault();

  setTimeout(function() {
    window.location = url;
  }, 5000);
}
