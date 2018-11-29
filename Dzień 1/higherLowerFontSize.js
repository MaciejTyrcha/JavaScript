//Variables
const higherButton = document.querySelector(".higher");
const smallerButton = document.querySelector(".smaller");
let fontSize = document.querySelector("p");


let fontSizePixels = 20;

//Functions
function makeFontBigger() {
    fontSizePixels++;
    fontSize.style.fontSize = fontSizePixels + "px";
}

function makeFontSmaller() {
    fontSizePixels--;
    fontSize.style.fontSize = fontSizePixels + "px";
}

//Events
higherButton.addEventListener("click", makeFontBigger);
smallerButton.addEventListener("click", makeFontSmaller);