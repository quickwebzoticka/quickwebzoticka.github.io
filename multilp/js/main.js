function update_all(limiter) {
    if (limiter === undefined){
        limiter = $(document)
    }
    commandSlider();
    sliderWidthPaginationNumber();
    mainTabs();
    reviewsSLider();
    lendCarousel();
}
// $(document).ready(function () {
//     $(document).on('click', '.faq-item-top-toggle', function(){
//         $(this).toggleClass('active');
//         $(this).parents('.faq-item').find('.faq-item__text').slideToggle();
//         $(this).parents('.faq-item').toggleClass('active');
//         return false;
//     });
//     update_all();
// });
$(document).ready(function () {
    $(document).on('click', '.faq-item', function(){
        $(this).find('.faq-item-top-toggle').toggleClass('active');
        $(this).find('.faq-item__text').slideToggle();
        $(this).toggleClass('active');
        return false;
    });
    update_all();
});
function sliderWidthPaginationNumber(){
    var slideItems = $('.slider-main-item');
    $(document).find('.slider-main__but').attr('href',$(document).find('.slider-main-item:first-child').attr('data-link'));
    var slider = $('.slider-main-inn').slick({
        arrows:false
    });
    slider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        var itemLink = $(document).find('[data-slick-index='+nextSlide+']')[0];
        $(document).find('.slider-main-controls-count__tec').html(nextSlide+1);
        $(document).find('.slider-main__but').attr('href',$(itemLink).attr('data-link'))

    });
    $(document).on('click', '.slider-main-controls-prev', function (e) {
        slider.slick('slickPrev');
        e.preventDefault();
    });
    $(document).on('click', '.slider-main-controls-next', function (e) {
        slider.slick('slickNext');
        e.preventDefault();
    });
    $(document).find('.slider-main-controls-count__max').html(slideItems.length);
}
function commandSlider(){
    var slider = $('.command-list-slider').slick({
        dots: false,
        arrows:false,
        infinite: false,
        speed: 300,
        slidesToShow: 3,
        slidesToScroll: 3,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                }
            }
        ]
    });
    $(document).on('click', '.command-arrow-prev', function (e) {
        slider.slick('slickPrev');
        e.preventDefault();
    });
    $(document).on('click', '.command-arrow-next', function (e) {
        slider.slick('slickNext');
        e.preventDefault();
    });
}
function reviewsSLider(){
    var slider = $('.reviews-main').slick({
        dots: false,
        arrows:false,
        infinite: true
    });
    $(document).on('click', '.reviews-abs-contr-prev', function (e) {
        slider.slick('slickPrev');
        e.preventDefault();
    });
    $(document).on('click', '.reviews-abs-contr-next', function (e) {
        slider.slick('slickNext');
        e.preventDefault();
    });
}
function lendCarousel() {
    var slider = $('.lend-carousel').slick({
        dots: false,
        arrows:false,
        infinite: true
    });
    $(document).on('click', '.lend-carousel-controls-prev', function (e) {
        slider.slick('slickPrev');
        e.preventDefault();
    });
    $(document).on('click', '.lend-carousel-controls-next', function (e) {
        slider.slick('slickNext');
        e.preventDefault();
    });
}
function mainTabs() {
    $('.tabs__caption').on('click', '[data-tab-link]:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
    return false;
    });
}



