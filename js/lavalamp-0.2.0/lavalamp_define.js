$(function() {
	$("#mainMenubar").lavaLamp({
		fx: "backout",
		speed: 1000,
		click: function(event, menuItem) {
			return true;
		}
	});
});
