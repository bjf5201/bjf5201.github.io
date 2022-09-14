const burger = document.getElementById('burger');
const navList = document.getElementById('nav-list');

function toggleClass() {
  burger.classList.toggle("active");
  navList.classList.toggle("active");
}

burger.addEventListener('click', toggleClass);
