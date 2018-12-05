const spanText = document.querySelector('.text');
const spanCursor = document.querySelector('.cursor');

const txt = ['tekst1', 'tekst2', 'tekst3'];

let activeLetter = -15;
let activeTekst = 0;

const addLetter = () => {

    if (activeLetter >= 0) {
        spanText.textContent += txt[activeTekst][activeLetter];
    }
    activeLetter++;
    if (activeLetter === txt[activeTekst].length) {
        activeTekst++;
        if (activeTekst == txt.length) {
            return;
        }
        return setTimeout(() => {
            activeLetter = -15;
            spanText.textContent = '';
            addLetter();
        }, 2000);
    }
    setTimeout(addLetter, 100);
}

addLetter();

const cursorAnimation = () => {
    spanCursor.classList.toggle("active");
}

setInterval(cursorAnimation, 400);