$(document).ready(function() {


  AOS.init({
    once: true
  });


  $('body').on('click', '.main-form-check__label', function(event) {
    event.preventDefault();
    $(this).children('.main-form-check__square').toggleClass('main-form-check__square__active');
    if ($(this).children('.main-form-check__check').is(':checked')) {
      $(this).children('.main-form-check__check').prop('checked', false);
    } else {
      $(this).children('.main-form-check__check').prop('checked', true);
    }
  });

  $('.main-form__wrapper input').keyup(function() {
    var a = $(this);
    console.log(a.val());
    if ($(this).val().length > 0) {
      $(this).siblings('.main-form__placeholder').addClass('filled');
    } else {
      $(this).siblings('.main-form__placeholder').removeClass('filled');
    };
  });
});