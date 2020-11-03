$(document).ready(function() {
    $('.offer__content').slick({
        variableWidth: true,
        arrows: false,
    });

    $('.apartments__content').slick({
        variableWidth: true,
        arrows: false,
    });

    $('.offer__item').mouseover(function() {
        $(this).toggleClass('hover');
    });

    $('.offer__item').mouseout(function() {
        $(this).toggleClass('hover');
    });

    $('.js_menu_xa').click(function(event) {
        event.preventDefault();
        th = $(this).html();
        $('.js_menu_xa').each(function(index, el) {
            if ($(this).html()!=th) {
                $(this).removeClass('active');
            }
        });
        $(this).toggleClass('active');
        $('.dropdown-menu_x1').fadeOut(400);
        if ($(this).hasClass('active')) {

            classs = $(this).find('a').attr('href');
            leftPos = parseInt($(this).position().left)+parseInt($('.header__menu').css('paddingLeft'));
            pp = parseInt($(classs).width())+parseInt($(this).offset().left);
            ww = parseInt($(window).width()-20)
            if (pp<ww)
                $(classs).css({left: leftPos+'px',right: 'auto'}).fadeIn(400)
            else
                $(classs).css({left: 'auto',right: '50px'}).fadeIn(400)
            if (ww<=680) $(classs).css('top',$('.js_top_menu_h_hmb').outerHeight()+$('.menu_x').outerHeight()+20+'px');
            if (ww<=500) $(classs).css('top',$('.menu_x').outerHeight()+5+'px');
            if (ww<=680) { $('html, body').animate({ scrollTop: $(classs).offset().top }, 1000)}
        }
    });


    $('.header__burger').click(function(e) {
        $('.header__menu').toggleClass('show');
        $(this).toggleClass('active');
        $('body').toggleClass('no-scroll');
    });


    $('.js_menu_xa a').click(function(e) {
        e.preventDefault();
        $('.dropdown-mob').removeClass('active');
        $(this).parent().children('.dropdown-mob').toggleClass('active');
    });


    $('#overlay').click(function() {
        $(this).css('display', 'none');
        $('.box-modal').arcticmodal('close');

    });

    $(".main-screen__btn").click(function(e) {
        e.preventDefault();
        $(".modal").addClass("show");

        $(".modal .overlay").click(function() {
            $('.modal').removeClass("show");
        })
    });

    $(".phone-mask").mask('(+7)-000-000-00-00');

    $('.toTop').click(function () {
        $('body,html').animate({
            scrollTop: 0
        }, 600);
        return false;
    });
});
