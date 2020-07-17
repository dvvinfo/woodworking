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

});
    var GammaSettings = {
        // order is important!
        keyboard : true,
        historyapi : true,
        viewport : [ {
            width : 1200,
            columns : 2
        }, {
            width : 900,
            columns : 2
        }, {
            width : 500,
            columns : 1
        }, {
            width : 320,
            columns : 1
        }, {
            width : 0,
            columns : 1
        } ]
    };
    Gamma.init( GammaSettings, fncallback );


    // Example how to add more items (just a dummy):

    var page = 0,
        items = ['<li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="./img/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="./img/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="./img/xlarge/3.jpg" data-min-width="700"></div><div data-src="./img/large/3.jpg" data-min-width="300"></div><div data-src="./img/medium/3.jpg" data-min-width="200"></div><div data-src="./img/small/3.jpg" data-min-width="140"></div><div data-src="./img/xsmall/3.jpg"></div><noscript><img src="./img/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="./img/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="./img/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="./img/xlarge/3.jpg" data-min-width="700"></div><div data-src="./img/large/3.jpg" data-min-width="300"></div><div data-src="./img/medium/3.jpg" data-min-width="200"></div><div data-src="./img/small/3.jpg" data-min-width="140"></div><div data-src="./img/xsmall/3.jpg"></div><noscript><img src="./img/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="./img/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="./img/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="./img/xlarge/3.jpg" data-min-width="700"></div><div data-src="./img/large/3.jpg" data-min-width="300"></div><div data-src="./img/medium/3.jpg" data-min-width="200"></div><div data-src="./img/small/3.jpg" data-min-width="140"></div><div data-src="./img/xsmall/3.jpg"></div><noscript><img src="./img/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="./img/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="./img/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="./img/xlarge/3.jpg" data-min-width="700"></div><div data-src="./img/large/3.jpg" data-min-width="300"></div><div data-src="./img/medium/3.jpg" data-min-width="200"></div><div data-src="./img/small/3.jpg" data-min-width="140"></div><div data-src="./img/xsmall/3.jpg"></div><noscript><img src="./img/xsmall/3.jpg" alt="img03"/></noscript></div></li><li><div data-alt="img03" data-description="<h3>Sky high</h3>" data-max-width="1800" data-max-height="1350"><div data-src="./img/xxxlarge/3.jpg" data-min-width="1300"></div><div data-src="./img/xxlarge/3.jpg" data-min-width="1000"></div><div data-src="./img/xlarge/3.jpg" data-min-width="700"></div><div data-src="./img/large/3.jpg" data-min-width="300"></div><div data-src="./img/medium/3.jpg" data-min-width="200"></div><div data-src="./img/small/3.jpg" data-min-width="140"></div><div data-src="./img/xsmall/3.jpg"></div><noscript><img src="./img/xsmall/3.jpg" alt="img03"/></noscript></div></li>']

    function fncallback() {

        $( '#loadmore' ).show().on( 'click', function() {

            ++page;
            var newitems = items[page-1]
            if( page <= 1 ) {

                Gamma.add( $( newitems ) );

            }
            if( page === 1 ) {

                $( this ).remove();

            }

        } );

    }
});
var lightbox = $('.gallery a').simpleLightbox({ /* options */ });
