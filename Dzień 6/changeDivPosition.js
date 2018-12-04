const div = document.querySelector('div');
let divX = 150;
let divY = 50;

div.style.left = `${divX}px`;
div.style.top = `${divY}px`;

let moveActive = false;

let insertDivX;
let insertDivY;

div.addEventListener('mousedown', (e) => {
    div.style.backgroundColor = 'blue';
    moveActive = true;

    insertDivX = e.offsetX;
    insertDivY = e.offsetY;
});

div.addEventListener("mousemove", (e) => {
    if (moveActive) {
        divX = e.clientX - insertDivX;
        divY = e.clientY - insertDivY;

        div.style.left = `${divX}px`;
        div.style.top = `${divY}px`;
    }
});

div.addEventListener("mouseup", () => {
    div.style.backgroundColor = "black";
    moveActive = false;
});