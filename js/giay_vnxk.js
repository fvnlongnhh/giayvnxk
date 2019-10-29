$(document).ready(function () {
    "use strict";
        $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.btn_top').fadeIn(300);
        } else {
            $('.btn_top').fadeOut(300);
        }
    });

    $('.btn_top').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });

    $('.slide ul').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse : false,
        margin: 0,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000
    });

    $('.vnxk_box01_r ul').slick({
        dots: false,
        arrows: true,
        slidesToShow: 1,
        speed: 500,
        pauseOnHover: false,
        pauseOnFocuse : false,
        margin: 0,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 4000
    });
});


