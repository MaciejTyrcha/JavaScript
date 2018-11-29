//Variables
let firstDiv = document.querySelector(".s1");
let secondDiv = document.querySelector(".s2");


//Functions
function changeBgColor() {
    firstDiv.classList.toggle("red");
    secondDiv.classList.toggle("red");
}

function changeBgColorUsingThis() {
    this.classList.toggle("red");
}

//Events
// firstDiv.addEventListener("click", changeBgColor);
// secondDiv.addEventListener("click", changeBgColor);

firstDiv.addEventListener("click", changeBgColorUsingThis);
secondDiv.addEventListener("click", changeBgColorUsingThis);