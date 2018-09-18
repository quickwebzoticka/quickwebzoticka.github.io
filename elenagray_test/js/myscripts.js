$(document).ready(function() {
  function initSlick() {
  var slickPrev = '<a href="#" class="slick-prev"><svg width="50" height="91" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.7 47" enable-background="new 0 0 25.7 47"><path d="M4.3 23.5l21.4-21.3-2.2-2.2-23.5 23.5 23.5 23.5 2.2-2.2z"/></svg></a>';
  var slickNext = '<a href="#" class="slick-next"><svg width="50" height="91" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 25.7 47" enable-background="new 0 0 25.7 47"><path d="M21.3 23.5l-21.3 21.3 2.2 2.2 23.5-23.5-23.5-23.5-2.2 2.2z"/></svg></a>';

  jQuery('.slider').slick({
    prevArrow: slickPrev,
    nextArrow: slickNext,
    dots: true,
    arrows: false,
    infinite: true,
    speed: 1000,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    pauseOnHover: false,
    centerMode: true
  });
  };
  initSlick();

  var hasSub,
      subMenu,
      hasSubSub,
      subMenuSab,
      mobMenu;

  hasSub = $('.has_sub');
  subMenu = $('.submenu');
  hasSubSub = $('.has_sub_sub');
  subMenuSab = $('.submenu_sub');
  mobMenu = $('.menu');

  $(hasSub).hover(function() {
    subMenu.slideDown('slow');
  }, function() {
    subMenu.slideUp('slow');
  });

  $(hasSubSub).hover(function() {
    subMenuSab.slideDown('slow');
  }, function() {
    subMenuSab.slideUp('slow');
  });

  $(mobMenu).click(function(event) {
    $('.main_menu').slideToggle('fast');
  });
});