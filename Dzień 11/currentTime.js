const clock = () => {

    const date = new Date();

    let hours = date.getHours() < 10 ? `0${date.getHours()}` : `${date.getHours()}`;
    let minutes = date.getMinutes() < 10 ? `0${date.getMinutes()}` : `${date.getMinutes()}`;
    let seconds = date.getSeconds() < 10 ? `0${date.getSeconds()}` : `${date.getSeconds()}`;

    const span = document.querySelector('.clock span');

    let timer = span.textContent = `${hours}:${minutes}:${seconds}`;
}

setInterval(clock, 1000);