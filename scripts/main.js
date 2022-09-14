const burger = document.getElementById("burger");
const navList = document.getElementById("nav-list");
const heroNav = document.querySelector(".hero-nav");

function toggleClass() {
  burger.classList.toggle("show");
  navList.classList.toggle("show");
  heroNav.classList.toggle("active");
}

burger.addEventListener("click", toggleClass);

document.querySelectorAll(".nav-link").forEach(n => n.addEventListener("click", () => {
  burger.classList.remove("show");
  navList.classList.remove("show");
  heroNav.classList.remove("active");
}))