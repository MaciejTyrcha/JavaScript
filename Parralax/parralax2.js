//html setup

let pupilsHtmlCollection = document.getElementsByClassName('pupil');
let pupilsArray = Array.from(pupilsHtmlCollection);
console.log(pupilsArray);
//Input setup
let input = {
    mouseX: {
        start: 0,
        end: window.innerWidth,
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

//Output setup
let output = {
    x: {
        start: -200,
        end: 200,
        current: 0,
    },
    y: {
        start: -150,
        end: 150,
        current: 0,
    },
};

output.x.range = output.x.end - output.x.start;
output.y.range = output.y.end - output.y.start;

const handleMouseMove = function (event) {
    //X input
    input.mouseX.current = event.clientX;
    input.mouseX.fraction = (input.mouseX.current - input.mouseX.start) / input.mouseX.range;
    // console.log('event.clientX', event.clientX);

    //Y input
    input.mouseY.current = event.clientY;
    input.mouseY.fraction = (input.mouseY.current - input.mouseY.start) / input.mouseY.range;

    //X output
    output.x.current = output.x.start + (input.mouseX.fraction * output.x.range);
    output.x.opposite = output.x.end - (input.mouseX.fraction * output.x.range);

    //Y output
    output.y.current = output.y.start + (input.mouseY.fraction * output.y.range);
    output.y.opposite = output.y.end - (input.mouseY.fraction * output.y.range);

    //apply output to html
    pupilsArray.forEach(function (pupil, i) {

        if (i === 0) {
            pupil.style.transform = `translate(${output.x.opposite}px, ${output.y.opposite}px)`;
        } else {
            pupil.style.transform = `translate(${output.x.current}px, ${output.y.current}px)`;
        }

        // pupil.style.transform = `translate(${output.x.current}px, ${output.y.current}px)`;
    })


    //In case of margin divs to the left and eight of screen. Start and innerhtml change
    // if (input.mouseX.fraction > 1) {
    //     input.mouseX.fraction = 1;
    // } else if (input.mouseX.fraction < 0) {
    //     input.mouseX.fraction = 0;
    // }

    console.log('fraction', `x:${input.mouseX.fraction}`, `y:${input.mouseY.fraction}`);
};

const handleResize = function () {
    //X
    input.mouseX.end = window.innerWidth;
    input.mouseX.range = input.mouseX.end - input.mouseX.start;
    //Y
    input.mouseY.end = window.innerHeight;
    input.mouseY.range = input.mouseY.end - input.mouseY.start;
}

window.addEventListener("mousemove", handleMouseMove);
window.addEventListener("resize", handleResize);