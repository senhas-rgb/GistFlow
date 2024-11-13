// defining all the elements
const DashboardButton = document.getElementById("DashboardButton");
const body = document.querySelector("body");
const DarkModeBtn = document.getElementById("dark-mode-btn");
// defining all the functions
function openNewTabDashboard() {
  window.open("dashboard.html", "_blank");
}

// adding the event listeners
DashboardButton.addEventListener("click", openNewTabDashboard);
DarkModeBtn.addEventListener("click", changeTheme);
