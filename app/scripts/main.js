(function($) {
  $(document).ready(function() {

    /**
     * Smooth Scroll
     */
    $('.smooth-scroll').click(function(event) {
      event.preventDefault();

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
      focusOnSelect: false,
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
      console.log('prevScrollpos > currentScrollPos = ', prevScrollpos > currentScrollPos)
      if (prevScrollpos > currentScrollPos) {
        $('.header').removeClass('hide');
      } else {
        if (!$('.nav').hasClass('active'))
          $('.header').addClass('hide');
      }
      prevScrollpos = currentScrollPos;
    }


    /**
     * apply animation classes when element
     * is visible on viewport
     */
    $(window).scroll(function(event) {
      $('.animated[animated]').each(function(index) {
        let classes = $(this).attr('animated') || '';
        let checkAnyPart = false;

        if (classes === 'animation-custom') checkAnyPart = true;

        if ($(this).visible(checkAnyPart))
          $(this).addClass(classes);
      });
    });

  });
})(jQuery)
