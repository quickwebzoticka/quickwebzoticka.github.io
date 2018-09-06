$(document).ready(function() {

	var selected,
		mobSelected;

	function list() {
		if ($('.link:eq(0)').hasClass('link_after_active')) {
			$('#trade-info').css('display', 'block');
			$('#invest-info').css('display', 'none');
			$('#seek-info').css('display', 'none');
		}
		if ($('.link:eq(1)').hasClass('link_after_active')) {
			$('#trade-info').css('display', 'none');
			$('#invest-info').css('display', 'block');
			$('#seek-info').css('display', 'none');
		}
		if ($('.link:eq(2)').hasClass('link_after_active')) {
			$('#trade-info').css('display', 'none');
			$('#invest-info').css('display', 'none');
			$('#seek-info').css('display', 'block');
		}
	}

	function after() {
		$('.container, .p_choices').css('display', 'none');
		$('.main').css('display', 'block');
		if (selected == 'trade') {
			$('.link:eq(0)').addClass('link_after_active');
		}
		if (selected == 'invest') {
			$('.link:eq(1)').addClass('link_after_active');
		}
		if (selected == 'seek') {
			$('.link:eq(2)').addClass('link_after_active');
		}
		list();
	};

	$('.choice').click(function(event) {
		$('.container').addClass('container_after');
		$('.background-next').addClass('background_transition');
		$('.p_choices').addClass('p_choices_after');
		selected = $(this).attr('id');
		setTimeout(after,1000);
	});

	$('.link').click(function(event) {
		$('.link').removeClass('link_after_active');
		$(this).addClass('link_after_active');
		list();
	});

	$('.mob_list_trigger').click(function(event) {
		$(this).find('.mob_list_text').slideDown('fast');
		$(this).find('.mob_list_item_arrow').addClass('arrow_active');
		$('.mob_wrapper').css('background', '#f3f2da');
	});
});