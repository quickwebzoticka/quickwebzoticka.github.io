$(document).click( function(event){

	if( $(event.target).closest("#trigger_consult1").length || $(event.target).closest("#consult1").length ) {
    	$('#consult1').slideDown('fast');
    	$('#trigger_consult1').addClass('active');
    } else {
    	$('#consult1').slideUp('fast');
    	$('#trigger_consult1').removeClass('active');
    }
});

$(document).click( function(event){

	if( $(event.target).closest("#trigger_consult2").length || $(event.target).closest("#consult2").length ) {
    	$('#consult2').slideDown('fast');
    	$('#trigger_consult2').addClass('active');
    } else {
    	$('#consult2').slideUp('fast');
    	$('#trigger_consult2').removeClass('active');
    }
});

$(document).click( function(event){

	if( $(event.target).closest("#trigger_consult3").length || $(event.target).closest("#consult3").length ) {
    	$('#consult3').slideDown('fast');
    	$('#trigger_consult3').addClass('active');
    } else {
    	$('#consult3').slideUp('fast');
    	$('#trigger_consult3').removeClass('active');
    }
});

$(document).click( function(event){

	if( $(event.target).closest("#trigger_consult4").length || $(event.target).closest("#consult4").length ) {
    	$('#consult4').slideDown('fast');
    	$('#trigger_consult4').addClass('active');
    } else {
    	$('#consult4').slideUp('fast');
    	$('#trigger_consult4').removeClass('active');
    }
});