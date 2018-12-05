const gameSummary = {
    numbers: 0,
    wins: 0,
    losses: 0,
    draws: 0,
}

const game = {
    playerHand: "",
    computerHand: "",
}

const handImages = [...document.querySelectorAll('.select img')]; // zamiana na Array z NodeListy. Array ma więcej metod

//Wybór opcji. Żółta obwódka
function handSelection() {
    game.playerHand = this.dataset.option;
    handImages.forEach(hand => hand.style.boxShadow = '');
    this.style.boxShadow = '0 0 0 4px yellow';
}

// const handSelection = (e) => {
//     => nie tworzy thisa więc:
//     console.log(e.target);
// }

//Wybór komputera
function computerChoice() {
    const aiHand = handImages[Math.floor(Math.random() * 3)].dataset.option;

    return aiHand;
}

//Sprawdzenie wyniku
function checkResult(player, ai) {
    if (player === ai) {
        return 'draw';
    } else if ((player === "papier") && (ai === "kamień") || (player === "kamień") && (ai === "nożyczki") || (player === "nożyczki") && (ai === "papier")) {
        return 'win';
    } else {
        return 'loss';
    }
}

//Publikacja wyniku
function publishResult(player, ai, result) {
    document.querySelector('[data-summary="your-choice"]').textContent = player;

    document.querySelector('[data-summary="ai-choice"]').textContent = ai;

    document.querySelector('p.numbers span').textContent = ++gameSummary.numbers;

    if (result === 'win') {
        document.querySelector('p.wins span').textContent = ++gameSummary.wins;
        document.querySelector('[data-summary="who-win"]').textContent = "Ty wygrałeś";
        document.querySelector('[data-summary="who-win"]').style.color = "green";
    } else if (result === 'loss') {
        document.querySelector('p.losses span').textContent = ++gameSummary.losses;
        document.querySelector('[data-summary="who-win"]').textContent = "Wygrał komputer";
        document.querySelector('[data-summary="who-win"]').style.color = "red";
    } else {
        document.querySelector('p.draws span').textContent = ++gameSummary.draws;
        document.querySelector('[data-summary="who-win"]').textContent = "Remis!";
        document.querySelector('[data-summary="who-win"]').style.color = "black";
    }
}

//Koniec rozgrywki
function endGame() {
    document.querySelector(`[data-option=${game.playerHand}]`).style.boxShadow = "";
    game.playerHand = "";
}

//Start rozgrywki
function startGame() {
    if (!game.playerHand) {
        return alert("Wybierz dłoń");
    }

    game.computerHand = computerChoice();

    const gameResult = checkResult(game.playerHand, game.computerHand);
    publishResult(game.playerHand, game.computerHand, gameResult);

    endGame();
}

handImages.forEach(hand => hand.addEventListener("click", handSelection));

const button = document.querySelector('.start');
button.addEventListener("click", startGame);