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
    $('.how-to__tabnav__item').click(function(event) {
      event.preventDefault();
    });


    /**
     * Slick.js init
     */
    $('#how-to__tabnav').slick({
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
          breakpoint: 991,
          settings: 'unslick'
        }
      ]
    });

    $('#how-to__tabcontent').slick({
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
          breakpoint: 992,
          settings: 'unslick'
        }
      ]
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
        if (prevScrollpos > currentScrollPos) {
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

    // bodymovin.loadAnimation({
    //   container: document.getElementById('hero__logo'),
    //   rederer: 'svg',
    //   loop: true,
    //   autoplay: true,
    //   path: 'data.json'
    // })

    $('.nav__menu__item a').click(function() {
      if ($(window).width() < 992) {
        $('.nav').toggleClass('active');
        $('.header__logo').toggleClass('mobile-active');
        $('.nav__button__menu').toggleClass('close');
      }
    })

    // $('#hero__logo')[0].play();
  });
})(jQuery)
