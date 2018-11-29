//Variables
const burger = document.querySelector(".burger");


//Functions
function hamburgerMenu() {
    burger.classList.toggle("active");
}


//Events
burger.addEventListener("click", hamburgerMenu);