$(document).ready(function() {
	$('.block-slider').slick({
		infinity: false,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: true,
		prevArrow: $('.block-slider__arrow-prev'),
		nextArrow: $('.block-slider__arrow-next')
	});
});