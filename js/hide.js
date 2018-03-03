 $(document).click( function(event){

 	if( $(event.target).closest("#slider-div").length || $(event.target).closest("#amount").length ) 
        return;
      $("#slider-div").css("height", "0");
      event.stopPropagation();

    });

 $("#amount").click( function(event){

      $("#slider-div").css("height", "40%");

    });

  $(document).click( function(event){

 	if( $(event.target).closest("#slider-div-1").length || $(event.target).closest("#amount-1").length ) 
        return;
      $("#slider-div-1").css("height", "0");
      event.stopPropagation();

    });

 $("#amount-1").click( function(event){

      $("#slider-div-1").css("height", "40%");

    });

  $(document).click( function(event){

 	if( $(event.target).closest("#slider-div-2").length || $(event.target).closest("#amount-2").length ) 
        return;
      $("#slider-div-2").css("height", "0");
      event.stopPropagation();

    });

 $("#amount-2").click( function(event){

      $("#slider-div-2").css("height", "40%");

    });

 $('.open').click(function() {
    $('.navbar_nav').animate({width: 'toggle'});
    });

  // $(document).click( function(event){

 	// if( $(event.target).closest(".open").length || $(event.target).closest(".navbar_nav").length || $(".navbar_nav").css("display", "none") ) 
  //       return;
  //   $('.navbar_nav').animate({width: 'toggle'});
  //     event.stopPropagation();

  //   });

(function() {

  "use strict";

  var toggles = document.querySelectorAll(".cmn-toggle-switch");

  for (var i = toggles.length - 1; i >= 0; i--) {
    var toggle = toggles[i];
    toggleHandler(toggle);
  };

  function toggleHandler(toggle) {
    toggle.addEventListener( "click", function(e) {
      e.preventDefault();
      (this.classList.contains("active") === true) ? this.classList.remove("active") : this.classList.add("active");
    });
  }

})();