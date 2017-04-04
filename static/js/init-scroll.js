$(function () {

	Scroll.initScroll({
		conteiner: '.affiliate__scroll'
	});

	Scroll.slowAncorScroll({
		conteiner: '.cupon__get',
		clickItem: 'a',
		time: 1500
	});




	Scroll.slowAncorMenuScroll({
		class: 'is_here',
		time: 1500,
		offset: 80
	});


});

$(document).ready(function() {

	$('.logo').on('click', function(){

		$('.menu__list').removeClass('is_active');

		$moveItem = $(this).attr('href');
		console.log($moveItem);

		$('.page').removeClass('is_here');
		$($moveItem).addClass('is_here');

		 $("html, body").animate({scrollTop : $($moveItem).offset().top - 60}, 1500);
		return false;
	});

	$('.cupon-top-link').on('click', function(){
			var $moveItem = $(this).attr('href');

		 $("html, body").animate({scrollTop : $($moveItem).offset().top - 60}, 1500);
		return false;
	});


	// $conteiner.on("click", $clickItem, function (event) {
	// 	event.preventDefault();

	// 	var id  = $(this).attr('href'),
	// 	top = $(id).offset().top - 80;

	// 	$('body,html').animate({scrollTop: top}, $time);

	// });

	// -------------------------------------------

	// $('.menu').on('click', '.menu__link', function(){
	// 	event.preventDefault();

	// 	$('.menu__list').removeClass('is_active');
	// 	$(this).closest('.menu__list').addClass('is_active');

	// 	$moveItem = $(this).attr('href');
	// 	console.log($moveItem);

	// 	$('.page').removeClass(opt.newClass);
	// 	$($moveItem).addClass('!!!!!!!!!!!!');
	// 	// фнимация переключения
	// 	 $("html, body").animate({scrollTop : $($moveItem).offset().top - 80}, 1500);
	// 	return false;
	// });


});