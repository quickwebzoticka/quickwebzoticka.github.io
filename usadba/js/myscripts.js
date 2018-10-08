$(document).ready(function() {
  $.fn.maphilight.defaults = {
    fill: true,
    fillColor: '0000FF',
    fillOpacity: 0.4,
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
});