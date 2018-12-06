const buttonStart = document.querySelector("button.main");
const buttonStop = document.querySelector("button.reset");
const stoper = document.querySelector("div.time div");

const date = new Date();

setInterval(() => {
    const currentDate = new Date().getTime();
    let numOfDays = currentDate;
    // console.log(currentDate);
    console.log(numOfDays);

    stoper.textContent = currentDate;


}, 1000);