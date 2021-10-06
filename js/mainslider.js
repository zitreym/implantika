var elem = document.querySelector('.grid-slider-wrap');
var flkty = new Flickity(elem, {
    // options
    cellAlign: 'center',
    contain: true,
    prevNextButtons: true,
    freeScroll: true,
    wrapAround: true,
    autoPlay: 3000
});

var doctors_slide = document.querySelector('.doctors-slide');
var gegveev = new Flickity(doctors_slide, {
    // options
    cellAlign: 'center',
    contain: true,
    prevNextButtons: true,
    freeScroll: true,
    wrapAround: true,
    pageDots: false,
});


