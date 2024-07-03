const btn = document.querySelector(".nav__burger");
const modal = document.querySelector("#modal");

function modalToggle() {
  modal.classList.toggle("modalToggle");
}

btn.addEventListener("click", modalToggle);
