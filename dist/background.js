"use strict";
console.log("Hello from the background script!");
chrome.runtime.onInstalled.addListener(() => {
    console.log("Extension installed!");
});