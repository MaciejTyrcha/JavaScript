const names = [22, 21];

const button = document.querySelector('button');
const div = document.querySelector('div');


const addName = (e) => {
    e.preventDefault();
    const input = document.querySelector('input');
    const newName = input.value;
    if (input.value.length) {
        for (name of names) {
            if (name === newName) {
                alert("Wpisz inną wartość");
                return;
            }
        }
        names.push(newName);
        div.textContent += newName + ", ";
        input.value = "";
    }
}

button.addEventListener("click", addName);