$(document).ready(function() {

	var personalDataInput = '.main__personal-data form label input',
		personalDataTextarea = '.main__personal-data form label textarea',
		subscribeInput = '.main__subscribe form .settings__email input';

	function inputLogic(val) {
		$(val).keyup(function() {
	    if ($(this).val().length > 0) {
	      $(this).parents('label').addClass('filled');
	    } else {
	      $(this).parents('label').removeClass('filled');
	    };
	    });
		$(val).focus(function(event) {
			$(this).parents('label').addClass('filled');
		});
		$(val).blur(function(event) {
			if ($(this).val().length > 0) {
		      return false;
		    }
		      $(this).parents('label').removeClass('filled');
		});
	};

	function textareaLogic(val) {
		$(val).keyup(function() {
	    var a = $(this);
	    if ($(this).val().length > 0) {
	      $(this).parents('label').addClass('filled__textarea');
	    } else {
	      $(this).parents('label').removeClass('filled__textarea');
	    };
	    });
		$(val).focus(function(event) {
			var a = $(this);
		      $(this).parents('label').addClass('filled__textarea');
		});
		$(val).blur(function(event) {
			var a = $(this);
	      	if ($(this).val().length > 0) {
		      return false;
		    }
		      $(this).parents('label').removeClass('filled__textarea');
		});
	};

	$('body').on('click', '.checkbox', function(event) {
		event.preventDefault();
		$(this).children('.checkbox__square').toggleClass('checkbox__square__active');
		if ($(this).children('.checkbox__check').is(':checked')) {
		  $(this).children('.checkbox__check').prop('checked', false);
		} else {
		  $(this).children('.checkbox__check').prop('checked', true);
		}
	});

	$('body').on('click', '.reset', function(event) {
		$('.checkbox__square').removeClass('checkbox__square__active');
		$('.settings__email').removeClass('filled');
	});

	inputLogic(personalDataInput);
	inputLogic(subscribeInput);
	textareaLogic(personalDataTextarea);
});