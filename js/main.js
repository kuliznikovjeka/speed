$('.header-menu').click(function() {
    $('.header-nav').css({ 'right': '0' })
});

$('.header-nav__close, .header-nav a').click(function() {
    $('.header-nav').css({ 'right': '-100%' })
});

let servicesSlider = $('.services-slider');
servicesSlider.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    margin: 15
});


$('.services-slider__next').click(function() {
    servicesSlider.trigger('next.owl.carousel');
})
$('.services-slider__prev').click(function() {
    servicesSlider.trigger('prev.owl.carousel');
})


$('.services-btn').click(function() {
    $('.services-btn').removeClass('services-btn__active');
    $(this).addClass('services-btn__active');
    let block = $(this).attr('btn-data');
    $('.services-block').hide();

    $('.' + block).css({ 'display': 'flex' })
});


let videoSlider = $('.review-video__slider');
videoSlider.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    margin: 15
});
$('.video-arrow__next').click(function() {
    videoSlider.trigger('next.owl.carousel');
})
$('.video-arrow__prev').click(function() {
    videoSlider.trigger('prev.owl.carousel');
})


let thanksSlider = $('.review-thanks__slider');
thanksSlider.owlCarousel({
    items: 1,
    loop: true,
    dots: true,
    margin: 15
});
$('.thanks-arrow__next').click(function() {
    thanksSlider.trigger('next.owl.carousel');
})
$('.thanks-arrow__prev').click(function() {
    thanksSlider.trigger('prev.owl.carousel');
})

let aboutSlider = $('.about-slider');
aboutSlider.owlCarousel({
    items: 2,
    loop: true,
    dots: true,
    margin: 52,
    responsive: {
        0: {
            items: 1
        },
        768: {
            items: 2
        },
    }
});
$('.about-arrow__next').click(function() {
    aboutSlider.trigger('next.owl.carousel');
})
$('.about-arrow__prev').click(function() {
    aboutSlider.trigger('prev.owl.carousel');
})

$('.phone').mask('+7(999)999-99-99')

$('.review-thanks__right').click(function() {
    $('.fancybox__image').css({ 'border-radius': '15px' })
    console.log('123')
});

Modernizr.on('webp', function(result) {
    if (result) {
        $('.main-wrap').addClass('webp')
    } else {
        $('.main-wrap').addClass('no-webp')
    }
});


$('.popup-open').click(function() {
    $('.popup-form').css({ 'display': 'flex' })
});

$('.policy').click(function() {
    $('.popup-policy').css({ 'display': 'flex' })
});

$('.popup-close, .popup-bg').click(function() {
    $('.popup').hide();
});

$('.review-video__btn').click(function() {
    $(this).siblings('.review-popup').css({ 'display': 'flex' });
});

$('.review-video__btn').click(function() {
    let video = $(this).attr('data-video');
    console.log(video)
    $('.' + video).css({ 'display': 'flex' })
});



$(document).mouseleave(function() {
    if (event.clientY < 0 || event.clientY < 3) {
        
        let leave = 1;
        if(+$.cookie('leave-master')){
            leave = 0;
        }
        if (leave) {
            console.log('true')
            $('.popup-leave').css('display', 'flex');
            $.cookie('leave-master', 1, { expires: 7 });
        }
        
    }
});

new WOW().init();