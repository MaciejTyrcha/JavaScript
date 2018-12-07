const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h1 span');
const itemList = document.getElementsByClassName('task');
const input = document.querySelector('input');

const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = itemList.length;
}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = input.value;
    console.log(titleTask);

    if (titleTask === "") {
        return;
    }
    const newLiElements = document.createElement('li');
    newLiElements.className = "task";
    newLiElements.innerHTML = titleTask + "<button>usuń</button";
    ul.appendChild(newLiElements);
    input.value = "";

    // const liItems = document.querySelectorAll('li.task').length;
    taskNumber.textContent = itemList.length;
    newLiElements.querySelector('button').addEventListener('click', removeTask);
}


form.addEventListener('submit', addTask);