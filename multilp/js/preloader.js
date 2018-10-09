$(document).ready(function () {
    var preloader    = $('#preloader'), // селектор прелоадера
        imagesCount  = $('img').length, // количество изображений
        dBody        = $('body'), //обращаемся к body
        percent      = 100 / imagesCount, // количество % на одну картинку
        progress     = 0, // точка отсчета
        imgSum       = 77, // количество картинок
        loadedImg    = 0,
        whiteLine    = $('.dws-progress-bar svg circle'); // счетчик загрузки картинок

    console.log(imagesCount);

    if (imagesCount >= imgSum && imagesCount > 0) {
        for (var i = 0; i < imagesCount; i++) { // создаем клоны изображений
            var img_copy        = new Image();
            img_copy.src        = document.images[i].src;
            img_copy.onload     = img_load;
            img_copy.onerror    = img_load;
        }

        function img_load () {
            progress += percent;
            loadedImg++;
            if (progress >= 100 || loadedImg == imagesCount) {
                preloader.delay(2000).animate({opacity: '0'}, 2000, function(){
			    	dBody.css('overflow', 'unset');
                    preloader.css('display', 'none');
			    });
            }
            whiteLine.css('stroke-dasharray', parseInt(progress) + '% ' + parseInt(101 - progress) + '%');
            
        }
    } else {
        preloader.remove();
    }
});