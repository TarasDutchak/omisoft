(function ($) {

	/*** PHP localize vars ***/
	// let stages_count = 7;

	$(document).ready(
		function () {

			function slider_responsive(count) {
				let responsiveArray = [];

				if (count >= 3) {
					responsiveArray.push({
						breakpoint: 769,
						settings: {
							slidesToShow: 2,
							slidesToScroll: 1,
						}
					}, {
						breakpoint: 576,
						settings: {

							slidesToShow: 1.5,
							slidesToScroll: 1,
						}
					})
				}
				if (count >= 4) {
					responsiveArray.push({
						breakpoint: 992,
						settings: {
							slidesToShow: 3,
							slidesToScroll: 1,
						}
					})
				}
				if (count >= 5) {
					responsiveArray.push({
						breakpoint: 1201,
						settings: {
							slidesToShow: 4,
							slidesToScroll: 1,
						}
					})
				}
				if (count >= 6) {
					responsiveArray.push({
						breakpoint: 1601,
						settings: {
							slidesToShow: 5,
							slidesToScroll: 1,
						}
					})
				}
				if (count >= 7) {
					responsiveArray.push({
						breakpoint: 1601,
						settings: {
							slidesToShow: 6,
							slidesToScroll: 1,
						}
					})
				}

				return responsiveArray;
			}
			let stages_count = $('.linepoints').data('point');
			$('.servoperateslider').slick({
				slidesToShow: stages_count,
				slidesToScroll: 1,
				arrows: false,
				infinite: false,
				responsive: slider_responsive(stages_count)
			});

			$('.workinslider').slick({
				slidesToShow: 6,
				slidesToScroll: 1,
				arrows: false,
				infinite: false,
				responsive: slider_responsive(stages_count)
			});

			// FAQ.
			$('.service-faqrow__header').click(
				function () {
					$('.service-faqrow__header').not($(this)).removeClass('open');
					$(this).toggleClass('open');

					$('.service-faqrow__body').not($(this).next('.service-faqrow__body')).slideUp();
					$(this).next('.service-faqrow__body').slideToggle('fast');
				}
			);

			if ($('.worksect').length > 0) {
				$(
					function () {
						$(document).scroll(
							function () {
								if ($('.case1').length > 0) {
									if ($(this).scrollTop() >= $('.case1').offset().top - 350) {

										let bgattr = $('.case1').attr('data-color');
										$('.worksect').css('background', bgattr);
									}
								}
								if ($('.case2').length > 0) {
									if ($(this).scrollTop() >= $('.case2').offset().top - 350) {

										let bgattr = $('.case2').attr('data-color');
										$('.worksect').css('background', bgattr);
									}
								}
								if ($('.case3').length > 0) {

									if ($(this).scrollTop() >= $('.case3').offset().top - 350) {

										let bgattr = $('.case3').attr('data-color');
										$('.worksect').css('background', bgattr);
									}
								}
								if ($('.case4').length > 0) {

									if ($(this).scrollTop() >= $('.case4').offset().top - 350) {
										let bgattr = $('.case4').attr('data-color');
										$('.worksect').css('background', bgattr);
									}
								}
								if ($('.case5').length > 0) {

									if ($(this).scrollTop() >= $('.case5').offset().top - 350) {
										let bgattr = $('.case5').attr('data-color');
										$('.worksect').css('background', bgattr);
									}
								}
							}
						);
					}
				);
			}
		}
	);



	$('.testimonialslider').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		responsive: [{
			breakpoint: 1380,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				adaptiveHeight: true
			}
		}

		]
	});

	// 06.05 - footer
	$('.footerteamsl').slick({
		autoplay: true,
		autoplaySpeed: 500,
		arrows: false,
		speed: 1500,
		centerMode: false,
		dots: false,
		slidesToShow: 7,
		slidesToScroll: 1,
		infinite: true,
		responsive: [{
			breakpoint: 1601,
			settings: {
				slidesToShow: 7,
			}
		},
		{
			breakpoint: 1200,
			settings: {
				slidesToShow: 6,
			}
		},
		{
			breakpoint: 767,
			settings: {
				slidesToShow: 4,
			}
		},
		{
			breakpoint: 575,
			settings: {
				slidesToShow: 3,
			}
		},
		]
	});

	// close banner
	$('.closebox').click(function () {
		$('.header__message').slideUp();
	});


	// page progress bar
	if ($('.progress-bar').length > 0) {
		window.onscroll = function () {
			myFunction()
		};

		function myFunction() {
			var winScroll = document.body.scrollTop || document.documentElement.scrollTop;
			var height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
			var scrolled = (winScroll / height) * 100;
			document.getElementById("myBar").style.width = scrolled + "%";
		}
	}

	// 02.08

	// tabs
	$('.tabsheader__btn').click(function (e) {
		// e.preventDefault();
		$('.tabsheader__btn').removeClass('active');
		$(this).addClass('active');
	});

	$('.tabsheader__btn.btn1').click(function () {
		$('.tabsbody__tabcontent').addClass('hide');
		$('.tabsbody__tabcontent.tbcont1').removeClass('hide');
	});

	$('.tabsheader__btn.btn2').click(function () {
		$('.tabsbody__tabcontent').addClass('hide');
		$('.tabsbody__tabcontent.tbcont2').removeClass('hide');
	});

	$('.tabsheader__btn.btn3').click(function () {
		$('.tabsbody__tabcontent').addClass('hide');
		$('.tabsbody__tabcontent.tbcont3').removeClass('hide');
	});



	if ($('textarea').length) {
		var textarea = document.querySelector('textarea');

		textarea.addEventListener('keyup', function () {
			if (this.scrollTop > 0) {
				this.style.height = this.scrollHeight + "px";
			}
		});
	}

	$(document).on('change', ':file', function () {
		var input = $(this),
			numFiles = input.get(0).files ? input.get(0).files.length : 1,
			label = input.val().replace(/\\/g, '/').replace(/.*\//, '');
		input.trigger('fileselect', [numFiles, label]);
	});

	$(document).ready(function () {
		$(':file').on('fileselect', function (event, numFiles, label) {
			$('label span text').text(label);
			$('label span').addClass('active');
		});

	});



	$('.testimonialslider-abus').slick({
		slidesToShow: 3,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		responsive: [{
			breakpoint: 1380,
			settings: {
				slidesToShow: 2,
			}
		},
		{
			breakpoint: 992,
			settings: {
				slidesToShow: 1,
				adaptiveHeight: true
			}
		},
		{
			breakpoint: 576,
			settings: {
				settings: "unslick"
			}
		}

		]
	});

	$('.servoperateslider1').slick({
		slidesToShow: 5,
		slidesToScroll: 1,
		arrows: false,
		infinite: false,
		responsive: [
			{
				breakpoint: 1200,
				settings: {
					slidesToShow: 4,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 992,
				settings: {
					slidesToShow: 3,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 768,
				settings: {
					slidesToShow: 2,
					slidesToScroll: 1,
				}
			},
			{
				breakpoint: 576,
				settings: {

					slidesToShow: 1.5,
					slidesToScroll: 1,
				}
			}
		]
	});





	/* <a href="contacts.html#sectab" class="extra-tab">link</a> */
	document.addEventListener("DOMContentLoaded", function () {
		if ('#sectab' === window.location.hash) {
			$('.tabsbody__tabcontent').addClass('hide');
			$('.tabsbody__tabcontent.tbcont2').removeClass('hide');
			$('.tabsheader__btn').removeClass('active');
			$('.tabsheader__btn.btn2').addClass('active');
		}
	});



	// 30.11
	$('.header__language span').click(function () {
		$('.langlist').toggle();
	});

	$(document).click(function (event) {
		let $target = $(event.target);
		if (!$target.closest('.header__language').length) {
			$('.langlist').hide();
		}
	});

	// 12.01 our clients - slider

	$('.clientfutured__imgs').slick({
		variableWidth: true,
		slidesToScroll: 1,
		arrows: false,
		infinite: true,
		cssEase: 'linear',
		autoplay: true,
		autoplaySpeed: 10,
		speed: 6000,
		focusOnSelect: false,
		swipeToSlide: false,
		swipe: false,
		touchMove: false,
	});




	// ----------------------------------------header-------------------------------------------------------

	var dropdowns = document.querySelectorAll('.dropdown');

	function isWideScreen() {
		return window.innerWidth > 1199;
	}

	function addClasses() {
		// Перевіряємо, чи розширення екрану відповідає умові
		if (isWideScreen()) {
			var header = document.querySelector('header'); // Отримуємо елемент <header>
			if (header) {
				header.classList.add('white'); // Додаємо клас white для елемента <header>
			}
			var megamenu = this.querySelector('.megamenu'); // Отримуємо дочірній елемент .megamenu
			if (megamenu) {
				megamenu.classList.add('show'); // Додаємо клас show для елемента .megamenu
			}
		}
	}

	function removeClasses() {
		// Перевіряємо, чи розширення екрану відповідає умові
		if (isWideScreen()) {
			var header = document.querySelector('header'); // Отримуємо елемент <header>
			if (header) {
				header.classList.remove('white'); // Видаляємо клас white для елемента <header>
			}
			var megamenu = this.querySelector('.megamenu'); // Отримуємо дочірній елемент .megamenu
			if (megamenu) {
				megamenu.classList.remove('show'); // Видаляємо клас show для елемента .megamenu
			}
		}
	}

	function isWideScreenSm() {
		return window.innerWidth < 1200;
	}

	if (isWideScreenSm()) {
		$('.dropdown a').click(function () {
			$(this).next('.megamenu ').toggleClass('show');
			$('.headerslider').slick("setPosition", 0);
		});
	}


	// Додаємо обробник події для кожного елемента dropdown
	dropdowns.forEach(function (dropdown) {
		// Додаємо обробники подій для наведення та відведення миші
		dropdown.addEventListener('mouseenter', addClasses);
		dropdown.addEventListener('mouseleave', removeClasses);
	});

	// -----------------------------------------------------------------


	function isWideScreenTablet() {
		return window.innerWidth > 991;
	}

	if (isWideScreenTablet()) {
		// Отримуємо всі елементи <a> в блоці .mainlist
		var links = document.querySelectorAll('.mainlist a');

		// Отримуємо всі елементи <ul> в блоці .sidelists
		var uls = document.querySelectorAll('.sidelists ul');

		// Перевіряємо, чи існує хоча б один <ul>
		if (uls.length > 0) {
			// Встановлюємо клас 'show' для першого <ul>
			uls[0].classList.add('show');
		}

		// Перевіряємо, чи існує хоча б один <a> в .mainlist
		if (links.length > 0) {
			// Додаємо клас 'active' для першого <a>
			links[0].classList.add('active');
		}

		// Перебираємо кожен <a> і додаємо обробник подій для кожного кліку
		links.forEach(function (link, index) {
			link.addEventListener('click', function () {
				// Перевіряємо, чи існує <ul> з індексом, який відповідає індексу <a>
				if (uls[index]) {
					// Видаляємо клас 'show' у всіх <ul>
					uls.forEach(function (ul) {
						ul.classList.remove('show');
					});
					// Додаємо клас 'show' тільки відповідному <ul>
					uls[index].classList.add('show');

					// Видаляємо клас 'active' у всіх <a>
					links.forEach(function (link) {
						link.classList.remove('active');
					});
					// Додаємо клас 'active' тільки обраному <a>
					link.classList.add('active');
				}
			});
		});
	}

	// ----------------------------header slider---------------------------------

	$('.headerslider').slick({
		dots: true,
		infinite: true,
		speed: 300,
		slidesToShow: 1,
		arrows: false
	});

	//   header BANER

	if ($('.supua').length > 0) {
		$('header').addClass('support');
		$('.progress-container').addClass('support');

		if ($(document).scrollTop() > 1) {
			$('.supua').addClass('hide');
			$('header').removeClass('support');
			$('.progress-container').removeClass('support');
		}
		else {
			$('.supua').removeClass('hide');
			$('header').addClass('support');
			$('.progress-container').addClass('support');
		}

		$(window).scroll(function () {
			if ($(document).scrollTop() > 1) {
				$('.supua').addClass('hide');
				$('header').removeClass('support');
				$('.progress-container').removeClass('support');
			}
			else {
				$('.supua').removeClass('hide');
				$('header').addClass('support');
				$('.progress-container').addClass('support');
			}
		});
	}


	if ($(document).scrollTop() > 1) {
		$('.header').addClass('headeropacbg')
	}
	else {
		$('.header').removeClass('headeropacbg')
	}

	$(window).scroll(function () {
		if ($(document).scrollTop() > 1) {
			$('.header').addClass('headeropacbg')
		}
		else {
			$('.header').removeClass('headeropacbg')
		}
	});

	// burger

	$('.header__burger').click(
		function () {
			$('header.header').toggleClass('white');
			// $('.header__message').toggle();
			// $(window).scrollTop(0);
			$('body').toggleClass('noscroll')
			$(this).toggleClass('open');
			$('.header.header nav').toggleClass('show');
		}
	);

	// tablet menu show submenu
	function isWideScreenMob() {
		return window.innerWidth < 992;
	}
	if (isWideScreenMob()) {
		$('.tabletmenu>ul>li>a').click(function () {
			$(this).toggleClass('activetablet');
			$(this).next('.tablet-submenu').toggle();
		})
	}


	// -------------FOOTER--------------------
	$('.footer__dropdown a').click(function (e) {
		e.preventDefault();
		$(this).next('ul').toggle();
	});

	// --
	$('.footer__showmore').each(function () {
		var $iconElement = $(this).find('i');
		var originalText = $iconElement.text().trim();
		$(this).click(function () {
			toggleText($iconElement, originalText);
		});
	});

	function toggleText($iconElement, originalText) {
		if ($iconElement.text().trim() === 'Load more') {
			$iconElement.text('Show less');
		} else {
			$iconElement.text('Load more');
		}
	}

	$('.footer__showmore').click(function(){
		$(this).toggleClass('rotate');
		$(this).prev('ul').toggleClass('showall');
	});





}(jQuery));
