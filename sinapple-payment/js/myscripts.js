$(document).ready(function() {
	$('body').on('click', '.checkbox', function(event) {
		event.preventDefault();
		$(this).children('.checkbox__square').toggleClass('checkbox__square__active');
		if ($(this).children('.checkbox__check').is(':checked')) {
		  $(this).children('.checkbox__check').prop('checked', false);
		} else {
		  $(this).children('.checkbox__check').prop('checked', true);
		}
	});
});