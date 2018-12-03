let size = 10;
let orderElement = 1;

const init = () => {
    const addButton = document.createElement("button");
    const addList = document.createElement("ul");
    const removeButton = document.createElement("button");

    addButton.textContent = "Dodaj 10 elementów";
    removeButton.textContent = "Wyczyść listę";

    document.body.appendChild(addButton);
    document.body.appendChild(removeButton);
    document.body.appendChild(addList);

    addButton.addEventListener("click", createLiElements)
    removeButton.addEventListener("click", removeLiElements);
}

const createLiElements = () => {
    const searchUl = document.querySelector("ul");

    for (let i = 0; i < 10; i++) {
        const addLiElements = document.createElement('li');
        searchUl.appendChild(addLiElements);
        addLiElements.textContent = `Element ${orderElement++}`;
        addLiElements.style.fontSize = `${size++}px`;
        // orderElement++;
        // size++;
    }
}

const removeLiElements = () => {
    document.querySelector('ul').textContent = "";
    size = 10;
    orderElement = 1;
}

init();