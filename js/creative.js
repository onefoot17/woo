(function($) {
    "use strict"; // Start of use strict

    var $body = $('body'),
        $window = $(window),
        $navLink = $('.nav-link'),
        // $navLinkActive = ('nav-link-active'),
        $WO__navbar = $('.navbar'),
        $WO__navbarNav = $('.navbar-nav'),
        $WO__navbarHeight = $WO__navbar.outerHeight(),
        $WO__main = $('#WO__main'),
        $WO__navMobileButtonOpen = $('.WO__nav--mobileButtonOpen'),
        $WO__navMobileButtonClose = $('.WO__nav--mobileButtonClose');

    // Navigation resize
    $WO__main.css('padding-top', $WO__navbarHeight);

    $window.resize(function(){
        var $WO__navbarHeight = $WO__navbar.outerHeight();

        $WO__main.css('padding-top', $WO__navbarHeight);
    });

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
    // Add active class to nav items
    $navLink.click(function(e) {
    //     var $this = $(this);
    //     $navLink.removeClass($navLinkActive);
    //     $this.addClass($navLinkActive);
        $WO__navMobileButtonClose.trigger('click');
        e.preventDefault();
    });

    // Add active class to nav items on scroll
    $('body').scrollspy({
        target: '.navbar',
        offset: $WO__navbarHeight
    });
    // end Add active class to nav items on scroll

    // Shrink navbar on scroll
    var navbarShrink = function() {
        if ($(".navbar").offset().top > 20) {
            $(".navbar").addClass("navbar-shrink");
        } else {
            $(".navbar").removeClass("navbar-shrink");
        }
    };
    navbarShrink();
    $(window).scroll(navbarShrink);
    // end Shrink navbar
    // end Add active class to nav items

    // Nav mobile
    $WO__navMobileButtonOpen.click(function(e){
        $WO__navbarNav.toggleClass('navbar-nav--show');
        e.preventDefault();
    });

    $WO__navMobileButtonClose.click(function(e){
        if ($WO__navbarNav.hasClass('navbar-nav--show')){
            $WO__navbarNav.toggleClass('navbar-nav--show');
        }

        e.preventDefault();
    });

    // $body.click(function(e){
    //     $WO__navMobileButtonClose.trigger('click');
    // });

    $(document).keyup(function(e){
        if(e.keyCode==27){$WO__navMobileButtonClose.trigger('click');}
    });
    // end Nav mobile
    // end Navigation

    // Smooth scrolling
    $('a.js-scroll-trigger[href*="#"]:not([href="#"])').click(function(e) {
        if (this.hash !== "") {
            var hash = this.hash,
                $WO__navbarHeight = $WO__navbar.outerHeight();
            console.log(hash);

            $('html, body').animate({
                scrollTop: ($(hash).offset().top)
            }, {
                duration: 1000,
                easing: 'easeInOutExpo',
                start: function(){
                    $(hash).css('padding-top', $WO__navbarHeight);
                }
            });

            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
                        
            e.preventDefault();
        }
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

    // Features slides on mobile
    $("#featuresSlides").responsiveSlides({
        auto: false,
        pager: true,
        speed: 300,
        // maxwidth: 540,
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
})(jQuery); // End of use strict