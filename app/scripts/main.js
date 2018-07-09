(function($) {
  $(document).ready(function() {

    /**
     * Smooth Scroll
     */
    $('.smooth-scroll').click(function(event) {
      event.preventDefault();

      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 300)
    });


    /**
     * '#How-to' Tabnav
     */
    $('.how-to__tabnav__item').click(function(event) {
      event.preventDefault();
      let contentTarget = $(this).attr('href');

      $('.how-to__tabnav__item').removeClass('active');
      $(this).addClass('active');

      $('.how-to__tabcontent__item').removeClass('active');
      $(contentTarget).addClass('active');
    });

  });
})(jQuery)
