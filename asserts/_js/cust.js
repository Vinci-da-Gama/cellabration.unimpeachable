$(document).ready(function() {
    // alert(window.location);
    var topBrandsId = '#brand-logo-slider';
    var newPdId = '#featured-slider';
    owlCarousleBySelectors(topBrandsId);
    owlCarousleBySelectors(newPdId);
});

function owlCarousleBySelectors(selectorCarouselContainer) {
    $(selectorCarouselContainer).owlCarousel({
        loop: true,
        margin: 10,
        dots: true,
        animateIn: true,
        animateOut: true,
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
