$(document).on("scroll", function () {
    if ($(this).scrollTop() > 200) {
        $('div.info').addClass('active');
    } else {
        $('div.info').removeClass('active')
    }
    // console.log($(this).scrollTop());
    $('div.info').text("Pozycja scrolla: " + $(this).scrollTop() + " px")
})