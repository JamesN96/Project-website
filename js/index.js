// Select DOM elements

const menu = document.querySelector("#menu-toggle");
const nav = document.querySelector("#nav-ul");
const exit = document.querySelector("#exit-icon");

// Add event listeners

menu.addEventListener("click", showMenu);
exit.addEventListener("click", closeMenu);

// toggleMenu function

function showMenu(e) {
  nav.classList.toggle("mobile");
  e.preventDefault();
}

// closeMenu

function closeMenu(e) {
  nav.classList.add("mobile");
  e.preventDefault();
}
