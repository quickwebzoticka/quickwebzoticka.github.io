$(document).ready(function() {

	var   ulPos,
		  winPos,
		  borderPos;

	function refreshVar(){
		ulPos = $('.redline').offset().top;
		borderPos = $('.minutes').offset().top;
	};

	function fullMenu(){
		$('.left-menu').removeClass('left-menu_active');
		$('.logo').removeClass('logo_active');
		$('.nav').slideDown('slow');
		$('.menu').fadeOut('fast');
	};

	function shortMenu(){
		$('.left-menu').addClass('left-menu_active');
		$('.logo').addClass('logo_active');
		$('.nav').css('display', 'none');
		$('.menu').fadeIn('fast');
	};

	function parallax(){
		$('.nature_trees').css('transform', 'translate3d(0, ' + -(winPos * 0.3 - 300) + 'px, 0)');
	};

	function openMenu() {
		$('.menu').click(function(event) {
			fullMenu();
		});
	};

	function closeMenu() {
		$(document).click( function(event){
			if( $(event.target).closest(".left-menu").length) 
	        	return;
	      event.stopPropagation();
	      shortMenu();
	    });
	};

	 function activateAnim() {
	 	if (winPos >= ulPos - 500) {
			$('.redline').addClass('redline_active');
			ulPos = 99999999;
		};

		if (winPos >= borderPos - 500) {
			$('.minutes_p').addClass('minutes_p_active');
			$('.minutes_border').addClass('minutes_border_active');
			ulPos = 99999999;
		};
	 };

 	closeMenu();

	var width = parseInt($('html').css('width'), 10);
	
	$(window).resize(refreshVar());

	$(window).scroll(function(){
		winPos = $(window).scrollTop();
		activateAnim();
		parallax();
		if (width > 1920) {
			if (winPos >= 900) {
				shortMenu();
			} else {
				fullMenu();
			};
		} else {
			shortMenu();
		}
		
	});	

    console.log(width);
	  if (width >= 1330 && width < 1450) {


	    var swiper = new Swiper('.swiper-container', {
	      slidesPerView: 3,
	      spaceBetween: 10,
	      loop: false,
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	    });

	    shortMenu();

	  } else if (width < 1330) {

	  	var swiper = new Swiper('.swiper-container', {
	      slidesPerView: 2,
	      spaceBetween: 10,
	      loop: false,
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	    });

	    shortMenu();

	  } else {

	    var swiper = new Swiper('.swiper-container', {
	      slidesPerView: 4,
	      spaceBetween: 10,
	      loop: true,
	      navigation: {
	        nextEl: '.swiper-button-next',
	        prevEl: '.swiper-button-prev',
	      },
	    });

	  };
	  if (width >= 1024) {
	    $.scrollify({
		    section : ".smooth-slide",
		    sectionName : "section-name",
		    interstitialSection : "",
		    easing: "easeOutExpo",
		    scrollSpeed: 1100,
		    offset : 0,
		    scrollbars: true,
		    setHeights: false,
		    overflowScroll: false,
		    updateHash: true,
		    touchScroll:true,
		  });
	  }
	  if (width < 1450) {
	  	$('.consult .map').addClass('smooth-slide');
	  }
	openMenu();
	parallax();
	activateAnim();

	var swiperArch = new Swiper('.swiper-container-arch', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next-arch',
        prevEl: '.swiper-button-prev-arch',
      },
      pagination: {
        el: '.swiper-pagination',
      },
    });

	  $('.has_sub').click(function(event) {
	  	$(this).children('.submenu').toggle('fast');
	  	$(this).toggleClass('has_sub_active');
	  });

	  $('.head_contacts').click(function(event) {
	  	$('.head_contact-info').addClass('head_contact-info_active');
	  	$('.head_contact-info_wrapper').addClass('head_contact-info_wrapper_active');
	  });

	  $('.cross').click(function(event) {
	  	$('.head_contact-info').removeClass('head_contact-info_active');
	  	$('.head_contact-info_wrapper').removeClass('head_contact-info_wrapper_active');
	  });

	  $('.icons').click(function(event) {
	  	$('.icons').removeClass('icons_active');
	  	$(this).addClass('icons_active');


	  	let i = $(this).index('.icons');
	  	let t = $('.text-1');
	  	t.removeClass('text-1_active');
  		t.eq(i).addClass('text-1_active');
	  });

		$('.img-popup').magnificPopup({
			type: 'image',
			closeOnContentClick: true,
			closeBtnInside: false,
			fixedContentPos: true,
			image: {
				verticalFit: true
			},
			zoom: {
				enabled: true,
				duration: 500
			}
		});
});