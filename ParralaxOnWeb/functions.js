$(window).scroll(function () {

    let windowScroll = $(this).scrollTop();
    // console.log(this);
    // console.log("Scrolling");
    // console.log(windowScroll);

    $('.logo').css({
        "transform": `translate(0%, ${windowScroll / 2 }%)`,
    });

    $('.back-bird').css({
        "transform": `translate(0%, ${windowScroll / 4 }%)`,
    })

    $('.fore-bird').css({
        "transform": `translate(0%, -${windowScroll / 40 }%)`,
    })

    //Landing elements
    if (windowScroll > $('.clothes-pics').offset().top - $(window).height() / 1.2) {
        console.log("hi");

        $('.figure').each(function (i) {
            setTimeout(function () {
                $('.figure').eq(i).addClass('is-showing');
            }, 150 * (i + 1));

        });
    }
});