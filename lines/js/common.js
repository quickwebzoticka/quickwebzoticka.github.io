$(document).ready(function() {

	var ulPos, winPos;

	function refreshVar(){
		ulPos = $('ul').offset().top;
		$('.ulpos').text(ulPos);
	}

	$(window).resize(refreshVar());


	$(window).scroll(function(){
	winPos = $(window).scrollTop();
	$('.winpos').text(winPos);

	if (winPos >= ulPos - 200) {
		line1();
		line2();
		line3();
		line4();
		line5();
		ulPos = 99999999;
	}

	});


	function line1(){
		$('.line1').animate({
		    width: '220px'
		  }, 200);
		setTimeout(function(){
			$('.line2').animate({
		    width: '10px'
		  }, 100)
		},190);
		// $('.line2').animate({
		//     width: '10px'
		//   }, 600)
		// $('.line3').animate({
		//     width: '20px'
		//   }, 600)
		setTimeout(function(){
			$('.line3').animate({
		     width: '20px'
		   }, 100)
		},290);
		$('.number1').css('display', 'block');
		var start = 0;
		var end = $('.number1').text();
		var number = document.querySelector('.number1');
		var interval = setInterval(function() {
        	number.innerHTML = ++start;
            if(start == end) {
            		clearInterval(interval);
            }
        }, 5);
	}

	function line2(){
		$('.line1').animate({
		    width: '220px'
		  }, 200)
		setTimeout(function(){
			$('.line2').animate({
		    width: '10px'
		  }, 100)
		},190);
		// $('.line2').animate({
		//     width: '10px'
		//   }, 600)
		// $('.line3').animate({
		//     width: '20px'
		//   }, 600)
		setTimeout(function(){
			$('.line3').animate({
		     width: '20px'
		   }, 100)
		},290);
		$('.number2').css('display', 'block');
		var start = 0;
		var end = $('.number2').text();
		var number = document.querySelector('.number2');
		var interval = setInterval(function() {
        	number.innerHTML = ++start;
            if(start == end) {
            		clearInterval(interval);
            }
        }, 5);
	}

	function line3(){
		$('.line1').animate({
		    width: '220px'
		  }, 200)
		setTimeout(function(){
			$('.line2').animate({
		    width: '10px'
		  }, 100)
		},190);
		// $('.line2').animate({
		//     width: '10px'
		//   }, 600)
		// $('.line3').animate({
		//     width: '20px'
		//   }, 600)
		setTimeout(function(){
			$('.line3').animate({
		     width: '20px'
		   }, 100)
		},290);
		$('.number3').css('display', 'block');
		var start = 0;
		var end = $('.number3').text();
		var number = document.querySelector('.number3');
		var interval = setInterval(function() {
        	number.innerHTML = ++start;
            if(start == end) {
            		clearInterval(interval);
            }
        }, 5);
	}

	function line4(){
		$('.line1').animate({
		    width: '220px'
		  }, 200)
		setTimeout(function(){
			$('.line2').animate({
		    width: '10px'
		  }, 100)
		},190);
		// $('.line2').animate({
		//     width: '10px'
		//   }, 600)
		// $('.line3').animate({
		//     width: '20px'
		//   }, 600)
		setTimeout(function(){
			$('.line3').animate({
		     width: '20px'
		   }, 100)
		},290);
		$('.number4').css('display', 'block');
		var start = 0;
		var end = $('.number4').text();
		var number = document.querySelector('.number4');
		var interval = setInterval(function() {
        	number.innerHTML = ++start;
            if(start == end) {
            		clearInterval(interval);
            }
        }, 5);
	}

	function line5(){
		$('.line1-1').animate({
		    width: '400px'
		  }, 200)
		setTimeout(function(){
			$('.line2-1').animate({
		    width: '10px'
		  }, 100)
		},190);
		// $('.line2').animate({
		//     width: '10px'
		//   }, 600)
		// $('.line3').animate({
		//     width: '20px'
		//   }, 600)
		setTimeout(function(){
			$('.line3-1').animate({
		     width: '20px'
		   }, 100)
		},290);
		$('.number5').css('display', 'block');
		var start = 0;
		var end = $('.number5').text();
		var number = document.querySelector('.number5');
		var interval = setInterval(function() {
        	number.innerHTML = ++start;
            if(start == end) {
            		clearInterval(interval);
            }
        }, 5);
	}

});