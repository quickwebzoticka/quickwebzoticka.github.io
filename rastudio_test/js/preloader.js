$(document).ready(function () {
    var preloader    = $('#preloader'), // селектор прелоадера
        imagesCount  = $('img').length, // количество изображений
        dBody        = $('body'), //обращаемся к body
        percent      = 100 / imagesCount, // количество % на одну картинку
        progress     = 0, // точка отсчета
        imgSum       = 32, // количество картинок
        loadedImg    = 0,
        whiteLine    = $('.dws-progress-bar'); // счетчик загрузки картинок

    // if (imagesCount >= imgSum && imagesCount > 0) {
    // preloader.css('background', 'red');
    // dBody.css('overflow', 'hidden');

    //     // $(".dws-progress-bar").circularProgress({
    //     //     color: "#25ffe4",
    //     //     line_width: 17,
    //     //     height: "350px",
    //     //     width: "350px",
    //     //     percent: 0,
    //     //     // counter_clockwise: true,
    //     //     starting_position: 25
    //     // }).circularProgress('animate', percent, 1000);

    //     for (var i = 0; i < imagesCount; i++) { // создаем клоны изображений
    //         var img_copy        = new Image();
    //         img_copy.src        = document.images[i].src;
    //         img_copy.onload     = img_load;
    //         img_copy.onerror    = img_load;
    //     }

    //     function img_load () {
    //         progress += percent;
    //         loadedImg++;
    //         if (progress >= 100 || loadedImg == imagesCount) {
    //             preloader.delay(1000).fadeOut('slow');
    //             dBody.css('overflow', '');
    //         }
    //         whiteLine.animate({width: progress}, 50);
            
    //     }
    // } else {
    //     preloader.remove();
    // }

    // dBody.css('overflow', 'hidden');
    whiteLine.animate({width: '100%'}, 5000).animate({opacity: '0'}, 2000);
    preloader.delay(5000).animate({width: '0%'}, 2000, function(){

    	$('.head_container').css({
    		transform: 'translate3d(0, 0, 0)',
    		opacity: '1'
    	});

    	$('.right-side').css({
    		transform: 'translate3d(0, 0, 0)',
    		opacity: '1'
    	});
    });

});


// for (var i = 0; i < img_count; i++){ // создаем клон изображений
//     var
//         img_copy            = new Image();
//         img_copy.src        = document.images[i].src;
//         img_copy.onload     = img_load;
//         img_copy.onerror    = img_load;
// }   