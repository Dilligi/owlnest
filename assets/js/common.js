$(document).ready(function() {

    $('.menu-btn').click(function() {
        $(this).toggleClass('active');
        $('.header_nav').fadeToggle(300);
        $('header').toggleClass('menu_active');

    });

    $('.modal_form-open, .callback .modal_form-cross_btn').click(function() {

        $('.callback').toggleClass('active');

    });

    $('.open_plan, .bussiness_plan .modal_form-cross_btn').click(function() {

        $('.bussiness_plan').toggleClass('active');

    });

    $('.experiences-slider').slick({
        arrows: false,
        dots: true,
    });

    $('.waiting-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 4000,
    });

    $('.project-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 10000,
    });

    $('.director-slider').slick({
        arrows: false,
        dots: true,
        autoplay: true,
        autoplaySpeed: 8000,
    });

    $('.invest-slider-item').each(function() {
        let it = '<li>' + $(this).find('.invest-slider-item-subtitle').html() + '</li>';
        $('.invest-item_titles').append(it);
    });

    $('.invest-slider').slick({
        arrows: false,
        dots: true,
        appendDots: $('.invest-content .dots'),
        customPaging: function(slider, i) {
            var title = $(slider.$slides[i]).find('.invest-slider-item-subtitle').html();
            return title; 
        },
        fade: true,

        responsive: [
            {
                breakpoint: 1279,
                settings: {
                    fade: false,
                    asNavFor:$('.invest .invest-item_titles'),
                    arrows: true,
                    prevArrow: $('.invest-slider-arrows .prev'),
                    nextArrow: $('.invest-slider-arrows .next'),
                }
            }
        ]
    });

    if (window.screen.width < 1280) {
        $('.invest-item_titles').slick({
            arrows: false,
            dots: false,
            asNavFor: $('.invest-slider'),
            centerMode: true,
        });
    }

    if(window.screen.width >= 1280) {
        $('.art video').height($('.art .section-wrapper').height());
    }

    if (window.screen.width > 1450) {
        $('.events-block-img, .events-main_block-img').css({
            right: (-1) * (window.screen.width - 1400) / 2,
            width: window.screen.width / 2,
            //height: $('.events').height(),
        })
    }

    if (window.screen.width >= 1280) {
        $('.events-block h3').click(function() {
            if (!($(this).parent().hasClass('active')))
            {
                $('.events-block h3').each(function() {
                    $(this).parent().removeClass('active');
                    $(this).siblings('.events-block-body').slideUp(300);
                    $(this).siblings('.events-block-img').fadeOut(300);
                    $('.events-main_block').fadeOut(300);
                });
                $(this).parent().toggleClass('active');
                $(this).siblings('.events-block-body').slideDown(300);
                $(this).siblings('.events-block-img').css({
                    //height: $('.events').height() + $(this).siblings('.events-block-body').height(),
                });
                $(this).siblings('.events-block-img').fadeIn(300);
            }
            else {
                $(this).parent().toggleClass('active');
                $(this).siblings('.events-block-body').slideUp(300);
                $(this).siblings('.events-block-img').fadeOut(300);
                $('.events-main_block').fadeIn(300);
            }
        });
    }
    else {
        $('.events-content').slick({
            arrows: false,
            dots: true,
        });
    }

    $('.faq-block-header').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('.faq-block-body').slideToggle(300);
    });

    $('.roadmap-block-title').click(function() {
        $(this).toggleClass('active');
        $(this).siblings('.roadmap-block-text').slideToggle(300);
    });

    if (window.screen.width >= 1280) {
        $('.life-menu').turn({
            width: '75%',
            height: 800,
        });
    }

    else {
        $('.life-menu').turn({
            width: '100%',
            height: 600,
            display: 'single',
        });
    }

    $('.open_menu, .life-menu .page-wrapper:first-of-type, .life-menu-arrow.next').click(function() {
        $('.life-menu').turn('next');
        $('.life-menu').addClass('opened');
        $('.life').addClass('menu_active');
    });

    $('.close_menu').click(function() {
        $('.life-menu').turn('page', 1);
        $('.life-menu').removeClass('opened');
        $('.life').removeClass('menu_active');
        $('.life-menu-arrow').removeClass('disabled');
    });

    $(".life-menu-arrow.prev").click(function() {
        $('.life-menu').turn('previous');
        if ( $('.life-menu').turn('page') == 1)
        {
            $(this).addClass('disabled');
            $('.life-menu').removeClass('opened');
        }
        else {
                $(this).removeClass('disabled');
                $('.life-menu-arrow.next').removeClass('disabled');
                $('.life-menu').addClass('opened');
        }
    });

    $(".life-menu-arrow.next").click(function() {
        $('.life-menu').turn('next');
        if ( $('.life-menu').turn('page') == $('.life-menu').turn('pages'))
        {
            $(this).addClass('disabled');
            $('.life-menu').removeClass('opened');
        }
        else {
                $(this).removeClass('disabled');
                $('.life-menu-arrow.prev').removeClass('disabled');
                $('.life-menu').addClass('opened');
        }
    });

    $(".header_nav a, .footer-menu a").click(function() {
        $("html, body").animate({
           scrollTop: $($(this).attr("href")).offset().top + "px"
        }, {
           duration: 500,
           easing: "swing"
        });
        return false;
     });

     $(window).scroll(function() {
        var scroll = $(window).scrollTop();

        if (scroll > 0)
            $('header').addClass('scroll');
        else $('header').removeClass('scroll');
     });

     var timeToPlay = 0;
    var video = document.querySelector('#art-video');
    
    video.onplay = (el) => {
        el.srcElement.currentTime = timeToPlay;
        el.srcElement.play();
    }

    $(video).click(function() {
        $(this).parent().addClass('active');
        video.setAttribute('controls', 'controls');
        $('body').addClass('_lock');
    });
    
    $('.art-img-cross_btn').click(function() {
        $(video).parent().removeClass('active');
        $(video).removeAttr('controls');
        $('body').removeClass('_lock');
    });

    if (window.screen.width < 1280) {
        $('.professionals-content').slick({
            arrows: false,
            dots: true,
        });
    
    }
    
    /*---------------Form validation-------------*/

    const form = $('form');

    form.submit(formSend);

    async function formSend(e) {
        e.preventDefault();

        let error = formValidate($(this));

        if (error == 0) {
            let formData = new FormData(this);
            let response = await fetch('assets/php/sendmail.php', {
                method: 'POST',
                body: formData
            });
            if (response.ok) {
                this.reset();
            }
        }
        else {
            //$(this).children('.form_error').html('Fields filled out incorrectly');
        }
    }

    function formValidate(form) {
        let error = 0;
        $(form).children('.__req').each(function() {
            let input = $(this);
            formRemoveError(input);

            if (input.attr('type') === 'email') {
                if (!isEmailValid(input)) {
                    formAddError(input);
                    error++;
                    input.shake();
                }
            }
            else if (input.val() === '') {
                formAddError(input);
                error++;
                input.shake();
            }
        });
        return error;
    }

    function formAddError(input) {
        input.addClass('_error');
        $(input).next('p.form_error').remove();
        $(input).after('<p class="form_error">This field is required</p>')
        /*$(input).attr('placeholder', 'This field is required');
        $(input).focus(function() {
            if ($(this).attr('name')=='email') {
                $(this).attr('placeholder', 'Your E-mail');
            }
            else if ($(this).attr('name')=='phone') {
                $(this).attr('placeholder', 'Your Phone');
            }
            else if ($(this).attr('name')=='name') {
                $(this).attr('placeholder', 'Your Full Name');
            }
        });*/
    }

    function formRemoveError(input) {
        input.removeClass('_error');
    }

    const EMAIL_REGEXP = /^(([^<>()[\].,;:\s@"]+(\.[^<>()[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/iu;

    function isEmailValid(input) {
        return EMAIL_REGEXP.test(input.val());
    }

    jQuery.fn.shake = function (interval, distance, times) {
        interval = typeof interval == "undefined" ? 100 : interval;
        distance = typeof distance == "undefined" ? 10 : distance;
        times = typeof times == "undefined" ? 4 : times;
        var jTarget = $(this);
        jTarget.css('position', 'relative');
        for (var iter = 0; iter < (times + 1) ; iter++) {
            jTarget.animate({left: ((iter % 2 == 0 ? distance * Math.random() : distance * Math.random() * -1))}, interval);
        }
        return jTarget.animate({left: 0 }, interval);
    }
});