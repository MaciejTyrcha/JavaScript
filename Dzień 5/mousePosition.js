const h1 = document.querySelector("h1");


document.body.addEventListener("mousemove", function (event) {
    const x = event.clientX + 1;
    const y = event.clientY + 1;
    const width = window.innerWidth;
    const height = window.innerHeight;

    // h1.textContent = `${event.clientX}, ${event.clientY}`;

    const red = x / width * 100;
    const green = y / height * 100;
    const blue = (red + green) / 2;

    h1.textContent = x + ", " + y;

    document.body.style.backgroundColor = `rgb(${red}% ,${green}% ,${blue}% )`;

    // document.body.style.backgroundColor = `rgb(${event.clientX/5}, ${event.clientY/5},  ${event.clientX / event.clientY * 20})`;
});