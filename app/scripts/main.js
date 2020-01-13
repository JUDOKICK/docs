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
      slidesToShow: 4,
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

      // animate.css
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
    // let heroLogoAnimation = bodymovin.loadAnimation({
    //   container: document.getElementById('hero__logo'),
    //   rederer: 'svg',
    //   loop: true,
    //   autoplay: false,
    //   path: 'cartesi_home_logo.json'
    // })
    let realitiesImgAnimation = bodymovin.loadAnimation({
      container: document.getElementById('realities__img'),
      rederer: 'svg',
      loop: true,
      autoplay: false,
      path: 'blockchain_need_help.json'
    })
    let cartesiImgAnimation = bodymovin.loadAnimation({
      container: document.getElementById('cartesi__feat-img__image'),
      rederer: 'svg',
      loop: true,
      autoplay: false,
      path: 'we_solve_all_these_problems.json'
    })

    $(window).on('scroll load', function(event) {
      // if ($('#hero__logo').visible(true) && !$('#hero__logo').hasClass('loop')) {
      //     $('#hero__logo').addClass('loop')
      //     heroLogoAnimation.goToAndPlay(1, true)
      // }
      if ($('#realities__img').visible(true) && !$('#realities__img').hasClass('loop')) {
        $('#realities__img').addClass('loop')
        realitiesImgAnimation.goToAndPlay(1, true)
        realitiesImgAnimation.setSpeed(1)
      }
      if ($('#cartesi__feat-img__image').visible(true) && !$('#cartesi__feat-img__image').hasClass('loop')) {
        $('#cartesi__feat-img__image').addClass('loop')
        cartesiImgAnimation.goToAndPlay(1, true)
      }
    });

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
    // $('.partners__slide').slick();
    $('.partners__slide').slick({
      dots: false,
      infinite: true,
      speed: 300,
      autoplay: true,
      autoplaySpeed: 2000,
      // centerMode: true,
      // variableWidth: true,
      slidesToShow: 6,
      slidesToScroll: 1,
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    });
    
    // FAQ
    // $('h2.faq__accordion').click(function(){
    //   $(this).toggleClass('down').parent().find('div.faq__accordion').stop().slideToggle();
    // });

    // $('div.faq__accordion').hide();
    // $('h2.faq__accordion').click(function(){
    //     $('div.faq__accordion').not(':hidden').stop().slideToggle();
    //     $(this).toggleClass('down').next().stop().slideToggle();
    // });

    $('.accordion').each(function () {
	    var $accordian = $(this);
	    $accordian.find('.accordion-head').on('click', function () {
            $(this).parent().find('.accordion-head').removeClass('open close');
            $(this).removeClass('open').addClass('close');
	        $accordian.find('.accordion-body').slideUp();
	        if (!$(this).next().is(':visible')) {
                $(this).removeClass('close').addClass('open');
	            $(this).next().slideDown();
	        }
	    });
	});

  });
})(jQuery)