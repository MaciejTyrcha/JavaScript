const butt1 = document.querySelector("button");
let number = 1;

function addSquares() {
    const addDiv = document.createElement('div');
    addDiv.textContent = number;


    if (number % 5 == 0) {
        addDiv.classList.add("circle");
    }
    number++;
    document.body.appendChild(addDiv);
}

butt1.addEventListener("click", addSquares);