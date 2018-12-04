let red = 100;
let green = 100;
let blue = 100;

document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;


const changeColor = (e) => {
    console.log(e.keyCode, e.which);
    document.body.style.backgroundColor = `rgb(${red}, ${green}, ${blue})`;

    // //if
    // //Arrow up
    // if ((e.keyCode == 38) && (red <= 255)) {
    //     red += 5;
    //     green += 5;
    //     blue += 5;
    // }
    // //Arrow down
    // else if ((e.keyCode == 40) && (red >= 0)) {
    //     red -= 5;
    //     green -= 5;
    //     blue -= 5;
    // }

    //switch
    switch (e.keyCode) {
        case 38:
            document.body.style.backgroundColor = `rgb(${red <= 255 ? red +=5 : red}, ${green <= 255 ? green +=5 : green}, ${blue <= 255 ? blue +=5 : blue})`;
            break;
        case 40:
            document.body.style.backgroundColor = `rgb(${red >= 0 ? red -=5 : red}, ${green >= 0 ? green -=5 : green}, ${blue >= 0 ? blue -=5 : blue})`;
            break;
    }
}

window.addEventListener("keydown", changeColor);