const blackSquare = document.createElement('div');

let size = 10;
let grow = true;

blackSquare.style.width = size + "px";
blackSquare.style.height = size + "px";

document.body.appendChild(blackSquare);

window.addEventListener("scroll", function () {
    blackSquare.style.width = size + "px";
    blackSquare.style.height = size + "px";

    if (grow == true) {
        size += 10;
    } else {
        size -= 10;
    }

    if (size >= 800) {
        grow = false;
    } else if (size == 0) {
        grow = true;
    }
})