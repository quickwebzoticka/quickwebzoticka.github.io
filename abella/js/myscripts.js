$(window).on('load', function (){
	setTimeout(function() {
      $('#preloader').fadeOut('slow',function() {
      	$('.first-screen__main').addClass('first-screen__main__after-load');
  		AOS.init({
			once: true
		});
      });
    },2000);
});

$(document).ready(function() {
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
});
