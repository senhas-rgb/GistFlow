console.log("Popup.js loaded");

const zapButton = document.querySelector("button#zap");
const saveButton = document.querySelector("button#save");
const dashboardButton = document.querySelector("button#dashboard");

function zap() {
    console.log("Zap button clicked");
}

function save() {
    console.log("Save button clicked");
}

function dashboard() {
    console.log("Dashboard button clicked");
    chrome.tabs.create({url: "popup/dashboard.html"});
}

zapButton.addEventListener("click", zap);
saveButton.addEventListener("click", save);
dashboardButton.addEventListener("click", dashboard);
