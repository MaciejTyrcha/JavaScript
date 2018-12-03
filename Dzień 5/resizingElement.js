const button = document.querySelector("button");
const listElements = document.querySelectorAll("li");

let size = 10;

//For
button.addEventListener("click", function () {
    for (let i = 0; i < listElements.length; i++) {
        listElements[i].style.display = "block";
        listElements[i].style.fontSize = `${size}px`;
    }
    size++;
})

//ForEach
// button.addEventListener("click", function () {
//     listElements.forEach((li) => {
//         li.style.display = "block";
//         li.style.fontSize = `${size}px`;
//     })
//     size++;
// })