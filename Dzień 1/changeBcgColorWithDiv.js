//Variables
// const orangeDiv = document.querySelector(".orange");
// const greenDiv = document.querySelector(".green");
// const blueDiv = document.querySelector(".blue");
// const yellowDiv = document.querySelector(".yellow");
// const redDiv = document.querySelector(".red");
// let bodyColor = document.querySelector("body");

//1 variable
const items = document.querySelectorAll('div');

//Functions
function changeColorToOrange() {
    bodyColor.className = "";
    bodyColor.classList.add("orange");
}

function changeColorToGreen() {
    bodyColor.className = "";
    bodyColor.classList.add("green");
}

function changeColorToBlue() {
    bodyColor.className = "";
    bodyColor.classList.add("blue");

}

function changeColorToYellow() {
    bodyColor.className = "";
    bodyColor.classList.add("yellow");
}

function changeColorToRed() {
    bodyColor.className = "";
    bodyColor.classList.add("red");
}
//1 function
function changeColor() {
    document.body.className = this.className;
}

//Events
// orangeDiv.addEventListener("click", changeColorToOrange);
// greenDiv.addEventListener("click", changeColorToGreen);
// blueDiv.addEventListener("click", changeColorToBlue);
// yellowDiv.addEventListener("click", changeColorToYellow);
// redDiv.addEventListener("click", changeColorToRed);

//1 Event
items.forEach(function (item) {
    item.addEventListener("click", changeColor);
});