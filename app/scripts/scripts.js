
jQuery(document).ready(function($){	

    /* MOBILE ICON
    ----------------------------------------------- */
    $('.nav-icon').click(function(e) {
        e.preventDefault();
        $('.nav-icon, .ambassadors, .bounty__about').stop().toggleClass('open');
    });

    /* SCROLL TO SECTION
    ----------------------------------------------- */
    $('.smooth-scroll').click(function(event) {
      event.preventDefault();
      event.stopPropagation();

      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 600)
    });	

	/* VALIDADOR DE FORM BOOTSTRAP 4
    -----------------------------------------------*/
	// Example starter JavaScript for disabling form submissions if there are invalid fields
	(function() {
	  'use strict';
	  window.addEventListener('load', function() {
		// Fetch all the forms we want to apply custom Bootstrap validation styles to
		var forms = document.getElementsByClassName('needs-validation');
		// Loop over them and prevent submission
		var validation = Array.prototype.filter.call(forms, function(form) {
		  form.addEventListener('submit', function(event) {
			if (form.checkValidity() === false) {
			  event.preventDefault();
			  event.stopPropagation();
			}
			form.classList.add('was-validated');
		  }, false);
		});
	  }, false);
	})();

    /* LAZY LOAD
    -----------------------------------------------*/
    [].forEach.call(document.querySelectorAll('img[data-src]'), function(img) {
    img.setAttribute('src', img.getAttribute('data-src'));
        img.onload = function() {
            img.removeAttribute('data-src');
        };
    });

	/* PARALLAX
    -----------------------------------------------*/
    if ( $(window).width() > 767 ) {
		$('.parallax').each(function(){
			var $obj = $(this);
			$(window).scroll(function() {
				var yPos = -($(window).scrollTop() / $obj.data('speed')); 
				var bgpos = 'right '+ yPos + 'px';
				$obj.css('background-position', bgpos );
			}); 
		});
	}

});