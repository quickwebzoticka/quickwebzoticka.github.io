$(document).ready(function() {
	$(document).on('click', '.module-btn', function(event) {
		var arrow   =   $('.module-btn__arrow'),
			btnText =   $('.module-btn__open');

		$('.module-main').slideToggle('fast');
		arrow.toggleClass('active');
		$('.module-btn').toggleClass('active');

		if (arrow.hasClass('active')) {
			btnText.text('Скрыть');
		} else {
			btnText.text('Посмотреть');
		}
	});
});