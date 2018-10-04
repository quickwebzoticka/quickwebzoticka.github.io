$(document).ready(function() {
	$('.table__main__nav').on('click', '.li_nav', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.table__main__active')
            .find('.table')
            .removeClass('table__active')
            .css('display', 'none')
            .eq($(this).index())
            .slideDown('slow', function() {
                $(this).addClass('table__active');
            });
            
    });

    $('.table__head').on('click', '.li_nav_main', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.table')
            .find('.table__main')
            .removeClass('table__main__active')
            .eq($(this).index())
            .addClass('table__main__active');
    });
});