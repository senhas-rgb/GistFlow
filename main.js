// defining all the elements
const DashboardButton = document.getElementById("DashboardButton");
const body = document.querySelector("body");
const darkMode = document.getElementById("darkMode");
const API = "AIzaSyDxhLMv7vUFmzvyY99k7UlVK1kC-798e24";

// defining all the functions
function openNewTabDashboard() {
  window.open("dashboard.html", "_blank");
}

function changeTheme() {
  body.dataset.theme = body.dataset.theme === "dark" ? "light" : "dark";
}



// adding the event listeners
DashboardButton.addEventListener("click", openNewTabDashboard);
darkMode.addEventListener("click", changeTheme);
