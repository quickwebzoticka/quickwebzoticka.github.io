function update_all(limiter) {
    if (limiter === undefined){
        limiter = $(document)
    }
    update_carousel(limiter);
    tabs(limiter);
    allClics(limiter);
    sliders(limiter);
    inputMask(limiter);
    acc(limiter);
    scroll(limiter);
}
$(document).ready(function(){
    update_all();
    $('.first-slider-item__title span').addClass('active');
});
function update_carousel(limiter){
    if (limiter === undefined){
        limiter = $(document)
    }
    limiter.find('.tabs-flat').each(function() {
        if (this.dataset.carousel === undefined){
            this.setAttribute('data-carousel', Math.floor(Math.random() * 100000000));

            var slickTop = $(this).find('.tabs-flat-left__wrap').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                arrows: false,
                fade: true,
                responsive: [
                    {
                      breakpoint: 768,
                      settings: {
                        fade:false
                      }
                    }
                ],
                asNavFor: '[data-carousel=' + this.dataset.carousel + '] .tabs-flat-right__wrap'
            });
            $(this).data('slickTop', slickTop);
            var slickBot = $(this).find('.tabs-flat-right__wrap').slick({
                infinite: true,
                slidesToShow: 4,
                slidesToScroll: 1,
                vertical: true,
                arrows:false,
                verticalSwiping:true,
                asNavFor: '[data-carousel=' + this.dataset.carousel + '] .tabs-flat-left__wrap',
                dots: false,
                focusOnSelect: true
            });
            $(this).data('slickBot', slickBot);
        } else {
            console.log($(this).data('slickTop'), $(this).data('slickBot'))
        }
    });
}

function tabs(limiter){
    if (limiter === undefined){
        limiter = $(document)
    }
    $(document).on('click', '[data-tab-link]:not(.active)', function() {
        $(this)
            .addClass('active').siblings().removeClass('active')
            .closest('div.tabs').find('div.tabs__content').removeClass('active').eq($(this).index()).addClass('active');
        let curElementContentBlock = $(this).closest('div.tabs').find('div.tabs__content').eq($(this).index());
            if (curElementContentBlock.find('.slick-slider').length > 0){
                curElementContentBlock.find('.slick-slider').slick('destroy').slick('init');
            }
        return false;

    });
}

function allClics(limiter){
    if (limiter === undefined){
        limiter = $(document)
    }
    $(document).on('click', '.menu__burger .hamburger', function(){
        let menu = $(this).parents('.menu');
        $(this).toggleClass('is-active');
        if(menu.hasClass('active')){
            $(document).find('.wrapper-disable').remove();    
        } else {
            $(document).find('.main-content').prepend('<div class="wrapper-disable"></div>')
        }
        menu.toggleClass('no-active active');
        menu.find('.menu__link span').toggle('slide');
        menu.find('.menu-footer').toggle('slide');
    });
    $(document).on('click', '.menu__link', function(){
        let menu = $(this).parents('.menu');
        if(menu.hasClass('active')){
            $(document).find('.wrapper-disable').remove(); 
            menu.find('.hamburger').removeClass('is-active');
            menu.removeClass('active');
            menu.find('.menu__link span').toggle('slide');
            menu.find('.menu-footer').toggle('slide');
            menu.addClass('no-active');   
        } else {
            
        }
    })
    $(document).on('click', '.header-block__but', function(){
        let formMain = $(document).find('.callback');
        if(formMain.hasClass('active')){
            formMain.removeClass('fadeInRight');
            formMain.addClass('fadeOutRight');
            $(document).find('.wrapper-disable').remove();
            setTimeout(function(){
                formMain.removeClass('active');
            }, 1000)
        } else {
            formMain.removeClass('fadeOutRight')
            formMain.addClass('active fadeInRight');
            $(document).find('.main-content').prepend('<div class="wrapper-disable"></div>')
        }
        return false;
    });
    $(document).on('click','.form__close', function(){
        let formMain = $(this).parent();
        formMain.removeClass('fadeInRight');
        formMain.addClass('fadeOutRight');
        $(document).find('.wrapper-disable').remove();
        setTimeout(function(){
            formMain.removeClass('active');
        }, 1000)
    })
    $(document).on('click', '.bws-top-arrow', function(){
        $(this).parents('.bws').toggleClass('no-active');
        return false;
    });
}

