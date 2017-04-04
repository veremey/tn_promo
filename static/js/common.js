$(document).ready(function() {

	if($('.carusel__item').length > 1){
		$('.carusel').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			infinite: true,
			dots: true,
			// autoplay: true,
			arrows: false
		});
	}

	$('.assortment').slick({
		slidesToShow: 1,
		slidesToScroll: 1,
		dots: true,
		autoplay: false,
		arrows: false,
		customPaging : function(slider, i) {
			var thumb = $(slider.$slides[i]).find('.assortment__pic').data('thumb');
			return '<a><img src="'+thumb+'"></a>';
			// console.log(thumb);
		},
	});
	/* --- assortment ---*/
	$('.cutting__item').on('click', function () {
		var showSlider = $(this).data('id');
		var slide = $('#'+showSlider).data('up');
		console.log(slide);

		$('.cutting__item').removeClass('is_active');
		$(this).addClass('is_active');
		$('.assortment').removeClass('is_active');
		$('.assort__wrap').css({
			'transform': 'translateY(' + slide + 'px)'
		});

		// $('#'+showSlider).addClass('is_active');
	});


	/*--------------------------------------------------------------------*/

	$('[data-fancybox^="gallery"]').fancybox({
		buttons: {
			position : 'center'
		},
		thumbs: {
			showOnStart : false
		}
	});



	if($('.affiliate__item').length > 1){
		$('.affiliate').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			infinite: false,
			centerMode: false,
			// dots: true,
			variableWidth: true,
			arrows: true
		});
	}

}); //docready

$(window).on('scroll', function () {
	fixHeader();
});



function fixHeader(){
	var $height = $('.header').height();
	var $caruselOffset = $height - $(window).scrollTop();
	var $neadHeight = $caruselOffset > 60 ? $caruselOffset : 60;

	if( $caruselOffset > -80 ) {
		$('.header').css({
			'height' : '76px',
		});
	}
		else { $('.header').css({
			'height' : $neadHeight
		});
	}
}