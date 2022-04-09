/*
	Author       : Theme-Family
	Template Name:	Al-Ghafur - Tour & Travel Agency Template
	Version      : 1.0
*/

(function($) {
    "use strict";
	
		 /*
		 * Customly Styled Select input field
		 */
		[].slice.call(document.querySelectorAll('select.cs-select')).forEach(function(el) {
			new SelectFx(el);
		});
		
	
	
		/*
		 * Custom Data Fixed
		 */
		$('.beactive').addClass('active');
		$('.beactive').removeClass('beactive');

		/*
		 * Booking progress line JS
		 */
			$('.atf-booking-form > ul > li:nth-child(1)').click(function() {
				if ($('.atf-booking-form > ul > li:nth-child(1)').hasClass('atf-step-done')) {
					$('.atf-booking-form > ul > li:nth-child(1)').removeClass('atf-step-done');
				}
				if ($('.atf-booking-form > ul > li:nth-child(2)').hasClass('atf-step-done')) {
					$('.atf-booking-form > ul > li:nth-child(2)').removeClass('atf-step-done');
				}
				if ($('.atf-booking-form > ul > li:nth-child(3)').hasClass('atf-step-done')) {
					$('.atf-booking-form > ul > li:nth-child(3)').removeClass('atf-step-done');
				}

				if ($('.atf-booking-form > ul > li:nth-child(4)').hasClass('atf-step-done')) {
					$('.atf-booking-form > ul > li:nth-child(4)').removeClass('atf-step-done');
				}
			});

			$('.atf-booking-form > ul > li:nth-child(2)').click(function() {
				$('.atf-booking-form > ul > li:nth-child(1)').addClass('atf-step-done');

				if ($('.atf-booking-form > ul > li:nth-child(2)').hasClass('atf-step-done')) {
					$('.atf-booking-form > ul > li:nth-child(2)').removeClass('atf-step-done');
				}
				if ($('.atf-booking-form > ul > li:nth-child(3)').hasClass('atf-step-done')) {
					$('.atf-booking-form > ul > li:nth-child(3)').removeClass('atf-step-done');
				}

				if ($('.atf-booking-form > ul > li:nth-child(4)').hasClass('atf-step-done')) {
					$('.atf-booking-form > ul > li:nth-child(4)').removeClass('atf-step-done');
				}
			});

			$('.atf-booking-form > ul > li:nth-child(3)').click(function() {
				$('.atf-booking-form > ul > li:nth-child(1)').addClass('atf-step-done');
				$('.atf-booking-form > ul > li:nth-child(2)').addClass('atf-step-done');

				if ($('.atf-booking-form > ul > li:nth-child(3)').hasClass('atf-step-done')) {
					$('.atf-booking-form > ul > li:nth-child(3)').removeClass('atf-step-done');
				}

				if ($('.atf-booking-form > ul > li:nth-child(4)').hasClass('atf-step-done')) {
					$('.atf-booking-form > ul > li:nth-child(4)').removeClass('atf-step-done');
				}
			});

			$('.atf-booking-form > ul > li:nth-child(4)').click(function() {
				$('.atf-booking-form > ul > li:nth-child(1)').addClass('atf-step-done');
				$('.atf-booking-form > ul > li:nth-child(2)').addClass('atf-step-done');
				$('.atf-booking-form > ul > li:nth-child(3)').addClass('atf-step-done');

				if ($('.atf-booking-form > ul > li:nth-child(4)').hasClass('atf-step-done')) {
					$('.atf-booking-form > ul > li:nth-child(4)').removeClass('atf-step-done');
				}
			});
			
		// Btn-next-tab
			$('.btn-next-tab, .btn-prev-tab').click(function(e) {

				e.preventDefault();

				// console.log($($(this).attr('href')));
				$(this).removeClass('active show');
				$(this).tab('show');

				$('html, body').animate({
					scrollTop: $(".atf-booking-form").offset().top - 100
				}, 300);

				$('a[href="' + $(this).attr('href') + '"]').parents('li').trigger('click');
				$('.atf-booking-form > ul > li > a.show.active').removeClass('active show');
				$('.atf-booking-form > ul > li > a[href="' + $(this).attr('href') + '"]').addClass('active show');
			});

	
			/*
			 * Search box toggle at Header
			 */
			$('.atf-search-box-trigger').click(function() {
				var sbox = $(this).next();

				// $(this).toggleClass('atf-sb-active');
				$(this).find('i').toggleClass('fa-times');
				sbox.toggleClass('atf-sb-active');

				return false;
			});
	
			 /*
			 * Room Search form Check in and out Datepicker
			 */
			$('.input-group.atf-check-in').datepicker({
				startDate: "dateToday",
				autoclose: true
			});

			$('.input-group.atf-check-in').on('hide', function(e) {

				if (e.dates.length) {
					var strDate = e.date;
					strDate.setDate(strDate.getDate() + 1);

					// $('.atf-check-out').datepicker('clearDates');
					$('.atf-check-out').datepicker('setStartDate', strDate);
				}

				$(e.currentTarget).removeClass('focus');
			});

			$('.input-group.atf-check-in').on('show', function(e) {

				$(e.currentTarget).addClass('focus');
			});

			$('.input-group.atf-check-out').on('show', function(e) {

				$(e.currentTarget).addClass('focus');
			});

			$('.input-group.atf-check-out').on('hide', function(e) {

				$(e.currentTarget).removeClass('focus');
			});

			$('.input-group.atf-check-in').on('changeDate', function(e) {

				if (e.dates.length) {
					var inDate = e.date,
						outDate = $('.atf-check-out').datepicker('getDate');

					if (outDate && inDate >= outDate) {
						$('.atf-check-out').datepicker('clearDates');
					}
				} else {
					$('.atf-check-out').datepicker('clearDates');
				}
			});

			$('.input-group.atf-check-out').datepicker({
				startDate: "dateToday",
				autoclose: true
			});

	
		$(window).on ('load', function (){ // makes sure the whole site is loaded

        // -------------------- Site Preloader
			$('#atf-ctn-preloader').fadeOut(); // will first fade out the loading animation
			$('#atf-preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
			$('body').delay(350).css({'overflow':'visible'});
         });
	
		
		
		// Navbar menu-top
		
			var nav = $('nav');
			var navHeight = nav.outerHeight();

			$('.navbar-toggler').on('click', function () {
				if (!$('#menu-top').hasClass('navbar-collaps')) {
					$('#menu-top').addClass('navbar-collaps');
				}
			});		

		// Navbar Menu Reduce
		
			$(window).trigger('scroll');
			$(window).on('scroll', function () {
				var pixels = 50;
				var top = 1200;
				if ($(window).scrollTop() > pixels) {
					$('.navbar-expand-md').addClass('navbar-collaps');
					$('.navbar-expand-md').removeClass('navbar-expend');
				} else {
					$('.navbar-expand-md').addClass('navbar-expend');
					$('.navbar-expand-md').removeClass('navbar-collaps');
				}
				if ($(window).scrollTop() > top) {
					$('.scrolltop-atf').fadeIn(1000, "easeInOutExpo");
				} else {
					$('.scrolltop-atf').fadeOut(1000, "easeInOutExpo");
				}
			});


		//  Star Scrolling nav
	
			$('a.page-scroll[href*="#"]:not([href="#"])').on("click", function () {
				if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
					var target = $(this.hash);
					target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
					if (target.length) {
						$('html, body').animate({
							scrollTop: (target.offset().top - navHeight + 30)
						}, 1000, "easeInOutExpo");
						return false;
					}
				}
			});

		// Closes responsive menu when a scroll trigger link is clicked
		
			$('.page-scroll').on("click", function () {
				$('.navbar-collapse').collapse('hide');
			});

		// Activate scrollspy to add active class to navbar items on scroll
			$('body').scrollspy({
				target: '#menu-top',
				offset: navHeight
			});
        

		//**================= Sticky =====================**//
  
			$(window).on('scroll', function() {
				if ($(window).scrollTop() > 50) {
					$('.navbar-expand-md').addClass('navbar-collaps');
					$('.atf-back-to-top').addClass('open');
				} else {
					$('.atf-header-area').removeClass('navbar-collaps');
					$('.atf-back-to-top').removeClass('open');
				}
			});
		//**===================END Sticky ===================**// 
		 
		//**===================Scroll UP ===================**//

			if ($('.atf-back-to-top').length) {
			  $(".atf-back-to-top").on('click', function () {
				var target = $(this).attr('data-targets');
				// animate
				$('html, body').animate({
				  scrollTop: $(target).offset().top
				}, 1000);

			  });
			}
		//**=================== END Scroll UP ===================**//
	
		
 
		//**===================START Home Slider JS===================**//	 	
			$('.atf-slick-slider').slick({
			  dots: true,
			  infinite: true,
			  speed: 300,
			  slidesToShow: 1,
			  adaptiveHeight: true
			});
		
		//**===================END Home Slider JS===================**//
		
		//**===================Porfolio isotope===================**//	 
			// image loaded portfolio init
		
				$('.atf-tour-grid').imagesLoaded(function() {
					$('.portfolio-filter').on('click', 'button', function() {
						var filterValue = $(this).attr('data-filter');
						$grid.isotope({
							filter: filterValue
						});
					});
					var $grid = $('.atf-tour-grid').isotope({
						itemSelector: '.grid-item',
						percentPosition: true,
						masonry: {
							columnWidth: '.grid-item',
						}
					});
				});        
					
				// portfolio Filter
				$('.portfolio-filter button').on('click', function(event) {
					$(this).siblings('.active').removeClass('active');
					$(this).addClass('active');
					event.preventDefault();
				});
			
		//**===================END Porfolio isotope ===================**//	
		
		//**===================Magnific Popup ===================**//

				$('.image-popup').magnificPopup({
					type: 'image',
					callbacks: {
						beforeOpen: function() {
						   this.st.image.markup = this.st.image.markup.replace('mfp-figure', 'mfp-figure animated zoomInUp');
						}
					},
					gallery: {
						enabled: true
					}
				});
		//**===================END Magnific Popup ===================**//
		
			//  POPUP VIDEO
			$('.popup-video').magnificPopup({
				type: 'iframe',
			});
				
		//**===================Odometer JS ===================**//
		
			$('.odometer').appear(function() {
				var odo = $(".odometer");
				odo.each(function() {
					var countNumber = $(this).attr("data-count");
					$(this).html(countNumber);
				});
			});
			
		//**===================END Odometer JS ===================**//
		
		//**===================START PACKAGE JS ===================**//	
			
			$("#atf-package-slide").owlCarousel({
				items:3,
				pagination:false,
				navigation:true,
				slideSpeed:1000,
				autoPlay:false,
				responsive:{
					0:{
						items:1,
						
					},
					600:{
						items:1,
						
					},
					1000:{
						items:3,
				
					}
				}
			});
			
		//**===================END PACKAGE JS ===================**//	
		
		//**===================START PARTNER LOGO JS ===================**//	
			
			$('.atf-partner').owlCarousel({
				margin: 30,
				autoPlay: 5000, //Set AutoPlay to 3 seconds
				items : 5,
				responsive:{
					0:{
						items:2,
						
					},
					600:{
						items:3,
						
					},
					1000:{
						items:5,
				
					}
				}
			});
		/*END PARTNER LOGO*/
		
		//**===================Mouse hover tile effect js===================**//

			$(".card-s").tilt({
			  maxTilt: -20,
			  perspective: 2400,
			  speed: 2200,
			  easing: "cubic-bezier(.03,.98,.52,.99)",
			  scale: 1,
			  
			  });
			/* End Mouse hover tile effect*/  

		//**===================Testimonial Slider ===================**//
		
			$('#testimonial-slider').owlCarousel({
				margin: 5,
				autoplay: true,
				center: true,
				autoplayTimeout: 4000,
				nav: false,
				smartSpeed: 1000,
				dots: true,
				autoplayHoverPause: true,
				loop: true,
				responsiveClass:true,
				responsive: {
					0: {
						items: 1
					},
					600: {
						items: 1
					},
					1000: {
						items: 1
					}
				}
			});
		
			
		//**=================== mailchamp ===================**//
		
		$('#mc-form').ajaxChimp({
			url: 'https://gmail.us10.list-manage.com/subscribe/post?u=c9af266402a277062d0d7cee0&amp;id=1211fda42f'
			/* Replace Your AjaxChimp Subscription Link */
		}); 
		/* End mailchamp*/	
		
		 /* WOW Scroll Spy
			========================================================*/
			 var wow = new WOW({
				  //disabled for mobile
					mobile: false
				});

			wow.init();
		
		/* START PARALLAX JS */
		(function () {

			if( /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) ) {
			 
			} else {
				$(window).stellar({
					horizontalScrolling: false,
					responsive: true
				});
			}

		}());
		/* END PARALLAX JS  */	
		
		
			
			
			
			
        
})(jQuery);
