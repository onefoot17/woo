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

    // Intro video
    var $body = $('body'),
        $mastheadImgContainer = $('.masthead-img-container'),
        $headPlayButtonCon = $('.head-play-buttonCon');

    $headPlayButtonCon.click(function(event){
        var media = $(this).attr('data-media');

        $mastheadImgContainer.html(media);

        $(this).css('display','none');
        event.preventDefault();
    });

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

    // Overlay
    // Navigation
    var $GG__nav = $('.GG__nav'),
        $GG__navDesktop = $('.GG__nav--desktop'),
        $GG__navMobileButtonOpen = $('.GG__nav--mobileButtonOpen'),
        $GG__navMobileButtonClose = $('.GG__nav--mobileButtonClose'),
        $GG__navMobile = $('.GG__nav--mobile'),
        $GG__navMobileDropdown = $('.GG__nav--mobileDropdown');

    $GG__navMobileButtonOpen.on('click',function(event){
        $GG__navMobileDropdown.toggleClass('GG__nav--mobileDropdown--show');

        event.preventDefault();
    });

    $GG__navMobileButtonClose.on('click',function(event){
        $GG__navMobileDropdown.toggleClass('GG__nav--mobileDropdown--show');

        event.preventDefault();
    });
    // end Navigation

    // Smooth Scrolling
    // $('a[href*="#"]:not([href="#"])').click(function(){
    //     if(location.pathname.replace(/^\//,'')==this.pathname.replace(/^\//,'') && location.hostname==this.hostname){
    //         var target = $(this.hash),
    //             $GG__rslidesNavHeight = $('.GG__rslidesNav').height();

    //         target = target.length ? target : $('[name=' + this.hash.slice(1) +']');

    //         if(target.length){
    //             if($(this).hasClass('events')){
    //                 $('html,body').animate({
    //                     scrollTop: target.offset().top - $GG__rslidesNavHeight
    //                 },1000);
    //             }else{
    //                 $('html,body').animate({
    //                     scrollTop: target.offset().top
    //                 },1000);
    //             }

    //             // pageTracker();
                
    //             return false;
    //         }
    //     }
    // });
    // end Smooth Scrolling

    // Overlay
    var $body = $('body'),
        $WO__overlayLink = $('.WO__overlayLink'),
        $WO__overlay = $('.WO__overlay'),
        $WO__overlayMedia = $('.WO__overlayMedia'),
        $WO__overlayClose = $('.WO__overlayClose');

    $WO__overlayLink.click(function(event){
        // var media = $(this).attr('data-media');

        // $WO__overlayMedia.html(media);
        
        $body.addClass('ovHi');

        $WO__overlay.addClass('WO__overlay--show');

        event.preventDefault();
    });

    $WO__overlayClose.click(function(event){
        // $('.WO__overlayMedia').html('');

        $body.removeClass('ovHi');

        $WO__overlay.removeClass('WO__overlay--show');

        event.preventDefault();
    });

    $WO__overlay.click(function(event){$WO__overlayClose.trigger('click');});

    $(document).keyup(function(event){
        if(event.keyCode==27){$WO__overlayClose.trigger('click');}
    });
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