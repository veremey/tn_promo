$(function () {

	Scroll.initScroll({
		conteiner: '.affiliate__scroll'
	});


	// Scroll.initScroll({
	// 	conteiner: '.complect__text'
	// });



});

$(document).ready(function() {
	$(".cupon__get").on("click","a", function (event) {
		event.preventDefault();

		var id  = $(this).attr('href'),
		top = $(id).offset().top - 80;

		$('body,html').animate({scrollTop: top}, 1500);

	});
});