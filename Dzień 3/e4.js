// //jQuery
// $(document).on("scroll", changeText);

// function changeText() {
//     // console.log("Działa");
//     const scrollHeight = $(this).scrollTop();
//     // console.log(scrollHeight);

//     const sectionOneHeight = $('.sekcja1').height();
//     const sectionTwoHeight = $('.sekcja2').height();
//     const sectionThreeHeight = $('.sekcja3').height();
//     const sectionFourHeight = $('.sekcja4').height();

//     const distanceFromTopSectionOne = $('.sekcja1').offset().top;
//     const distanceFromTopSectionTwo = $('.sekcja2').offset().top;
//     const distanceFromTopSectionThree = $('.sekcja3').offset().top;
//     const distanceFromTopSectionFour = $('.sekcja4').offset().top;
//     // console.log(distanceFromTopSectionTwo);

//     if (scrollHeight < sectionOneHeight) {
//         $('div.info').text("Sekcja 1");
//     } else if (scrollHeight < sectionTwoHeight + distanceFromTopSectionTwo) {
//         $('div.info').text("Sekcja 2");
//     } else if (scrollHeight < sectionThreeHeight + distanceFromTopSectionThree) {
//         $('div.info').text("Sekcja 3");
//     } else {
//         $('div.info').text("Sekcja 4");
//     }
// }

//JS

function changeText() {
    const txt = document.querySelector('div.info');
    const scrollHeight = window.scrollY;

    const sectionOneHeight = document.querySelector('.sekcja1').clientHeight;
    const sectionTwoHeight = document.querySelector('.sekcja2').clientHeight;
    const sectionThreeHeight = document.querySelector('.sekcja3').clientHeight;
    const sectionFourHeight = document.querySelector('.sekcja4').clientHeight;

    const distanceFromTopSectionOne = document.querySelector('.sekcja1').offsetTop;
    const distanceFromTopSectionTwo = document.querySelector('.sekcja2').offsetTop;
    const distanceFromTopSectionThree = document.querySelector('.sekcja3').offsetTop;
    const distanceFromTopSectionFour = document.querySelector('.sekcja4').offsetTop;

    if (scrollHeight < sectionOneHeight) {
        txt.textContent = "sekcja 1";
    } else if (scrollHeight < sectionTwoHeight + distanceFromTopSectionTwo) {
        txt.textContent = "sekcja 2";
    } else if (scrollHeight < sectionThreeHeight + distanceFromTopSectionThree) {
        txt.textContent = "sekcja 3";
    } else {
        txt.textContent = "sekcja 4";
    }

}
window.addEventListener("scroll", changeText);