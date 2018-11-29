const button = document.querySelector('button');
const p = document.querySelector('p');

// button.addEventListener('click', function () {
//     console.log("click!");
// });

// button.addEventListener('mouseover', function () {
//     console.log("Najechanie");
// });

// button.addEventListener('mousemove', function () {
//     console.log("Ruch myszką");
// });

p.addEventListener('click', function () {
    alert("Kliknąłeś!");
});

let clickCount = 0;

button.addEventListener('click', function () {
    clickCount++;
    console.log("Numer kliknięcia: " + clickCount);
});