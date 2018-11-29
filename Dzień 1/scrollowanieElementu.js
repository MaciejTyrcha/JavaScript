// document.addEventListener('scroll', function () {
//     console.log("Scrollujesz!");
// });

// document.addEventListener('scroll', function () {
//     console.log("Scrollujes o " + window.scrollY);
// // });

// const spanResult = document.querySelector('span');

// let sum = 0;

// function showScrollForSpan() {
//     sum++;
// }

// document.addEventListener('click', showScrollForSpan);

const spanCounter = document.querySelector(".dodaj");
const spanQuery = document.querySelector("span");
const spanRev = document.querySelector(".odejmij");

let counter = 0;

spanCounter.addEventListener('click', function () {
    spanQuery.textContent = ++counter;
    if (counter >= 10) {
        spanQuery.style.backgroundColor = "red";
    } else {
        spanQuery.style.backgroundColor = "white";
    }
});

spanRev.addEventListener('click', function () {
    spanQuery.textContent = --counter;
    if (counter >= 10) {
        spanQuery.style.backgroundColor = "red";
    } else {
        spanQuery.style.backgroundColor = "white";
    }
});