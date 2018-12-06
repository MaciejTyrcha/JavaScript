const endTime = new Date('2019-12-05 19:03:00').getTime();

const spanDays = document.querySelector('span.d');
const spanHours = document.querySelector('span.h');
const spanMinutes = document.querySelector('span.m');
const spanSeconds = document.querySelector('span.s');



setInterval(() => {
    const currentTime = new Date().getTime();
    // const time = Math.floor((endTime - currentTime) / 1000);

    const time = endTime - currentTime;
    let days = Math.floor((time) / (1000 * 60 * 60 * 24));
    days = days < 10 ? `0${days}` : `${days}`;
    let hours = Math.floor((time) / (1000 * 60 * 60) % 24);
    hours = hours < 10 ? `0${hours}` : `${hours}`;
    let minutes = Math.floor((time) / (1000 * 60) % 60);
    minutes = minutes < 10 ? `0${minutes}` : `${minutes}`;
    let seconds = Math.floor(((time) / 1000) % 60);
    seconds = seconds < 10 ? `0${seconds}` : `${seconds}`;

    spanDays.textContent = days;
    spanHours.textContent = hours;
    spanMinutes.textContent = minutes;
    spanSeconds.textContent = seconds;

}, 1000);