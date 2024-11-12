// defining all the elements
const DashboardButton = document.getElementById("DashboardButton");


// defining all the functions
function openNewTabDashboard() {
  window.open("dashboard.html", "_blank");
}

// adding the event listeners
DashboardButton.addEventListener("click", openNewTabDashboard);