const button1 = document.querySelector("button");
const list = document.querySelector('ul');
let number = 1;

function addingList() {
    const addListElement = document.createElement('li');
    addListElement.textContent = number;
    list.appendChild(addListElement);

    if (number % 3 == 0) {
        addListElement.classList.add("big");
    }
    number += 2;
}


button1.addEventListener("click", addingList);