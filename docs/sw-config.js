//This is the service worker with the Advanced caching
const CACHE = "my-apprun-site";
const precacheFiles = [
  "index.html",
  "dist/index.js"
  // "style.css"
];

// TODO: replace the following with the correct offline fallback page i.e.: const offlineFallbackPage = "offline.html";
const offlineFallbackPage = "offline.html";

const networkFirstPaths = [
  /* Add an array of regex of paths that should go network first */
  // Example: /\/api\/.*/
  "index.html",
  /\/dist\/.*/
];

const avoidCachingPaths = [
  /* Add an array of regex of paths that shouldn't be cached */
  // Example: /\/api\/.*/
];
