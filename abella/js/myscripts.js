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
	var slider = $('.seven-screen__gallery'),
		windowWidth = $(window).width();

	$(window).resize(function() {
		windowWidth = $(window).width();
		console.log(windowWidth);
		return windowWidth;
	});
	

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
    $(document).on('click', '.header__menu', function() {
	    if (windowWidth >= 768) {
			
	    }
	    $('.menu-big').animate({'width': '100vw'}, 'slow');
    });
    $(document).on('click', '.menu-big__close', function() {
	    $('.menu-big').animate({'width': '0vw'}, 'slow');
    });
    $(document).on('click', '.counter-minus', function() {
    	var a = $('.count').val();

    	if (a <= 1) {
    		return;
    	}
    	a--;

    	$('.count').val(a);
    });
    $(document).on('click', '.counter-plus', function() {
    	var a = $('.count').val();

    	if (a > 6000) {
    		return;
    	}
    	a++;

    	$('.count').val(a);
    });
});
