const user = (name = "", age) => {
    let userName = name;
    let userAge = age;

    function showName() {
        console.log(`Cześć ${userName}, ${userAge >= 18? "możesz kupić piwo" : "nie możesz kupić piwa" }`);
    }

    return showName
}

const mieszko = user("Mieszko", 18);
const jagienka = user("Jagienka", 16);
mieszko();
jagienka();

const timer = () => {
    let number = 0;
    document.body.textContent = `${number} sekund`;
    return () => {
        number++;
        document.body.textContent = `${number} sekund`;
    }
}
const timeCounter = timer();

setInterval(timeCounter, 1000);