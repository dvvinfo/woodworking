$(function() {

    $('.slider').slick({
        dots: false,
        infinite: true,
        speed: 1200,
        slidesToShow: 1,
        adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: '<button type="button" class="slick-prev"><img src="./img/arrovleft.svg" alt="стрелка"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="./img/arrovright.svg" alt="стрелка"></button>',
        responsive: [
            {
                breakpoint: 768,
                settings: {
                    arrows: false,
                    dots: true
                }
            }
        ]

})

});
