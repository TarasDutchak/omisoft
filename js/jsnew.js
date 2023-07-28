(function ($) {
	$(document).ready(function () {

		$('.servcat').click(function () {
			$(this).toggleClass('rotate');
			$(this).next('.footer__list').slideToggle()
		});

		// slider cases
		$('.casessteps').slick({
			slidesToScroll: 1,
			arrows: false,
			infinite: false,
			speed: 1000,
			touchMove: false,
			adaptiveHeight: true,
			swipe: false
		});

		// ------------------

		$('.slide-next').click(function (e) {
			//e.preventDefault(); 
			$('.casessteps').slick('slickNext');
		});
		$('.backslide').click(function (e) {
			//e.preventDefault(); 
			$('.casessteps').slick('slickPrev');
		});
		$(document).on('click', '.slide-prev', function (e) {
			//e.preventDefault(); 
			$('.casessteps').slick('slickGoTo', 0);
		});



		$('a[data-slide]').click(function (e) {
			e.preventDefault();
			var slideno = $(this).data('slide');
			$('.casessteps').slick('slickGoTo', slideno - 1);
		});

		// popup
		$('.popup__btn').on('click', function (e) {
			e.preventDefault();
			var indexPopup = $(this).attr('data-popup');
			$('.popup__window').removeClass('active');
			$('.' + indexPopup).addClass('active');
			return false;
		});

		$('.popup__close').on('click', function (e) {
			e.preventDefault();
			$('.popup__window').removeClass('active');
		});

		// DEMO 


		$('.ouruniswap__slider').slick({
			infinite: true,
			slidesToShow: 7,
			slidesToScroll: 1,
			arrows: false,
			autoplay: true,
			autoplaySpeed: 0,
			speed: 3500,
			cssEase: 'linear',
			pauseOnHover: false,
			pauseOnFocus: false,
			swipe: false,
			responsive: [
				{
					breakpoint: 1441,
					settings: {
						slidesToShow: 6,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 1301,
					settings: {
						slidesToShow: 5,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 992,
					settings: {
						slidesToShow: 4,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 769,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 3,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 401,
					settings: {
						slidesToShow: 2.5,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 361,
					settings: {
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
			]
		});


		$('.ourpackage_slider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			arrows: false,
			infinite: false,
			responsive: [
				{
					breakpoint: 1200,
					settings: {
						slidesToShow: 2,
						adaptiveHeight: true
					}
				},
				{
					breakpoint: 767,
					settings: {
						slidesToShow: 1,
						adaptiveHeight: true
					}
					// settings: {
					// 	settings: "unslick"
					// }
				},
				{
					breakpoint: 575,
					settings: {
						slidesToShow: 1.3,
						adaptiveHeight: true
					}
				},
				{
					breakpoint: 361,
					settings: {
						slidesToShow: 1,
						adaptiveHeight: true
					}
				},

			]
		});
















		var delay = 0,
			step = 12 / $('.animitam').length; /* 5 is the animation duration */
		$('.animitam').each(function () {
			$(this).css('animation-delay', -delay + "s");
			delay += step;
		})










	
















	});



	// tabs
	$('.tabbtn').click(function (e) {
		// e.preventDefault();
		$('.tabbtn').removeClass('active');
		$(this).addClass('active');
	});

	$('.tabbtn.btn1').click(function () {
		$('.tabcontent').addClass('hide');
		$('.tabcontent.tbcont1').removeClass('hide');
	});

	$('.tabbtn.btn2').click(function () {
		$('.tabcontent').addClass('hide');
		$('.tabcontent.tbcont2').removeClass('hide');
	});
	/* <a href="contacts.html#sectab" class="extra-tab">link</a> */
	document.addEventListener("DOMContentLoaded", function () {
		if ('#sectab' === window.location.hash) {
			$('.tabcontent').addClass('hide');
			$('.tabcontent.tbcont2').removeClass('hide');
			$('.tabbtn').removeClass('active');
			$('.tabbtn.btn2').addClass('active');
		}
	});




}(jQuery));