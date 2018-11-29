//Variables
const buttonJS = document.querySelector('.js');
// const buttonJQ = document.querySelector('.jq');

//Functions
function addDivWithJS() {
    const divItem = document.createElement('div');
    divItem.classList.add("box");
    document.body.appendChild(divItem);
}

//Events
buttonJS.addEventListener("click", addDivWithJS);


//jQuery

$('.jq').on("click", function () {
    $('body').append('<div class="box">')
})