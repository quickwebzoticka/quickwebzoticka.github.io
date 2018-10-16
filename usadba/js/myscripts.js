$(document).ready(function() {
  $.fn.maphilight.defaults = {
    fill: true,
    fillColor: '0000FF',
    fillOpacity: 0.3,
    stroke: true,
    strokeColor: 'ffffff',
    strokeOpacity: 1,
    strokeWidth: 2,
    fade: true,
    alwaysOn: false,
    neverOn: false,
    groupBy: false,
    wrapClass: true,
    shadow: true,
    shadowX: 100,
    shadowY: 100,
    shadowRadius: 100,
    shadowColor: '000000',
    shadowOpacity: 0.8,
    shadowPosition: 'outside',
    shadowFrom: true
  };
  $('.foo').maphilight();
  AOS.init({
    once: true
  });
  $('area').hover(function() {
      $('.head').addClass('blacked');
      $('.foo').addClass('blacked');
  }, function() {
      $('.head').removeClass('blacked');
      $('.foo').removeClass('blacked');
  });
    $('.tooltip').tooltipster({
        animation: 'fade',
        delay: 0,
        plugins: ['follower']
    });
  // function(){
  //   var id_res=$(this).attr('id-res');
  //   var area=$(document).find('area[id-res="'+id_res+'"]');area.parent().tooltipster('open');
  // }
});
