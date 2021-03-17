$(document).ready(function () {
	var slider = $('.slider').bxSlider({
		auto: true,
		pause: 5000,
		speed: 1000,
		pager: true,
		mode: 'fade',
		controls: false,
		onSlideAfter: function () {
			slider.startAuto();
		}
	});
	var slider = $('.comike_slider').bxSlider({
		auto: false,
		pause: 5000,
		speed: 1000,
		pager: true,
		mode: 'horizontal',
		controls: true,
	});
});