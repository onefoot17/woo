(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 57)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // Closes responsive menu when a scroll trigger link is clicked
    $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    });

    // Activate scrollspy to add active class to navbar items on scroll
    /*$('body').scrollspy({
      target: '#mainNav',
      offset: 57
    });*/

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($("#mainNav").offset().top > 20) {
            $("#mainNav").addClass("navbar-shrink");
        } else {
            $("#mainNav").removeClass("navbar-shrink");
        }
    };
    // Collapse now if page is not at top
    navbarCollapse();
    // Collapse the navbar when page is scrolled
    $(window).scroll(navbarCollapse);

    // Scroll reveal calls
    window.sr = ScrollReveal();
    sr.reveal('.sr-icons', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 200);
    sr.reveal('.how-works-img img', {
        duration: 1000,
        delay: 200
    });
    sr.reveal('.goal-image', {
        duration: 600,
        scale: 0.3,
        distance: '0px'
    }, 300);

    var activeClass = 'hfeb-active';
    var $phoneImg = $('.phone-img-content');
    var original_block = $(".home-for-everyone-block." + activeClass);
    var original_image = original_block.attr('alt-img');

    $('[alt-img]').each(function(){
      $('<img/>')[0].src = $(this).attr('alt-img');
    });

    $(".home-for-everyone-block").hover(function() {
        original_block.removeClass(activeClass)
        var $this = $(this);
        $phoneImg.css("background-image", "url('" + $this.attr('alt-img') + "')");
    }, function() {
        original_block.addClass(activeClass);
        $phoneImg.css("background-image", "url('" + original_image + "')");
    });


    $('.rutg-accordion').collapse({
        toggle: false
    });

    $(".faq-sidebar-navigation ul li a").click(function(e) {
        e.preventDefault();
        var activeFaq = $(".faq-sidebar-navigation ul li.active a");
        var id = activeFaq.attr('href');
        var dest = $(this).attr('href');
        activeFaq.parent().removeClass('active');
        $(this).parent().addClass('active');
        $(id).removeClass('active');
        $(dest).addClass('active');
        return false;
    });

    // Magnific popup calls
    $('.head-play-button').magnificPopup({
        tLoading: 'Loading image #%curr%...',
        mainClass: 'mfp-img-mobile',
        disableOn: 0,
        type: 'iframe',
        mainClass: 'mfp-fade',
        removalDelay: 160,
        preloader: true,
        fixedContentPos: false,
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

                    id: 'v=', // String that splits URL in a two parts, second part should be %id%
                    // Or null - full URL will be returned
                    // Or a function that should return %id%, for example:
                    // id: function(url) { return 'parsed id'; }
                    src: 'https://www.youtube.com/embed/%id%?rel=0&autoplay=1' // URL that will be set as a source for iframe.
                }
            }
        }
    });

})(jQuery); // End of use strict