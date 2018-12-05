// let number = 0;

// const add = () => {
//     number++;
//     document.body.textContent = `aktualny stan licznika to ${number}`
// }
// console.log(number);
// window.addEventListener("click", add);

//Domknięcia
const add = () => {
    let number = 0;
    return () => {
        number++;
        document.body.textContent = `aktualny stan licznika to ${number}`
    }
}


const counter = add();
window.addEventListener("click", counter);