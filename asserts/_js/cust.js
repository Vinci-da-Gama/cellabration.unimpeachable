$(document).ready(function() {
    // alert(window.location);
    var topOwl = '.imgs-onlytwo';
    owlCarouselWith2Images(topOwl);

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
        // autoWidth: true,
        dots: true,
        items:1,
        margin:30,
        stagePadding:30,
        smartSpeed:450
    });
};