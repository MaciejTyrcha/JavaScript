const input = document.getElementById("pass");
const div = document.querySelector(".message");

const passwords = ["user", "u$er"];
const messages = ["Dobre hasło!", "Dobre ha$ło!"];

input.addEventListener('input', (e) => {

    const text = e.target.value;
    div.textContent = '';

    passwords.forEach((pass, index) => {
        if (pass == text) {
            div.textContent = messages[index];
            e.target.value = "";
        }
    })
    // console.log(e.target.value);
    // if (password == e.target.value) {
    //     div.textContent = message;
    //     e.target.value = "";
    // } else {
    //     div.textContent = "";
    // }
})

input.addEventListener("focus", (e) => {
    e.target.classList.add('active');
})

input.addEventListener("blur", (e) => {
    e.target.classList.remove('active');
})