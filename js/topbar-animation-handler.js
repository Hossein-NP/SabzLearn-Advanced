// Top bar animation handler
const menuItems = document.querySelectorAll(".top-bar__items");
const menuBar = document.querySelector(".top-bar__menu");

function animationHandler() {
  menuBar.classList.remove("top-bar__items-scroll")
}
menuBar.addEventListener("mouseenter" , animationHandler())

export {menuItems, menuBar, animationHandler}