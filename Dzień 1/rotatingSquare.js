//Variables
const button = document.querySelector("button");
let divSquare = document.querySelector(".square");
let startAngle = 0;
const changableAngle = 20;

//Functions
function squareRotation() {
    startAngle += changableAngle;
    // changableAngle = changableAngle + 20;
    divSquare.style.transform = "rotate(" + startAngle + "deg)";
    //divSquare.style.transition = 1 + "s linear";
    divSquare.classList.add("animation");
}

//Events
button.addEventListener("mousemove", squareRotation);