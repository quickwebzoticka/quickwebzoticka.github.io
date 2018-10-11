$(document).ready(function() {

    $('.category-item__table__main__nav').on('click', '.li_nav:not(".active")', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('.category-item')
            .find('.table')
            .removeClass('table__active')
            .css('display', 'none')
            .eq($(this).index())
            .slideDown('slow', function() {
                $(this).addClass('table__active');
            });
    });

	$('.table__main__nav').on('click', '.li_nav:not(".active")', function() {
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

    $('.flex-wrapper').on('click', '.category', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.table__main')
            .find('.category-item')
            .removeClass('category-item__active')
            .eq($(this).index())
            .addClass('category-item__active');
    });
});