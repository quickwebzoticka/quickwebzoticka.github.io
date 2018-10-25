$(document).ready(function() {

	var width = $(window).innerWidth();
	console.log(width);

	if (width <= 652) {
		$('.terms__payment__text').text('Об оплате');
		$('.terms__delivery__text').text('О доставке');
		$(document).on('click', '.terms__payment', function(event) {
			$('#modal-payment').modal();
		});
		$(document).on('click', '.terms__delivery', function(event) {
			$('#modal-delivery').modal();
		});
	} else {
		$('.terms').hover(function() {
			$(this).find('.terms__description').fadeIn('fast');
		}, function() {
			$(this).find('.terms__description').fadeOut('fast');
		});
	}

	
});