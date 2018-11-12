$(document).ready(function() {
	AOS.init({
		once: true
	});

	var slider = $('.seven-screen__gallery');

	slider.slick({
		arrows: false
	});
    $(document).on('click', '.seven-screen__gallery__prev', function (e) {
        slider.slick('slickPrev');
        e.preventDefault();
    });
    $(document).on('click', '.seven-screen__gallery__next', function (e) {
        slider.slick('slickNext');
        e.preventDefault();
    });


	function ready() {
		AOS.refresh();
	}

	document.addEventListener("DOMContentLoaded", ready);
});

