(function($) {
    "use strict"; // Start of use strict

    // Smooth scrolling using jQuery easing
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: (target.offset().top - 77)
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
      target: '.navbar',
      offset: 77
    });*/

    // Collapse Navbar
    var navbarCollapse = function() {
        if ($(".navbar").offset().top > 20) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
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

    // Navigation
    var $navLink = $('.nav-link'),
        $navLinkActive = ('nav-link-active');

    $navLink.click(function(e) {
        var $this = $(this);
        $navLink.removeClass($navLinkActive);
        $this.addClass($navLinkActive);
        e.preventDefault();
    });

    // Features
    var $hfeb = $('.hfeb'),
        $hfebActive = 'hfeb-active',
        $phoneImg = $('.phone-img-content-img');

    $hfeb.click(function(e) {
        var $this = $(this);
        $hfeb.removeClass($hfebActive);
        $this.addClass($hfebActive);
        $phoneImg.attr('src','img/' + $this.attr('alt-img'));
        e.preventDefault();
    });

    // $('.rutg-accordion').collapse({
    //     toggle: false
    // });

    // $(".faq-sidebar-navigation ul li a").click(function(e) {
    //     e.preventDefault();
    //     var activeFaq = $(".faq-sidebar-navigation ul li.active a");
    //     var id = activeFaq.attr('href');
    //     var dest = $(this).attr('href');
    //     activeFaq.parent().removeClass('active');
    //     $(this).parent().addClass('active');
    //     $(id).removeClass('active');
    //     $(dest).addClass('active');
    //     return false;
    // });

    // Magnific popup calls
    // $('.head-play-button').magnificPopup({
    //     tLoading: 'Loading image #%curr%...',
    //     mainClass: 'mfp-img-mobile',
    //     disableOn: 0,
    //     type: 'iframe',
    //     mainClass: 'mfp-fade',
    //     removalDelay: 160,
    //     preloader: true,
    //     fixedContentPos: false,
    //     iframe: {
    //         patterns: {
    //             youtube: {
    //                 index: 'youtube.com/', // String that detects type of video (in this case YouTube). Simply via url.indexOf(index).

    //                 id: 'v=', // String that splits URL in a two parts, second part should be %id%
    //                 // Or null - full URL will be returned
    //                 // Or a function that should return %id%, for example:
    //                 // id: function(url) { return 'parsed id'; }
    //                 src: 'https://www.youtube.com/embed/%id%?rel=0&autoplay=1' // URL that will be set as a source for iframe.
    //             }
    //         }
    //     }
    // });

})(jQuery); // End of use strict