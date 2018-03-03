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
        $(".navbar_nav").slideToggle();
    });

  $(document).click( function(event){

 	if( $(event.target).closest(".open").length || $(event.target).closest(".navbar_nav").length || $(".navbar_nav").css("display", "none") ) 
        return;
      $(".navbar_nav").slideToggle();
      event.stopPropagation();

    });