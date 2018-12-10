//Input setup
let input = {
    mouseX: {
        start: 100, // Szerokości divów
        end: window.innerWidth - 200, // Szerokości divów
        current: 0,
    },
    mouseY: {
        start: 0,
        end: window.innerHeight,
        current: 0,
    }
};

input.mouseX.range = input.mouseX.end - input.mouseX.start;
input.mouseY.range = input.mouseY.end - input.mouseY.start;

const handleMouseMove = function (event) {
    //X input
    input.mouseX.current = event.clientX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
    // console.log('event.clientX', event.clientX);

    //Y input
    input.mouseY.current = event.clientY;
    input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;

    // In case of margin divs to the left and eight of screen. Start and innerhtml change
    if (input.mouseX.fraction > 1) {
        input.mouseX.fraction = 1;
    } else if (input.mouseX.fraction < 0) {
        input.mouseX.fraction = 0;
    }

    console.log('fraction', `x:${input.mouseX.fraction}`, `y:${input.mouseY.fraction}`);
};

const handleResize = function () {
    //X
    input.mouseX.end = window.innerWidth - 200;
    input.mouseX.range = input.mouseX.end - input.mouseX.start;
    //Y
    input.mouseY.end = window.innerHeight;
    input.mouseY.range = input.mouseY.end - input.mouseY.start;
}

window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("resize", handleResize);