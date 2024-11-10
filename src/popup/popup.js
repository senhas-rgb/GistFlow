console.log("Popup.js loaded");

const zapButton = document.querySelector("button#zap");
const saveButton = document.querySelector("button#save");
const dashboardButton = document.querySelector("button#dashboard");

zapButton.addEventListener("click", () => {
    console.log("Zap button clicked");
});

saveButton.addEventListener("click", () => {
    console.log("Save button clicked");
});

dashboardButton.addEventListener("click", () => {
    console.log("Dashboard button clicked");
});