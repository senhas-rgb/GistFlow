chrome.runtime.onInstalled.addListener(() => {
  console.log("Extension installed!");
});

chrome.tabs.onCreated.addListener((tab) => {
  console.log("New tab created!", tab);
});
