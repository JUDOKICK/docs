(function($) {
  $(document).ready(function() {

    /**
     * Smooth Scroll
     */
    $('.smooth-scroll').click(function(event) {
      event.preventDefault();
      event.stopPropagation();

      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 600)
    });


    /**
     * '#how-to' prevent item click
     */
    $('#how-to').on('click', '.how-to__tabnav__item', function(event) {
      event.preventDefault();

      $('html, body').stop().animate({
        scrollTop: $('#how-to__tabcontent').offset().top - 300
      }, 600)
    });


    /**
     * Slick.js init
     */
    var tabnavOptions = {
      slidesToShow: 5,
      slidesToScroll: 1,
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 400,
      infinite: true,
      arrows: false,
      dots: false,
      draggable: false,
      focusOnSelect: true,
      pauseOnFocus: true,
      pauseOnHover: false,
      responsive: [
        {
          breakpoint: 992,
          settings: 'unslick'
        }
      ]
    };

    $('#how-to__tabnav').slick(tabnavOptions);

    var tabcontentOptions = {
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: true,
      autoplaySpeed: 5000,
      speed: 400,
      infinite: true,
      arrows: false,
      dots: true,
      focusOnSelect: true,
      pauseOnFocus: true,
      pauseOnHover: false,
      adaptativeHeight: true,
      mobileFirst: true,
      responsive: [
        {
          breakpoint: 991,
          settings: 'unslick'
        }
      ]
    };

    $('#how-to__tabcontent').slick(tabcontentOptions);

    $(window).on('resize orientationchange', function() {
      var tabnavSlider = $('#how-to__tabnav');
      var tabcontentSlider = $('#how-to__tabcontent');

      // without this check, all kinds of weird errors happen, and the slider doesn't really work
      if(!tabnavSlider.hasClass('slick-initialized')) tabnavSlider.slick(tabnavOptions);
      if(!tabcontentSlider.hasClass('slick-initialized')) tabcontentSlider.slick(tabcontentOptions);
    });

    /**
     * slick change tab
     */
    $('.how-to__tabnav').on('afterChange', function(event, slick, currentSlide){
      let slide = $('[data-slick-index='+ currentSlide +']');
      let contentTarget = slide.find('.how-to__tabnav__item').attr('href');

      $('.how-to__tabcontent__item').removeClass('active');
      $(contentTarget).addClass('active');
    });


    /**
     * open menu mobile
     */
    $('.nav__button__menu').click(function(event) {
      event.preventDefault();

      $('.nav').toggleClass('active');
      $('.header__logo').toggleClass('mobile-active');
      $('.nav__button__menu').toggleClass('close');
    });


    /**
     * hide navbar when scroll down
     */
    var prevScrollpos = window.pageYOffset;
    window.onscroll = function() {
      let currentScrollPos = window.pageYOffset;

      if ($(window).width() < 992) {
        if (prevScrollpos > currentScrollPos || currentScrollPos <= 0) {
          $('.header').removeClass('hide');
        } else {
          if (!$('.nav').hasClass('active'))
            $('.header').addClass('hide');
        }
      }

      prevScrollpos = currentScrollPos;
    }


    /**
     * apply animation classes when element
     * is visible on viewport
     */
    $(window).on('scroll load', function(event) {
      $('.animated[animated]').each(function(index) {
        let animation = $(this).attr('animated');
        let classes = animation + ' ' + $(this).attr('class');
        let checkAnyPart = false;

        if (animation === 'animation-custom') checkAnyPart = true;

        if ($(this).visible(checkAnyPart) && !$(this).get(0).classList.contains(animation)) {
          $(this).attr('class', classes);
        }
      });
    });

    /**
     * Bodymovin plugin configuration params
     */
    // bodymovin.loadAnimation({
    //   container: document.getElementById('hero__logo'),
    //   rederer: 'svg',
    //   loop: true,
    //   autoplay: true,
    //   path: 'data.json'
    // })


    /**
     * Open/Close menu on mobile devices
     */
    $('.nav__menu__item a').click(function toggleMenu() {
      if ($(window).width() < 992) {
        $('.nav').toggleClass('active');
        $('.header__logo').toggleClass('mobile-active');
        $('.nav__button__menu').toggleClass('close');
      }
    });


    /**
     * Imagine Scroll init
     */
    $('.imagine').imagine();


    /**
     * Close menu when swipe right
     */
    if ( $(window).width() < 992 ) {
      $(window).on('swiperight', function(e) {
        if ( $('#nav').hasClass('active') ) {
          $('.nav').toggleClass('active');
          $('.header__logo').toggleClass('mobile-active');
          $('.nav__button__menu').toggleClass('close');
        }
      });
    }

  });
})(jQuery)
