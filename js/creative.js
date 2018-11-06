(function($) {
    "use strict"; // Start of use strict

    var $body = $('body'),
        $window = $(window),
        $navLink = $('.nav-link'),
        $navLinkActive = ('nav-link-active'),
        $WO__navbar = $('.navbar'),
        $WO__navbarNav = $('.navbar-nav'),
        $WO__navbarHeight = $WO__navbar.outerHeight(),
        $WO__main = $('#WO__main'),
        $WO__navMobileButtonOpen = $('.WO__nav--mobileButtonOpen'),
        $WO__navMobileButtonClose = $('.WO__nav--mobileButtonClose');

    // Collapse Navbar
    /* var navbarCollapse = function() {
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
    // end Collapse Navbar */

    // Navigation resize
    $WO__main.css('padding-top', $WO__navbarHeight);

    $window.resize(function(){
        var $WO__navbarHeight = $WO__navbar.outerHeight();

        $WO__main.css('padding-top', $WO__navbarHeight);
    });

    // Smooth scrolling
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function() {
        if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                var $WO__navbarHeight = $WO__navbar.outerHeight();

                $('html, body').animate({
                    scrollTop: (target.offset().top - $WO__navbarHeight)
                }, 1000, "easeInOutExpo");
                return false;
            }
        }
    });

    // $('a[href*="#"]:not([href="#"])').click(function(){
    //     if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'') && location.hostname==this.hostname){
    //         var target = $(this.hash),
    //             $WO__rslidesNavHeight = $('.WO__rslidesNav').height();

    //         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

    //         if(target.length){
    //             if($(this).hasClass('events')){
    //                 $('html,body').animate({
    //                     scrollTop: target.offset().top - $WO__rslidesNavHeight
    //                 },1000);
    //             }else{
    //                 $('html,body').animate({
    //                     scrollTop: target.offset().top
    //                 },1000);
    //             }
                
    //             return false;
    //         }
    //     }
    // });
    // end Smooth scrolling

    // Closes responsive menu when a scroll trigger link is clicked
    /* $('.js-scroll-trigger').click(function() {
        $('.navbar-collapse').collapse('hide');
    }); */

    // Activate scrollspy to add active class to navbar items on scroll
    /*$('body').scrollspy({
      target: '.navbar',
      offset: 77
    });*/

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

    // Intro video
    var $body = $('body'),
        $introImgCon = $('.introImgCon'),
        $headPlayButtonCon = $('.head-play-buttonCon');

    $headPlayButtonCon.click(function(e){
        var media = $(this).attr('data-media');

        $introImgCon.html(media);

        $(this).css('display','none');
        e.preventDefault();
    });

    // Navigation
    $navLink.click(function(e) {
        var $this = $(this);
        $navLink.removeClass($navLinkActive);
        $this.addClass($navLinkActive);
        e.preventDefault();
    });

    // Nav mobile
    $WO__navMobileButtonOpen.click(function(e){
        $WO__navbarNav.toggleClass('navbar-nav--show');

        e.preventDefault();
    });

    $WO__navMobileButtonClose.click(function(e){
        $WO__navbarNav.toggleClass('navbar-nav--show');

        e.preventDefault();
    });

    // $body.click(function(e){
    //     $WO__navMobileButtonClose.trigger('click');
    // });

    $(document).keyup(function(e){
        if(e.keyCode==27){$WO__navMobileButtonClose.trigger('click');}
    });
    // end Navigation

    // Features
    var $feature = $('.feature'),
        $featureActive = 'feature-active',
        $phoneImg = $('.phone-img-content-img');

    $feature.click(function(e) {
        var $this = $(this);
        $feature.removeClass($featureActive);
        $this.addClass($featureActive);
        $phoneImg.attr('src','img/' + $this.attr('alt-img'));
        e.preventDefault();
    });

    // Features slides on mobile
    $("#featuresSlides").responsiveSlides({
        auto: false,
        pager: true,
        speed: 300,
        maxwidth: 540,
        manualControls: "",
        navContainer: ".WO__rslides_tabs"
    });
    // end Features slides on mobile
    // end Features

    // Overlay
    var $body = $('body'),
        $WO__overlayLink = $('.WO__overlayLink'),
        $WO__overlay = $('.WO__overlay'),
        $WO__overlayMedia = $('.WO__overlayMedia'),
        $WO__overlayClose = $('.WO__overlayClose');

    $WO__overlayLink.click(function(e){        
        $body.addClass('ovHi');

        $WO__overlay.addClass('WO__overlay--show');

        e.preventDefault();
    });

    $WO__overlayClose.click(function(e){
        $body.removeClass('ovHi');

        $WO__overlay.removeClass('WO__overlay--show');

        e.preventDefault();
    });

    /*$WO__overlay.click(function(e){
        $WO__overlayClose.trigger('click');
    });

    $(document).keyup(function(e){
        if(e.keyCode==27){$WO__overlayClose.trigger('click');}
    });*/
    // end Overlay

    //Video Resize
    // function $TG__videosResize(){
    //     var $allVideos = $('iframe[src^="//player.vimeo.com"], iframe[src^="https://www.youtube.com"], object, embed');

    //     $allVideos.each(function(){
    //         $(this)
    //         // jQuery .data does not work on object/embed elements
    //         .attr('data-aspectRatio', this.height / this.width)
    //         .removeAttr('height')
    //         .removeAttr('width');
    //     });

    //     $(window).resize(function(){//console.log('resizing');
    //         var newWidth = $WO__overlayMedia.width();

    //         $allVideos.each(function(){
    //             var $el = $(this);

    //             $el
    //                 .width(newWidth)
    //                 .height(newWidth * $el.attr('data-aspectRatio'));
    //         });
    //     }).resize();
    // }






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