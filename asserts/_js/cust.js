$(document).ready(function() {
    // alert(window.location);
    var topOwl = '.header-imgsslider';
    owlCarouselWith2Images(topOwl);

    var topBrandsId = '#brand-logo-slider';
    var newPdId = '#featured-slider';
    owlCarousleBySelectors(topBrandsId);
    owlCarousleBySelectors(newPdId);



    var max4Carousel = '#featured-slider_4max';
    var max6Carousel = '#featured-slider_6max';
    var four = 4;
    var six  = 6;
    carouselMax4OrMax6(max4Carousel, four);
    carouselMax4OrMax6(max6Carousel, six);


});

function carouselMax4OrMax6(selectedCapsul, maxNum) {
    $(selectedCapsul).owlCarousel({
        // loop: true,
        margin: 10,
        mouseDrag: false,
        // touchDrag: false,
        // pullDrag: false,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1100: {
                items: maxNum,
                nav: true,
                navText: [
                    '<div><i class="fa fa-angle-left fa-2x" aria-hidden="true"></i></div>',
                    '<div><i class="fa fa-angle-right fa-2x" aria-hidden="true"></i></div>'
                ]
            }
        }
    });
}


function owlCarousleBySelectors(selectorCarouselContainer) {
    $(selectorCarouselContainer).owlCarousel({
        loop: true,
        margin: 10,
        // mouseDrag: false,
        // touchDrag: false,
        // pullDrag: false,
        dots: true,
        responsiveClass: true,
        responsive: {
            0: {
                items: 2,
                nav: false
            },
            600: {
                items: 3,
                nav: false
            },
            1100: {
                items: 6,
                nav: false,
                loop: false
            }
        }
    });
}


function owlCarouselWith2Images(imgContainer) {
    $(imgContainer).owlCarousel({
        animateOut: 'slideOutDown',
        animateIn: 'flipInX',
        // autoplay: true,
        // autoplayHoverPause: true,
        // autoplayTimeout: 1000,
        loop: true,
        // autoWidth: true,
        autoHeight: true,
        dots: true,
        items:1,
        margin:30,
        stagePadding:30,
        smartSpeed:450
    });
};