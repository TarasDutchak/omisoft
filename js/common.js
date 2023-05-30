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

	if ($(window).width() < 1025) {
		$('.sublink span').click(
			function () {
				$(this).parents('li').find('.submenu').toggle();
			}
		);
	}

	$('.header__burger').click(
		function () {
			$('header.header').toggleClass('header__blackcolor');
			$('.header__message').toggle();
			$(window).scrollTop(0);
			$('body').toggleClass('noscroll')
			$(this).toggleClass('open');
			$('.header.header .header__nav').toggleClass('show');
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
				slidesToShow: 8,
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



	if ($('.supua').length > 0) {
		$('header.fixed').addClass('support');
		$('.progress-container').addClass('support');

		if ($(document).scrollTop() > 1) {
			$('.supua').addClass('hide');
			$('header.fixed').removeClass('support');
			$('.progress-container').removeClass('support');
		}
		else {
			$('.supua').removeClass('hide');
			$('header.fixed').addClass('support');
			$('.progress-container').addClass('support');
		}

		$(window).scroll(function () {
			if ($(document).scrollTop() > 1) {
				$('.supua').addClass('hide');
				$('header.fixed').removeClass('support');
				$('.progress-container').removeClass('support');
			}
			else {
				$('.supua').removeClass('hide');
				$('header.fixed').addClass('support');
				$('.progress-container').addClass('support');
			}
		});
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

	$(document).ready(function () {
		// header header__transparent

	});

	if ($(document).scrollTop() > 1) {
		$('.header.header__transparent').addClass('headeropacbg')
	}
	else {
		$('.header.header__transparent').removeClass('headeropacbg')
	}

	$(window).scroll(function () {
		if ($(document).scrollTop() > 1) {
			$('.header.header__transparent').addClass('headeropacbg')
		}
		else {
			$('.header.header__transparent').removeClass('headeropacbg')
		}
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

	// 25.02
	// if ($(window).width() < 1025) {
	// 	$('.sublink span').click(
	// 		function () {
	// 			$(this).parents('li').find('.submenu').toggle();
	// 		}
	// 	);
	// }



	const header = document.querySelector('header');
	const sublink = document.querySelector('.sublink');
	const megamenu = document.querySelector('.megamenu');


	if (header.classList.contains('header__transparent')) {
		function addWhiteClass() {
			if (window.innerWidth >= 992) {
				header.classList.add('header__white');
				header.classList.remove('header__transparent');
			}
		}

		function removeWhiteClass() {
			header.classList.remove('header__white');
			header.classList.add('header__transparent');
		}
	}
	if (header.classList.contains('header__black')) {
		function addWhiteClass() {
			if (window.innerWidth >= 992) {
				header.classList.add('header__white');
				header.classList.remove('header__black');
			}
		}

		function removeWhiteClass() {
			header.classList.remove('header__white');
			header.classList.add('header__black');
		}
	}







	if ($('.megamenu').length) {
		sublink.addEventListener('mouseover', addWhiteClass);
		sublink.addEventListener('mouseout', removeWhiteClass);
	
		megamenu.addEventListener('mouseover', addWhiteClass);
		megamenu.addEventListener('mouseout', removeWhiteClass);
	
	
		// mob
		sublink.addEventListener('click', function () {
			// const megamenu = document.querySelector('.megamenu');
			if (window.innerWidth <= 991) {
				megamenu.classList.toggle('show');
			}
		});
	}

	

	/*** Post content navigation ***/
	var headers = document.querySelectorAll('.postcontent h2');
	if (headers.length !== 0) {
		for (var i = 0; i < headers.length; i++) {
			headers[i].setAttribute('id', i + 1);
		}

		var list = document.querySelector('.postnav');
		var ul = document.createElement('ul');

		for (var i = 0; i < headers.length; i++) {
			var text = headers[i].textContent;
			var id = headers[i].getAttribute('id');
			var listItem = document.createElement('li');
			var link = document.createElement('a');

			link.textContent = text;
			link.setAttribute('href', '#' + id);
			listItem.appendChild(link);
			ul.appendChild(listItem);
		}

		list.appendChild(ul);

		// -----------.
		$(".postnav ul").on("click", "a", function (event) {
			console.log('sdsdsd')
			event.preventDefault();
			var id = $(this).attr('href'),
				top = $(id).offset().top;
			$('body,html').animate({scrollTop: top - 105}, 1500);
		});

		const links = document.querySelectorAll('.postnav li a');
		window.addEventListener('scroll', () => {
			const anchors = document.querySelectorAll('.postmiansectbody__post [id]');
			anchors.forEach(anchor => {
				if (anchor.closest('.postmiansectbody__post')) {
					const anchorTop = anchor.getBoundingClientRect().top + window.pageYOffset;
					if (window.pageYOffset >= anchorTop - 110) {
						links.forEach(link => {
							const correspondingLink = document.querySelector(`.postnav li a[href="#${anchor.id}"]`);
							if (correspondingLink) {
								link.classList.remove('active');
								correspondingLink.classList.add('active');
							}
						});
					}
				}
			});
		});
	}
	

}(jQuery));
