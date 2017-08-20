$(document).ready(function () {
	$(".close").click(function () {
		$(this).parent().fadeOut(250);
	});


	$("#schedule").click(function () {
		$("#popup").fadeIn(250);
		return true;
	});
	