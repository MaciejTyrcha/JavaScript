const createDiv = document.createElement('div');
document.body.style.height = "10000px";

let size = 10;
let grow = true;

createDiv.style.position = "fixed";
createDiv.style.left = 0;
createDiv.style.top = 0;
createDiv.style.width = "100%";
createDiv.style.backgroundColor = "green"
createDiv.style.height = size + "px";

document.body.appendChild(createDiv);

function changeHeight() {
    createDiv.style.height = size + "px";

    if (grow) {
        createDiv.style.backgroundColor = "green";
        size += 10;
    } else {
        createDiv.style.backgroundColor = "red";
        size -= 10;
    }

    if (size >= window.innerHeight / 2) {
        grow = false;
    } else if (size == 10) {
        grow = true;
    }
}

window.addEventListener("scroll", changeHeight);