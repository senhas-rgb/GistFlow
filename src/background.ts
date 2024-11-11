console.log("Hello from the background script!");

chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed!");
});

chrome.tabs.onCreated.addListener((tab) => {
  console.log("New tab created!", tab);
});
