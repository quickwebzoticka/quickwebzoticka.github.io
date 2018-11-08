$(document).ready(function() {
	var slider = $('.slider-upper');

	slider.slick({
	  slidesToShow: 1,
	  slidesToScroll: 1,
	  arrows: false,
	  fade: true,
	  asNavFor: '.slider-down'
	});
	$('.slider-down').slick({
	  slidesToShow: 3,
	  slidesToScroll: 1,
	  asNavFor: '.slider-upper',
	  dots: false,
	  centerMode: true,
	  focusOnSelect: true,
	  arrows: false,
	  infinite: true
	});
    $(document).on('click', '.slider-down__prev', function (e) {
        slider.slick('slickPrev');
        e.preventDefault();
    });
    $(document).on('click', '.slider-down__next', function (e) {
        slider.slick('slickNext');
        e.preventDefault();
    });

    //filter--color
	$(document).on('click', '.filter__color .change', function(e) {
		$(this).hide();
		$('.filter__color .change__active').css('display', 'inline-block');
		$('.color__active').hide();
		$('.colors__wrapper').slideDown('fast');
	});

	$(document).on('click', '.filter__color .change__active', function(e) {
		$('.colors__add__wrapper').slideDown('fast');
	});

	$(document).on('click', '.color__item__wrapper .color__item', function(e) {
		var a = $(this).css('background-color');
		
		$('.color__active .color__item').css('background-color', a);
		$('.colors__wrapper').slideUp('fast');
		$('.colors__add__wrapper').slideUp('fast');
		setTimeout(function() {
			$('.color__active').fadeIn('fast');
		}, 400);
		$('.filter__color .change').css('display', 'inline-block');
		$('.filter__color .change__active').css('display', 'none');
	});

	//filter--material
	$(document).on('click', '.filter__material .change', function(e) {
		$(this).hide();
		$('.material__active').hide();
		$('.filter__material .change__active').slideDown('fast');
	});

	$(".filter__material select").change(function(){
	    if($(this).val() == 0) return false;
	    
	    var a = $('.material__active');

    	a.text($(this).val());
    	$('.filter__material .change__active').slideUp('fast');
    	$('.filter__material .change').show();
    	setTimeout(function() {
			$('.material__active').fadeIn('fast');
		}, 400);
	});
});