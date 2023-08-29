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



		// tabs
		$('.tabbtn').click(function (e) {
			e.preventDefault();
			$('.tabbtn').removeClass('active');
			$(this).addClass('active');

			var tabId = $(this).data('tab');
			$('.tabcontent').removeClass('show');
			$('#' + tabId).addClass('show');


			$('.casessteps').slick("setPosition", 0);
		});

		// animation case
		var delay = 0,
			step = 12 / $('.animitam').length; /* 5 is the animation duration */
		$('.animitam').each(function () {
			$(this).css('animation-delay', -delay + "s");
			delay += step;
		})

		// service new

		$('.testimonialslider-new').slick({
			centerMode: true,
			centerPadding: '400px',
			slidesToShow: 1,
			arrows: false,
			dots: true,
			arrows: true,
			nextArrow: '<button type="button" class="slick-next"></button>',
			prevArrow: '<button type="button" class="slick-prev"></button>',
			responsive: [{
				breakpoint: 1801,
				settings: {
					centerPadding: '300px',
				}
			},
			{
				breakpoint: 1301,
				settings: {
					centerPadding: '200px',
				}
			},
			{
				breakpoint: 1200,
				settings: {
					centerPadding: '100px',
				}
			},
			{
				breakpoint: 992,
				settings: {
					centerPadding: '0',
				}
			},


			]
		});


		$('.wwd__tablinks .tabbtn').click(function (e) {
			// e.preventDefault();
			$('.tabbtn').parent('li').removeClass('active');
			$(this).parent('li').addClass('active');
		});

		// Tech - animation

		// servtech
		if ($('.servtech').length > 0) {
			function addActiveClass() {
				const servtechElement = document.querySelector('.servtech');
				const elementRect = servtechElement.getBoundingClientRect();
				const elementTop = elementRect.top;
				const elementBottom = elementRect.bottom;
				const windowHeight = window.innerHeight;

				// Calculate the tolerance (a percentage of the window height)
				const tolerance = 0.2; // 20% tolerance
				const offset = windowHeight * tolerance;

				if (elementTop <= windowHeight / 2 + offset && elementBottom >= windowHeight / 2 - offset) {
					servtechElement.classList.add('active');
				} else {
					servtechElement.classList.remove('active');
				}
			}

			// Call the function on initial page load and on scroll
			window.addEventListener('scroll', addActiveClass);
			addActiveClass(); // Call it initially to set the class when the page loads

		}




		// slider
		$('.workinsliderserv').slick({
			slidesToShow: 6,
			slidesToScroll: 1,
			arrows: false,
			infinite: false,
			responsive: [{
				breakpoint: 1200,
				settings: {
					slidesToShow: 5,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 4,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 3,
				}
			},
			{
				breakpoint: 575,
				settings: {
					slidesToShow: 1.5,
				}
			},
			]
		});


		// Social select
		$('.socialnickname__selected').click(function () {
			$('.socialnickname__list').toggle();
		});

		$('.socialnickname__list ul li').click(function () {
			$('.socialnickname__list ul li').removeClass('active');
			$(this).addClass('active');
			$('.socialnickname__list').slideUp();
		});


		const liItems = document.querySelectorAll('.socialnickname__list li');
		const selectedImage = document.querySelector('.socialnickname__selected img');

		liItems.forEach(li => {
			li.addEventListener('click', () => {
				const imgSrc = li.querySelector('img').getAttribute('src');
				selectedImage.setAttribute('src', imgSrc);
			});
		});








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



	// SERVICES AND SOLUTIONS


	$('.ssdescrsect__slider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		infinite: false,
		responsive: [{
			breakpoint: 1200,
			settings: {
				slidesToShow: 2.8,
			}
		},
		{
			breakpoint: 1100,
			settings: {
				slidesToShow: 2.5,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1.9,
			}
		},

		{
			breakpoint: 801,
			settings: {
				slidesToShow: 1.5,
			}
		},

		]
	});


	$('.casessteps').on('afterChange', function (event, slick, currentSlide) {
		if (currentSlide === 0) {
			$('.ssstepsprogress').removeClass('act2');
			$('.ssstepsprogress').removeClass('act3');
			$('.ssstepsprogress').removeClass('act4');
			$('.ssstepsprogress').addClass('act1');
		}
		if (currentSlide === 1) {
			$('.ssstepsprogress').removeClass('act1');
			$('.ssstepsprogress').removeClass('act3');
			$('.ssstepsprogress').removeClass('act4');
			$('.ssstepsprogress').addClass('act2');
		}
		if (currentSlide === 2) {
			$('.ssstepsprogress').removeClass('act1');
			$('.ssstepsprogress').removeClass('act2');
			$('.ssstepsprogress').removeClass('act4');
			$('.ssstepsprogress').addClass('act3');
		}
		if (currentSlide === 3) {
			$('.ssstepsprogress').removeClass('act1');
			$('.ssstepsprogress').removeClass('act2');
			$('.ssstepsprogress').removeClass('act3');
			$('.ssstepsprogress').addClass('act4');
		}
	});


	//   tabs map
	$('.tabbtn').click(function (e) {
		e.preventDefault();
		$('.tabbtn').removeClass('active');
		$(this).addClass('active');

		var tabId = $(this).data('tab');
		$('.tabcontent').removeClass('show');
		$('#' + tabId).addClass('show');
	});

	$('.maptabs .tabbtn').click(function (e) {
		e.preventDefault();

		var cId = $(this).data('country');
		$('.svgcountry').removeClass('active');
		$('#' + cId).addClass('active');
	});

	// Provide serv slider

	$('.provideservices__slider').slick({
		centerMode: true,
		slidesToShow: 1,
		slidesToScroll: 1,
		arrows: false,
		centerPadding: '400px',
		arrows: true,
		dots: true,
		nextArrow: '<button type="button" class="slick-next"></button>',
		prevArrow: '<button type="button" class="slick-prev"></button>',
		responsive: [
			{
				breakpoint: 1801,
				settings: {
					centerPadding: '300px',
				}
			},
			{
				breakpoint: 1601,
				settings: {
					centerPadding: '185px',
				}
			},
			{
				breakpoint: 1200,
				settings: {
					centerPadding: '100px',
				}
			},

			{
				breakpoint: 992,
				settings: {
					centerPadding: '0px',
				}
			},
			{
				breakpoint: 768,
				settings: {
					centerPadding: '0px',
					adaptiveHeight: true
				}
			},

		]
	});


	$('.tagsslider').slick({
		dots: false,
		infinite: false,
		speed: 300,
		slidesToShow: 1,
		variableWidth: true,
		arrows: false,
		responsive: [
			{
				breakpoint: 1801,
				settings: {
					centerPadding: '300px',
				}
			},


		]
	});

	$('.tabletcountry span').click(function(){
		$('.tabcontent').removeClass('show');
	})




	$('.provideservices__slide .provideservices__slideinfo .title').click(function(){
		$(this).parents('.provideservices__slide').css('height', 800)
		$('.provideservices__slider').slick('resize');
	});







	// $('.my-slider').slick('resize');


}(jQuery));