"use strict";

/* Main.js -------------- */
(function ($) {
  $(window).scroll(function () {
    if ($(window).scrollTop() >= 450) {
      $('body').addClass('fixed-header');
    } else {
      $('body').removeClass('fixed-header');
    }
  });
  $('.search-button-trigger').on("click", function () {
    $(this).toggleClass('open');
    $('.search-section').toggleClass('open');
    $('input.search-field').focus();
  }); // page loader, see .loaded styles in css

  $('body').fadeIn(100, function () {
    setTimeout(function () {
      $('body').addClass('loaded');
    }, 400);
  }); // smooth scrolling, enabled by Beaver, needed here for back to top ----------
  // Select all links with hashes

  $('a[href*="#"]') // Remove links that don't actually link to anything
  .not('[href="#"]').not('[href="#0"]').click(function (event) {
    // On-page links
    if (location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') && location.hostname == this.hostname) {
      // Figure out element to scroll to
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']'); // Does a scroll target exist?

      if (target.length) {
        // Only prevent default if animation is actually gonna happen
        event.preventDefault();
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 1000, function () {
          // Callback after animation
          // Must change focus!
          var $target = $(target);
          $target.focus();

          if ($target.is(":focus")) {
            // Checking if the target was focused
            return false;
          } else {
            $target.attr('tabindex', '-1'); // Adding tabindex for elements not focusable

            $target.focus(); // Set focus again
          }

          ;
        });
      }
    }
  }); //  Carousel flickity setups

  $('.main-carousel1').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    imagesLoaded: true,
    lazyLoad: 2,
    wrapAround: true
  });
  $('.main-carousel2').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    imagesLoaded: true,
    lazyLoad: 2,
    wrapAround: true
  });
  $('.main-carousel3').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    imagesLoaded: true,
    lazyLoad: 2,
    wrapAround: true
  });
  $('.main-carousel4').flickity({
    // options
    cellAlign: 'center',
    contain: true,
    imagesLoaded: true,
    lazyLoad: 2,
    wrapAround: true
  }); // smooth scroll for #IDs
  // handle links with @href started with '#' only

  $(document).on('click', 'a[href^="#"]', function (e) {
    // target element id
    var id = $(this).attr('href'); // target element

    var $id = $(id);

    if ($id.length === 0) {
      return;
    } // prevent standard hash navigation (avoid blinking in IE)


    e.preventDefault(); // top position relative to the document

    var pos = $id.offset().top; // animated top scrolling

    $('body, html').animate({
      scrollTop: pos
    });
  });
})(jQuery);