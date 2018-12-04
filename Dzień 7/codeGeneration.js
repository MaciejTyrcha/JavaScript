const chars = 'ABCDEFGHIJK0123456789';

const button = document.querySelector("button");
const section = document.querySelector("section");

const ileWierszy = 1000;
const ileZnakow = 10;


const codeGenerator = () => {

    for (let i = 0; i < ileWierszy; i++) {
        let code = "";
        for (let j = 0; j < ileZnakow; j++) {
            const index = Math.floor(Math.random() * chars.length);
            code += chars[index];
        }
        const div = document.createElement('div');
        div.textContent = code;
        section.appendChild(div);
    }
}

button.addEventListener("click", codeGenerator);