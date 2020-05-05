
jQuery(document).ready(function($){

	/* IMAGENS SVG
	----------------------------------------------- */
	jQuery('img.svg').each(function(){
		var $img = jQuery(this);
		var imgID = $img.attr('id');
		var imgClass = $img.attr('class');
		var imgURL = $img.attr('src');

		jQuery.get(imgURL, function(data) {
		// Get the SVG tag, ignore the rest
		var $svg = jQuery(data).find('svg');

		// Add replaced image's ID to the new SVG
		if(typeof imgID !== 'undefined') {
		    $svg = $svg.attr('id', imgID);
		}
		// Add replaced image's classes to the new SVG
		if(typeof imgClass !== 'undefined') {
		    $svg = $svg.attr('class', imgClass+' replaced-svg');
		}

		// Remove any invalid XML tags as per http://validator.w3.org
		$svg = $svg.removeAttr('xmlns:a');

		// Replace image with new SVG
		$img.replaceWith($svg);
		}, 'xml');   
	});

    /* MOBILE ICON
    ----------------------------------------------- */
    $('.nav-icon').click(function(e) {
        e.preventDefault();
        $(this).stop().toggleClass('open');
    });

    /* SCROLL TO SECTION
    ----------------------------------------------- */
    // $('a[href*="#"]:not([href="#"])').click(function(event) {
    //     event.preventDefault();
    //     $('html, body').animate({
    //       scrollTop: $($.attr(this, 'href')).offset().top
    //     }, 500);
    // });
    $('.smooth-scroll').click(function(event) {
      event.preventDefault();
      event.stopPropagation();

      $('html, body').stop().animate({
        scrollTop: $($(this).attr('href')).offset().top
      }, 600)
    });

	/* MASCARA DE TELEFONE
    ----------------------------------------------- */
	var TelsMask = function (val) {
		return val.replace(/\D/g, '').length === 11 ? '(00) 00000-0000' : '(00) 0000-00009';
	}, 
	spOptions = {
		onKeyPress: function(val, e, field, options) {
			field.mask(TelsMask.apply({}, arguments), options);
		}
	};

	$('.tel').mask(TelsMask, spOptions);

	/* MASCARAS
    ----------------------------------------------- */
	$('.cpf').mask('999.999.999-99');
	$('.cnpj').mask('99.999.999/9999-99');
	$('.cep').mask('99.999-999');
	$('.nascimento').mask('99/99/9999');

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
    
    // $('.parallax').each(function(){
    //     var $obj = $(this);
    //     $(window).scroll(function() {
    //         var yPos = -($(window).scrollTop() / $obj.data('speed')); 
    //         var bgpos = '50% '+ yPos + 'px';
    //         $obj.css('transform', 'translate(' + bgpos + ')' );
    //     }); 
    // });

    // $('body').scroll(function() { 
    //     $('.block1, .block2, .block3').animate({top:$(this).scrollTop()},100,"linear");
    // })
    // window.addEventListener('scroll', function() {
    //     var $obj = $(this);
    //     $(window).scroll(function() {
    //         var yPos = -($(window).scrollTop() / $obj.data('speed')); 
    //         var bgpos = '50% '+ yPos + 'px';
    //         $obj.css('transform', 'translate(' + bgpos + ')' );
    //     }); 
    // });

    //https://codepen.io/rachsmith/post/how-to-move-elements-on-scroll-in-a-way-that-doesn-t-suck-too-bad
    // var whatsittake = document.getElementById('whatsittake');
    // var windowHeight = window.innerHeight;
    // var windowWidth = window.innerWidth;
    // var scrollArea = 1000 - windowHeight;
    // var block1 = document.getElementsByClassName('block1')[0];
    // var block2 = document.getElementsByClassName('block2')[1];
    // var block2 = document.getElementsByClassName('block3')[3];

    // update position of square 1 and square 2 when scroll event fires.
    // window.addEventListener('scroll', function() {
    //   var scrollTop = window.pageYOffset || window.scrollTop;
    //   var scrollPercent = scrollTop/scrollArea || 0;
      
    //   block1.style.top = scrollPercent*window.innerWidth + 'px';
    //   block2.style.top = 0 - scrollPercent*window.innerWidth*0.6 + 'px';

    // });

	/* IGUALAR ALTURAS
    -----------------------------------------------
    $('.item').matchHeight(); */

    /* VIDEOS RESPONSIVOS
    ----------------------------------------------- 
	$("p iframe, p object, p embed, p video").wrap( "<div class='embed-responsive embed-responsive-16by9'></div>" );*/
	// var url = window.location.pathname.split("/").pop();
    // parts = window.location.pathname.split('/');
    // langurl = parts.pop() || parts.pop();
    // // alert(lastSegment);

    // url = window.location.pathname.split('/');
    // // alert(url);

    // var href = location.href;
    // alert(href.match(/([^\/]*)\/*$/)[1]);

});