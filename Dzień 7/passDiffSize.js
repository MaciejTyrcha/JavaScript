const input = document.querySelector("input");
const div = document.querySelector('div');

const passwords = ["jedEN", "DwA"];
const messages = ["super", "działa"];

const passwordsToLowerCase = passwords.map(pass => pass.toLowerCase());

const showMessage = (e) => {
    div.textContent = "";
    const text = e.target.value.toLowerCase();

    //For with map
    for (let i = 0; i < passwordsToLowerCase.length; i++) {
        if (text == passwordsToLowerCase[i]) {
            div.innerHTML = messages[i];
        }
    }

    //ForEach
    // const text = e.target.value;
    // passwords.forEach((pass, i) => {
    //     if (pass.toLowerCase() == text.toLowerCase()) {
    //         div.textContent = messages[i];
    //     }
    // })
}

input.addEventListener("input", showMessage);

input.addEventListener("focus", (e) => {
    e.target.classList.add('active');
});

input.addEventListener("blur", (e) => {
    e.target.classList.remove('active');
});