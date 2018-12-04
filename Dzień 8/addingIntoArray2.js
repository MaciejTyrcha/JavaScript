const options = [];

const addButton = document.querySelector(".add");
const removeButton = document.querySelector(".clean");
const showAdviceButton = document.querySelector(".showAdvice");
const showAllAdvicesButton = document.querySelector(".showOptions");
const input = document.querySelector("input");
const h1 = document.querySelector("h1");

const addOption = (e) => {
    e.preventDefault();
    const newAdvice = input.value;
    if (input.value.length) {
        options.push(newAdvice);
    }
    input.value = "";
}

const cleanList = (e) => {
    e.preventDefault();
    options.length = 0;
}

const showOption = () => {
    const randOption = Math.floor(Math.random() * options.length);
    h1.textContent = `${options[randOption]}`;
}

const showAllOptions = () => {
    for (option of options) {
        h1.textContent = `${options}`;
    }
}

addButton.addEventListener("click", addOption);
removeButton.addEventListener("click", cleanList);
showAdviceButton.addEventListener("click", showOption);
showAllAdvicesButton.addEventListener("click", showAllOptions);