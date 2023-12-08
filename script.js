const navMenu = document.querySelector("#nav-menu");
const navToggle = document.querySelector("#nav-toggle");
const navClose = document.querySelector("#nav-close");

// NOTE: Toggle menu
navToggle.addEventListener("click", () => {
  navMenu.classList.add("show-menu");
  navToggle.classList.add("hide-button");
  navClose.classList.remove("hide-button");
});

// NOTE: Hide menu when X is clicked
navClose.addEventListener("click", () => {
  navMenu.classList.remove("show-menu");
  navToggle.classList.remove("hide-button");
  navClose.classList.add("hide-button");
});

const navLink = document.querySelectorAll(".nav__link");
function hideMenu() {
  navMenu.classList.remove("show-menu");
}

// NOTE: Hide menu when navlinks are clicked
navLink.forEach((link) => link.addEventListener("click", hideMenu));
