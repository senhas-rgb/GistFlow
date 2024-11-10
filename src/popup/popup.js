console.log("Popup.js loaded");

const zapButton = document.querySelector("button#zap");
const saveButton = document.querySelector("button#save");
const dashboardButton = document.querySelector("button#dashboard");
const searchInput = document.querySelector("input#search");
const recentFiles = document.querySelector("div#recentFiles");
const openButton = document.querySelector("button#open");
const deleteButton = document.querySelector("button#delete");
const searchButton = document.querySelector("button#search");

function search() {
    console.log("Searching for files");
    const searchTerm = document.getElementById("search").value;
    console.log(searchTerm);
    const files = document.querySelectorAll("div.file");
    console.log(files);
}


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
