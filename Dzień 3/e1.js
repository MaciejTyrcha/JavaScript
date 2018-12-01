// // // Kliknięcie w przycisk jQuery
// // $('.article button').on('click', function () {
// //     $('.modal-wrap').addClass('active');
// //     $('.article').addClass('blur');
// // })

// // //Wyłączenie jQuery
// // $('span.hide').on('click', function () {
// //     $('.modal-wrap').removeClass('active');
// //     $('.article').removeClass('blur');
// // })

// // 1 funkcja jQuery
// $('.article button, span.hide').on('click', function () {
//     $('.modal-wrap').toggleClass('active');
//     $('.article').toggleClass('blur');
// })

//JS

const btnModal = document.querySelector('.article button');

btnModal.addEventListener("click", function () {
    document.querySelector('.modal-wrap').classList.add('active');
    document.querySelector('.article').classList.add('blur');
});

document.querySelector('span.hide').addEventListener("click", function () {
    document.querySelector('.modal-wrap').classList.remove('active');
    document.querySelector('.article').classList.remove('blur');
});