// //Variables
// const burger = document.querySelector(".burger");

// const iconBurger = document.querySelector('.fa-bars');
// const iconX = document.querySelector('.fa-times');
// const asideColumn = document.querySelector("aside");
// const wrapper = document.querySelector('.wrapper');


// //Functions
// function hamburgerMenu() {
//     iconBurger.classList.toggle("show");
//     iconX.classList.toggle("show");
//     asideColumn.classList.toggle("show");
//     wrapper.classList.toggle("show");
// }

// //Events
// burger.addEventListener("click", hamburgerMenu);

//Loops

const burger = document.querySelector(".burger");
const activeElement = document.querySelectorAll(".active");

burger.addEventListener("click", function () {
    for (let i = 0; i < activeElement.length; i++) {
        activeElement[i].classList.toggle("show");
    }
});

// //jQuery

// function toggleMenu() {
//     $('.fas, .wrapper, .aside').toggleClass("show");
//
// }

// $('.burger').on("click", toggleMenu);