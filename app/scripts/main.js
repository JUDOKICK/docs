'use strict';!function(e){e(document).ready(function(){e('.smooth-scroll').click(function(o){o.preventDefault(),o.stopPropagation(),e('html, body').stop().animate({scrollTop:e(e(this).attr('href')).offset().top},600)}),e('#how-to').on('click','.how-to__tabnav__item',function(o){o.preventDefault(),e('html, body').stop().animate({scrollTop:e('#how-to__tabcontent').offset().top-300},600)});var o={slidesToShow:4,slidesToScroll:1,centerMode:!0,autoplay:!0,autoplaySpeed:5e3,speed:400,infinite:!0,arrows:!1,dots:!1,draggable:!1,focusOnSelect:!0,pauseOnFocus:!0,pauseOnHover:!1,responsive:[{breakpoint:992,settings:'unslick'}]};e('#how-to__tabnav').slick(o);var t={slidesToShow:1,slidesToScroll:1,autoplay:!0,autoplaySpeed:5e3,speed:400,infinite:!0,arrows:!1,dots:!0,focusOnSelect:!0,pauseOnFocus:!0,pauseOnHover:!1,adaptativeHeight:!0,mobileFirst:!0,responsive:[{breakpoint:991,settings:'unslick'}]};e('#how-to__tabcontent').slick(t),e(window).on('resize orientationchange',function(){var a=e('#how-to__tabnav'),i=e('#how-to__tabcontent');a.hasClass('slick-initialized')||a.slick(o),i.hasClass('slick-initialized')||i.slick(t)}),e('.how-to__tabnav').on('afterChange',function(o,t,a){var i=e('[data-slick-index='+a+']'),s=i.find('.how-to__tabnav__item').attr('href');e('.how-to__tabcontent__item').removeClass('active'),e(s).addClass('active')}),e('.nav__button__menu').click(function(o){o.preventDefault(),e('.nav').toggleClass('active'),e('.header__logo').toggleClass('mobile-active'),e('.nav__button__menu').toggleClass('close')});var a=window.pageYOffset;window.onscroll=function(){var o=window.pageYOffset;e(window).width()<992&&(a>o||o<=0?e('.header').removeClass('hide'):e('.nav').hasClass('active')||e('.header').addClass('hide')),a=o},e(window).on('scroll load',function(o){e('.animated[animated]').each(function(o){var t=e(this).attr('animated'),a=t+' '+e(this).attr('class'),i=!1;'animation-custom'===t&&(i=!0),e(this).visible(i)&&!e(this).get(0).classList.contains(t)&&e(this).attr('class',a)})});var i=bodymovin.loadAnimation({container:document.getElementById('realities__img'),rederer:'svg',loop:!0,autoplay:!1,path:'blockchain_need_help.json'}),s=bodymovin.loadAnimation({container:document.getElementById('cartesi__feat-img__image'),rederer:'svg',loop:!0,autoplay:!1,path:'we_solve_all_these_problems.json'});e(window).on('scroll load',function(o){e('#realities__img').visible(!0)&&!e('#realities__img').hasClass('loop')&&(e('#realities__img').addClass('loop'),i.goToAndPlay(1,!0),i.setSpeed(1)),e('#cartesi__feat-img__image').visible(!0)&&!e('#cartesi__feat-img__image').hasClass('loop')&&(e('#cartesi__feat-img__image').addClass('loop'),s.goToAndPlay(1,!0))}),e('.nav__menu__item a').click(function(){e(window).width()<992&&(e('.nav').toggleClass('active'),e('.header__logo').toggleClass('mobile-active'),e('.nav__button__menu').toggleClass('close'))}),e('.imagine').imagine(),e(window).width()<992&&e(window).on('swiperight',function(o){e('#nav').hasClass('active')&&(e('.nav').toggleClass('active'),e('.header__logo').toggleClass('mobile-active'),e('.nav__button__menu').toggleClass('close'))}),e('.partners__slide').slick({dots:!1,infinite:!0,speed:300,autoplay:!0,autoplaySpeed:2e3,slidesToShow:6,slidesToScroll:1,responsive:[{breakpoint:1024,settings:{slidesToShow:3,slidesToScroll:1,infinite:!0,dots:!1}},{breakpoint:600,settings:{slidesToShow:2,slidesToScroll:1}},{breakpoint:480,settings:{slidesToShow:1,slidesToScroll:1}}]}),e('.accordion').each(function(){var o=e(this);o.find('.accordion-head').on('click',function(){e(this).parent().find('.accordion-head').removeClass('open close'),e(this).removeClass('open').addClass('close'),o.find('.accordion-body').slideUp(),e(this).next().is(':visible')||(e(this).removeClass('close').addClass('open'),e(this).next().slideDown())})})})}(jQuery);