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

  $(document).click( function(event){

 	if( $(event.target).closest("#slider-div-modal").length || $(event.target).closest("#amount-modal").length ) 
        return;
      $("#slider-div-modal").css("height", "0");
      event.stopPropagation();

    });

 $("#amount-modal").click( function(event){

      $("#slider-div-modal").css("height", "40%");

    });

   $(document).click( function(event){

 	if( $(event.target).closest("#slider-div-modal-1").length || $(event.target).closest("#amount-modal-1").length ) 
        return;
      $("#slider-div-modal-1").css("height", "0");
      event.stopPropagation();

    });

 $("#amount-modal-1").click( function(event){

      $("#slider-div-modal-1").css("height", "40%");

    });

 $('.open').click(function() {
    $('.navbar_nav').animate({width: 'toggle'});
    $('.menu').animate({opacity: 'toggle', left: ['toggle', 'swing']});

    });

    $(document).click( function(event){

    if( $(event.target).closest("#toggle_commun_modal").length || $(event.target).closest("#trigger_commun_modal").length ) 
          return;
        // $("#toggle_detail_staff-1").css("height", "0%");
        $("#toggle_commun_modal").css("transform", "scale(0)");
        event.stopPropagation();

      });

    $("#trigger_commun_modal").click( function(event){

        // $("#toggle_detail_staff-1").css("height", "100%");
        $("#toggle_commun_modal").css("transform", "scale(1)");
      });

    $(document).click( function(event){

    if( $(event.target).closest("#toggle_commun").length || $(event.target).closest("#trigger_commun").length ) 
          return;
        // $("#toggle_detail_staff-1").css("height", "0%");
        $("#toggle_commun").css("transform", "scale(0)");
        event.stopPropagation();

      });

    $("#trigger_commun").click( function(event){

        // $("#toggle_detail_staff-1").css("height", "100%");
        $("#toggle_commun").css("transform", "scale(1)");
      });

  // $(document).click( function(event){

 	// if( $(event.target).closest("#toggle_trans").length || $(event.target).closest("#trigger_trans").length ) 
  //       return;
  //     $("#toggle_trans").css("height", "0");
  //     event.stopPropagation();

  //   });

 	// $("#trigger_trans").click( function(event){

  //     $("#toggle_trans").css("height", "190%");

  //   });

  $(document).click( function(event){

    if( $(event.target).closest("#toggle_trans").length || $(event.target).closest("#trigger_trans").length ) 
          return;
        // $("#toggle_detail_staff-1").css("height", "0%");
        $("#toggle_trans").css("transform", "scale(0)");
        event.stopPropagation();

      });

    $("#trigger_trans").click( function(event){

        // $("#toggle_detail_staff-1").css("height", "100%");
        $("#toggle_trans").css("transform", "scale(1)");
      });

  // $(".open").click( function(event){

 	// if( $(".menu").css("display", "none") ) 
  //       $(".menu").css("display", "inline-block");

  //   });

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

$(function () {
  $('[data-toggle="tooltip"]').tooltip()
});