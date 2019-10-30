$(document).ready(function () {
    "use strict";
        $(window).scroll(function() {
        if ($(this).scrollTop() > 0) {
            $('.btn_top').fadeIn(300);
        } else {
            $('.btn_top').fadeOut(300);
        }

        var h_head = $('.head_ct').outerHeight();
        if ($(this).scrollTop() > 200) {
            $('.head_ct').addClass('fixed')
            $('.head_top').css({'margin-bottom': h_head + 'px'});

        } else {
            $('.head_ct').removeClass('fixed')
            $('.head_top').css({'margin-bottom': 0});
        }

        if ($(this).scrollTop() > 300) {
            $('.head_ct').addClass('active')
        } else {
            $('.head_ct').removeClass('active')
        }
    });

    $('.btn_top').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
    });

    $('.search_btn').click(function(){
        $('.search_form, body').addClass('active');
    });

    $('.close_search').click(function(){
        $('.search_form, body').removeClass('active');
    });

    $('.h_cart').click(function(){
        $('.cart_form, body').addClass('active');
    });

    $('.close_cart').click(function(){
        $('.cart_form, body').removeClass('active');
    });

});


