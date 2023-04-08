//for mobile menu
const hamburger = document.getElementById("hamburger");

hamburger.addEventListener("click", () => {
  const menu = document.querySelector(".header__left-desktop");
  menu.classList.toggle("show");
});