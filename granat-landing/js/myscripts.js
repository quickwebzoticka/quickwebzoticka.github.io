$(document).ready(function() {

	var li   = $('.facades__right__nav li'),
		tabs =   $('.facades__right__main');


	$(document).on('click', '.facades__right__nav li', function(event) {
		event.preventDefault();
		$('.facades__right__nav li').removeClass('facades__active');
		$(this).addClass('facades__active');
		$('.facades__right__main').removeClass('facades__main__active');
		$('.facades__right__main').eq($(this).index()).addClass('facades__main__active');
	});
	$(document).on('click', '.facades__active__arrow-prev', function(event) {
		event.preventDefault();
		var element = $('li.facades__li.facades__active').prev('li.facades__li');
		if ($(element).is('li.facades__li')) {
			$('li.facades__li.facades__active').removeClass('facades__active');
			$(element).addClass('facades__active');

			var elementConst = $('.facades__right__main.facades__main__active').prev('.facades__right__main');
			$('.facades__right__main').removeClass('facades__main__active');
			$(elementConst).addClass('facades__main__active');
		}
	});
	$(document).on('click', '.facades__active__arrow-next', function(event) {
		event.preventDefault();



		var element = $('li.facades__li.facades__active').next('li.facades__li');
		if ($(element).is('li.facades__li')) {
			$('li.facades__li.facades__active').removeClass('facades__active');
			$(element).addClass('facades__active');

			var elementConst = $('.facades__right__main.facades__main__active').next('.facades__right__main');
			$('.facades__right__main').removeClass('facades__main__active');
			$(elementConst).addClass('facades__main__active');
		}
	});
});