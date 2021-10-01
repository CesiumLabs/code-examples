/**
 * This extension can not only block website u are visiting but also background calls made from a website too
 */

browser.webRequest.onBeforeRequest.addListener(
  (url) => {
    return { cancel: true };
  },
  { urls: ["*://*.scamlink1.com/*", "*://*.scamlink2.com/*"] },
  ["blocking"]
);
