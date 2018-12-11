$(window).scroll(function () {

    let windowScroll = $(this).scrollTop();
    // console.log(this);
    // console.log("Scrolling");
    console.log(windowScroll);

    $('.logo').css({
        "transform": `translate(0%, ${windowScroll / 2 }%)`,
    });

    $('.back-bird').css({
        "transform": `translate(0%, ${windowScroll / 4 }%)`,
    })

    $('.fore-bird').css({
        "transform": `translate(0%, -${windowScroll / 40 }%)`,
    })
});