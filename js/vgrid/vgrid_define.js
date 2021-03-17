$(function()
{
	var vg = $("#grid-content").vgrid({
		easeing: "easeOutQuint",
		useLoadImageEvent: true,
    useFontSizeListener: true,
		time: 300,
		delay: 10,
		fadeIn: {
			time: 500,
			delay: 30
		}
	});
});
