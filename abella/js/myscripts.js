$(document).ready(function() {

	setTimeout(function() {
      $('#preloader').fadeOut('slow',function() {
      	$('.first-screen__main').addClass('first-screen__main__after-load');
      });
    },2000);

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
	};

	// document.addEventListener("DOMContentLoaded", ready);


    


	// slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
	//   $("[data-slick-index='" +currentSlide+ "']").removeClass('slider-inn-current-slide');
	//   $("[data-slick-index='" +nextSlide+ "']").addClass('slider-inn-current-slide');
	// });
});
