// Variables
const barsButton = document.getElementById("bars-button");
const exitButton = document.querySelector(".exit__button");

const sidebar = document.querySelector(".nav__sidebar");
const sidebarMenu = document.querySelector(".sidebar__menu");
// Main Code

barsButton.addEventListener("click", () => {
  sidebar.style.backdropFilter = "blur(8px)"
  sidebar.style.transform = "translateX(0)";
})

exitButton.addEventListener("click", () => {
  sidebar.style.transform = "translateX(100%)";
  sidebar.style.backdropFilter = "blur(-10px)"
})
