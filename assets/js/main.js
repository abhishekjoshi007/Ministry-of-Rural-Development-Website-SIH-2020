$("#tts-start").click(function() {
    startTTS("Text to speech started. Click on blocks to listen.");
});
$("#voice-assist").click(function() {
    startVoiceControl();
});
$(".tts-block").click(function() {
    startTTSBlock(this);
});
(function($){
	"use strict";
	jQuery(document).on('ready', function () {

        // Header Sticky
		$(window).on('scroll',function() {
            if ($(this).scrollTop() > 120){  
                $('.navbar-area').addClass("is-sticky");
            }
            else{
                $('.navbar-area').removeClass("is-sticky");
            }
        });

        // Search Popup JS
        $('.close-btn').on('click',function() {
            $('.search-overlay').fadeOut();
            $('.search-btn').show();
            $('.close-btn').removeClass('active');
        });
        $('.search-btn').on('click',function() {
            $(this).hide();
            $('.search-overlay').fadeIn();
            $('.close-btn').addClass('active');
        });

        // Mean Menu
		$('.mean-menu').meanmenu({
			meanScreenWidth: "991"
        });

        // Home Slides
		$('.home-slides').owlCarousel({
			loop: true,
            nav: true,
            items: 1,
			dots: false,
			autoplayHoverPause: true,
            autoplay: true,
            animateOut: "slideOutDown",
            animateIn: "slideInDown",
            navText: [
                "<i class='flaticon-left-chevron'></i>",
                "<i class='flaticon-right-chevron'></i>"
            ]
        });
        $(".home-slides").on("translate.owl.carousel", function(){
            $(".banner-content p").removeClass("animated fadeInUp").css("opacity", "0");
            $(".banner-content h1").removeClass("animated fadeInUp").css("opacity", "0");
            $(".banner-content .default-btn").removeClass("animated fadeInUp").css("opacity", "0");
        });
        $(".home-slides").on("translated.owl.carousel", function(){
            $(".banner-content p").addClass("animated fadeInUp").css("opacity", "1");
            $(".banner-content h1").addClass("animated fadeInUp").css("opacity", "1");
            $(".banner-content .default-btn").addClass("animated fadeInUp").css("opacity", "1");
        });
		
		// FAQ Accordion JS
        $(function() {
            $('.accordion > li:eq(0) a').addClass('active').next().slideDown();
            $('.accordion a').click(function(j) {
                var dropDown = $(this).closest('li').find('p');
                $(this).closest('.accordion').find('p').not(dropDown).slideUp();
                if ($(this).hasClass('active')) {
                    $(this).removeClass('active');
                } else {
                    $(this).closest('.accordion').find('a.active').removeClass('active');
                    $(this).addClass('active');
                }
                dropDown.stop(false, true).slideToggle();
                j.preventDefault();
            });
        });

        // History Timeline Slider
        var timelineSwiper = new Swiper ('.timeline .swiper-container', {
            direction: 'vertical',
            loop: false,
            speed: 1600,
            pagination: '.swiper-pagination',
            paginationBulletRender: function (swiper, index, className) {
                var year = document.querySelectorAll('.swiper-slide')[index].getAttribute('data-year');
                return '<span class="' + className + '">' + year + '</span>';
            },
            paginationClickable: true,
            nextButton: '.swiper-button-next',
            prevButton: '.swiper-button-prev',
            breakpoints: {
                768: {
                    direction: 'horizontal',
                }
            }
        });

        // Testimonial Slides
		$('.testimonial-slides').owlCarousel({
			loop: true,
            nav: true,
            items: 1,
			dots: false,
			autoplayHoverPause: true,
            autoplay: true,
            navText: [
                "<i class='flaticon-left-chevron'></i>",
                "<i class='flaticon-right-chevron'></i>"
            ]
        });

        // Odometer JS
        $('.odometer').appear(function(e) {
			var odo = $(".odometer");
			odo.each(function() {
				var countNumber = $(this).attr("data-count");
				$(this).html(countNumber);
			});
        });

        // Partner Slides
		$('.partner-slides').owlCarousel({
			loop: true,
			nav: false,
			dots: false,
			autoplayHoverPause: true,
            autoplay: true,
            navText: [
                "<i class='flaticon-left-chevron'></i>",
                "<i class='flaticon-right-chevron'></i>"
            ],
			responsive: {
                0: {
                    items: 2,
                },
                576: {
                    items: 3,
                },
                768: {
                    items: 3,
                },
                1200: {
                    items: 6,
				}
            }
        });

        // Popup Image
        $('.popup-btn').magnificPopup({
            type: 'image',
            gallery: {
                enabled: true,
            }
        });

        // Go to Top
        $(function(){
            // Scroll Event
            $(window).on('scroll', function(){
                var scrolled = $(window).scrollTop();
                if (scrolled > 600) $('.go-top').addClass('active');
                if (scrolled < 600) $('.go-top').removeClass('active');
            });  
            // Click Event
            $('.go-top').on('click', function() {
                $("html, body").animate({ scrollTop: "0" },  500);
            });
        });

    });

    // WOW JS
	$(window).on ('load', function (){
        if ($(".wow").length) { 
            var wow = new WOW ({
                boxClass:     'wow',      // Animated element css class (default is wow)
                animateClass: 'animated', // Animation css class (default is animated)
                offset:       20,         // Distance to the element when triggering the animation (default is 0)
                mobile:       true,       // Trigger animations on mobile devices (default is true)
                live:         true,       // Act on asynchronously loaded content (default is true)
            });
            wow.init();
        }
    });

    // Preloader
	jQuery(window).on('load', function() {
		$('.preloader').fadeOut();
	});
}(jQuery));