function sliders(limiter){
    if (limiter === undefined){
        limiter = $(document)
    }
    let firstSlider = limiter.find('.first-slider').slick({
        dots:true
    });
    firstSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        $('.first-slider-item__title span').removeClass('active');
        $(document).find('[data-slick-index='+nextSlide+'] .first-slider-item__title span').addClass('active');
      });
    limiter.on('click','.first-slider-wrap .first-slider-arrows__prev', function(){
        firstSlider.slick('slickPrev');
        return false;
    });
    limiter.on('click','.first-slider-wrap .first-slider-arrows__next', function(){
        firstSlider.slick('slickNext');
        return false;
    });
    let fullScreenSlider = limiter.find('.fullscreen-slider__main');
    fullScreenSlider.each(function(index, item){
        $(item).slick({
            dots:true
        })
    });
    $(document).on('click', '.fullscreen-slider .first-slider-arrows__prev', function(){
        $(this).parents('.fullscreen-slider').find('.fullscreen-slider__main').slick('slickPrev');
        return false;
    });
    $(document).on('click', '.fullscreen-slider .first-slider-arrows__next', function(){
        $(this).parents('.fullscreen-slider').find('.fullscreen-slider__main').slick('slickNext');
        return false;
    });
    let preFooterSlider = limiter.find('.pre-footer-slider__wrap').slick({
        arrows:false
    });
    $(document).on('click', '.pre-footer-slider__controls .first-slider-arrows__prev', function(){
        preFooterSlider.slick('slickPrev');
        return false;
    });
    $(document).on('click', '.pre-footer-slider__controls .first-slider-arrows__next', function(){
       preFooterSlider.slick('slickNext');
       return false;
    });
    
    let veticalSliderOnTabs  = limiter.find('.tabs-ip-list__wrap');
    veticalSliderOnTabs.each(function(index, item){
        $(item).slick({
            vertical:true,
            arrows:false,
            slidesToShow: 3,
            responsive: [
                {
                  breakpoint: 768,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                    dots: false,
                    vertical:false
                  }
                }
              ]
        })
    });
    $(document).on('click', '.tabs-ip-list .first-slider-arrows__next', function(){
        $(this).parents('.tabs-ip-list').find('.tabs-ip-list__wrap').slick('slickNext');
        return false;
     });
    let hodLine = $(document).find('.hod-top-line__inn'),
    colSlidesHod = $(document).find('.hod-slider-item').length,
    hodLineWidthItem = 100/colSlidesHod,
    tecHodLineWidth = hodLineWidthItem,
    hodSlider = limiter.find('.hod-slider__wrap').slick({
        arrows:false,
        slidesToShow: 3,
        responsive: [
            {
              breakpoint: 1224,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 768,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
              }
            }
          ]

    });

    hodLine.css('width',tecHodLineWidth+'%');
    hodSlider.on('beforeChange', function(event, slick, currentSlide, nextSlide){
        if(currentSlide < nextSlide){
            if(nextSlide == (colSlidesHod - 1)){
                tecHodLineWidth = 100;
            } else {
                tecHodLineWidth += hodLineWidthItem;
            }
            hodLine.css('width',tecHodLineWidth+'%');
        } else if (currentSlide > nextSlide){
            if(nextSlide == 0){
                tecHodLineWidth = hodLineWidthItem;
            } else {
                tecHodLineWidth -= hodLineWidthItem;
            }
            hodLine.css('width',tecHodLineWidth+'%');
        }
    });
    $(document).on('click', '.hod-slider-prev', function(){
        hodSlider.slick('slickPrev');
        return false;
    });
    $(document).on('click', '.hod-slider-next', function(){
        hodSlider.slick('slickNext');
        return false;
    });
    let hotTooltipSliderItems =  $(document).find('.hod-tooltip-left-item');

    let hodTooltipSlider = $(document).find('.hod-tooltip-left__slider').slick({
        arrows:false
    });
    $(document).find('.hod-tooltip-bot__all').html(hotTooltipSliderItems.length);
    hodTooltipSlider.on('afterChange', function(event, slick, currentSlide, nextSlide){
        $(document).find('.hod-tooltip-bot__this').html(currentSlide + 1);
    });
    $(document).on('click', '.hod-tooltip-prev', function(){
        hodTooltipSlider.slick('slickPrev');
        return false;
    });
    $(document).on('click', '.hod-tooltip-next', function(){
        hodTooltipSlider.slick('slickNext');
        return false;
    });
}
function inputMask(limiter){
    if (limiter === undefined){
        limiter = $(document)
    } 
    limiter.find('.form__input--phone').inputmask('+7 (999) 999 9999')
}
function acc(limiter){
    if (limiter === undefined){
        limiter = $(document)
    } 
    $(document).on('click', '.acc-item__top', function(){
        $(this).parents('.acc-item').siblings().each(function(index,item){
            $(item).find('.acc-item-bot').slideUp();
        })
        $(this).parents('.acc-item').find('.acc-item-bot').slideToggle();
    });
}

function scroll(limiter){
    if (limiter === undefined){
        limiter = $(document)
    }
    $(document).on("click",'.menu__link, .first-slider-bot', function (event) {
        event.preventDefault();
        var id  = $(this).attr('href'),
            top = $(id).offset().top - 100;
        $('body,html').animate({scrollTop: top}, 1000);
    });
        
}

