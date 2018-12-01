$(document).on('scroll', function () {

    const windowHeight = $(window).height();
    const scrollHeight = $(this).scrollTop();

    //First section
    //art2
    const $artTwo = $('.art2');
    const artTwoFromTop = $artTwo.offset().top;
    const artTwoHeight = $artTwo.outerHeight()

    //art3
    const $artThree = $('.art3');
    const artThreeFromTop = $artThree.offset().top;
    const artThreeHeight = $artThree.outerHeight()

    //art4
    const $artFour = $('.art4');
    const artFourFromTop = $artFour.offset().top;
    const artFourHeight = $artFour.outerHeight()

    if (scrollHeight > artTwoFromTop + artTwoHeight - windowHeight) {
        $artTwo.addClass('active');
    }

    if (scrollHeight > artThreeFromTop + artThreeHeight - windowHeight) {
        $artThree.addClass('active');
    }

    if (scrollHeight > artFourFromTop + artFourHeight - windowHeight) {
        $artFour.addClass('active');
    }

    //Second section
    //op1
    const $opOne = $('.op1');
    const opOneHeight = $opOne.height();
    const opOneFromTop = $opOne.offset().top;

    //op2
    const $opTwo = $('.op2');
    const opTwoFromTop = $opTwo.offset().top;
    const opTwoHeight = $opTwo.height();

    if (scrollHeight > opOneFromTop + opOneHeight / 10 - windowHeight) {
        $opOne.addClass('active');
    }

    if (scrollHeight > opTwoFromTop + opTwoHeight / 10 - windowHeight) {
        $opTwo.addClass('active');
    }

    //Cleaner
    if (scrollHeight < 100) {
        $('article').removeClass('active');

    }
})