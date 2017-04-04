$(window).on('scroll', function(){

	/* --- init menu switcher ---*/
	/*--------------------------------------------------------------------*/
	var $window = $(window).scrollTop() - $(window).height() / 3;

	if ($('.definition').hasClass('js-nav')) {
		// console.log($window + ' wind');

		if( ($window) < $('#first').offset().top){
			$('.nav_scroll__btn_up').addClass('is_hiden');
			$('.menu__list').removeClass('is_active');
		}
		else if (($window) < $('#second').offset().top){
			$('.page').removeClass('is_here');
			$('#second').addClass('is_here');
			$('.nav_scroll__btn_up').removeClass('is_hiden');
			$('.menu__list').removeClass('is_active');
			$('.menu__list').eq(0).addClass('is_active');
		}
		else if (($window) < $('#third').offset().top){
			$('.page').removeClass('is_here');
			$('#third').addClass('is_here');
			$('.menu__list').removeClass('is_active');
			$('.menu__list').eq(1).addClass('is_active');
		}
		else if (($window) < $('#fourth').offset().top + 60){
			$('.page').removeClass('is_here');
			$('#fourth').addClass('is_here');
			$('.menu__list').removeClass('is_active');
			$('.menu__list').eq(2).addClass('is_active');
		}
		else if (($window) < $('#fifth').offset().top){
			$('.page').removeClass('is_here');
			$('#fifth').addClass('is_here');
			$('.menu__list').removeClass('is_active');
			$('.menu__list').eq(3).addClass('is_active');
		}
		else if (($window) < $('#sixth').offset().top ){
			$('.page').removeClass('is_here');
			$('#sixth').addClass('is_here');
			$('.menu__list').removeClass('is_active');
			$('.menu__list').eq(4).addClass('is_active');
		}
		else if (($window) < $('#seventh').offset().top ){
			$('.page').removeClass('is_here');
			$('#seventh').addClass('is_here');
			$('.nav_scroll__btn_down').removeClass('is_hiden');
			$('.menu__list').removeClass('is_active');
			$('.menu__list').eq(4).addClass('is_active');
		}
		else if (($window) < $('#eighth').offset().top + 100 ){
			$('.page').removeClass('is_here');
			$('#eighth').addClass('is_here');
			$('.nav_scroll__btn_down').addClass('is_hiden');
			$('.menu__list').removeClass('is_active');
			$('.menu__list').eq(5).addClass('is_active');
		}

	}


});//$(window).on('scroll')


$(document).ready(function () {
	$('.nav_scroll__btn_up').on('click', function () {

		var $prevPage = $('.is_here').prevAll('.page:first');
		$("html, body").animate({scrollTop : $prevPage.offset().top - 60}, 800);
		return false;
	});

	$('.nav_scroll__btn_down').on('click', function () {

		var $prevPage = $('.is_here').next('.page');
		$("html, body").animate({scrollTop : $prevPage.offset().top - 60}, 800);
		return false;
	});
});