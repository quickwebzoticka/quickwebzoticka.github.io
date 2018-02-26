$(document).ready(function() {

	var
		currentBackgroundImageNumber = 1;
		timer = setInterval(function() {


			currentBackgroundImageNumber++;
			if (currentBackgroundImageNumber > 4) {
				currentBackgroundImageNumber = 1;
			}
			$('.main-width').css('background', 'url(../img/slider/' + currentBackgroundImageNumber + '.png) no-repeat 0 0');
			$('.main-width').css('background-size', 'cover');
		}, 7000)

});