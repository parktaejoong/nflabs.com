App = Ember.Application.create();

Ember.Handlebars.registerBoundHelper('currentDate', function() {
  return moment().year();
});
;$(document).ready(function() {
   "use strict";
   var $colorsHTML = '';

   $("body").append($colorsHTML);
   /*
    var s = document.createElement("script");
    s.type = "text/javascript";
    s.src = "./js-plugin/jquery-cookie/jquery.cookie.js";
    $("body").append(s);  
    */


   if ($.cookie("css")) {
      $("#colors").attr("href", $.cookie("css"));
   }
   $(".switcher li a").click(function() {

      $("#colors").attr("href", $(this).attr("href"));
      $.cookie("css", $(this).attr("href"));
      return false;
   });

   $('#showHideSwitcher').click(function(e) {
      if ($('.styleSwitcher').css('left') === '-157px') {
         $('.styleSwitcher').animate(
                 {'left' : 0},
         300, 'easeOutQuart', function() {
            // stuff to do after animation is complete
         });

      } else {
         $('.styleSwitcher').animate(
                 {'left' : -157},
         300, 'easeInQuart', function() {
            // stuff to do after animation is complete
         });
      }
      e.preventDefault();
   });
});


$(document).ready(function() {
   "use strict";

   if ($('#homeFullScreen').length)
   {
      fullscreenImage();
   }
   //alert($('#mainHeader').height());
   //alert( $(window).height());
   var $starter = $(window).height() - ($('#mainHeader').height());
   $(window).scroll(function() {

      if ($('#fullScreen').length)
      {


         if ($(window).scrollTop() >= $starter) {
            $('#mainHeader').slideDown();
         } else if ($(window).scrollTop() == 0) {
            $('#mainHeader').slideUp();
         }
      }

   });

   //IE
   if (!Modernizr.input.placeholder) {

      $('[placeholder]').focus(function() {
         var input = $(this);
         if (input.val() == input.attr('placeholder')) {
            input.val('');
            input.removeClass('placeholder');
         }
      }).blur(function() {
         var input = $(this);
         if (input.val() == '' || input.val() == input.attr('placeholder')) {
            input.addClass('placeholder');
            input.val(input.attr('placeholder'));
         }
      }).blur();
      $('[placeholder]').parents('form').submit(function() {
         $(this).find('[placeholder]').each(function() {
            var input = $(this);
            if (input.val() == input.attr('placeholder')) {
               input.val('');
            }
         })
      });

   }

   if ($("a.image-link").length) {

      $("a.image-link").click(function(e) {

         var items = [];

         items.push({src : $(this).attr('href')});

         if ($(this).data('gallery')) {

            var $arraySrc = $(this).data('gallery').split(',');

            $.each($arraySrc, function(i, v) {
               items.push({
                  src : v
               });
            });
         }

         $.magnificPopup.open({
            type : 'image',
            mainClass : 'mfp-fade',
            items : items,
            gallery : {
               enabled : true
            }
         });

         e.preventDefault();
      });

   }



   if ($("a.image-iframe").length) {
      $('a.image-iframe').magnificPopup({type : 'iframe', mainClass : 'mfp-fade'});
   }

   $('.tips').tooltip({placement : 'top'});


   $('.accordion').on('show hide', function(e) {
      $('.accordion-toggle').removeClass('active');
      $(e.target).siblings('.accordion-heading').find('.accordion-toggle').addClass('active');
      $(e.target).siblings('.accordion-heading').find('.accordion-toggle i').toggleClass('icon-plus icon-minus', 200);

   });


   $('.slideContact').click(function(e) {

      if ($(window).width() >= 800) {

         $('#contact').slideToggle('normal', 'easeInQuad', function() {

            $('#contactinfoWrapper').css('margin-left', 0);
            $('#mapSlideWrapper').css('margin-left', 3000);
            $('#contactinfoWrapper').fadeToggle();


         });
         $('#closeContact').fadeToggle();
         return false;

      } else {

         return true;

      }
      e.preventDefault();
   });


   $('#closeContact').click(function(e) {


      $('#contactinfoWrapper').fadeOut('normal', 'easeInQuad', function() {
         $('#contactinfoWrapper').css('margin-left', 0);
         $('#mapSlideWrapper').css('margin-left', 3000);
      });

      $('#contact').slideUp('normal', 'easeOutQuad');

      $(this).fadeOut();

      e.preventDefault();

   });


   /* MAP */
   $('#mapTrigger').click(function(e) {


      $('#mapSlideWrapper').css('display', 'block');
      initialize('mapWrapper');

      $('#contactinfoWrapper, #contactinfoWrapperPage').animate({
         marginLeft : '-2000px'
      }, 400, function() {
      });


      $('#mapSlideWrapper').animate({
         marginLeft : '25px'
      }, 400, function() {
      });

      appendBootstrap();

      e.preventDefault();
   });

   if ($('#mapWrapper').length)
      appendBootstrap();


   $('#mapTriggerLoader').click(function(e) {


      $('#mapSlide').css('display', 'block');

      $('#contactSlide').animate({
         marginLeft : '-2000px'
      }, 400, function() {
      });


      $('#mapSlide').animate({
         marginLeft : '0'
      }, 400, function() {
         $('#contactSlide').css('display', 'none');
      });


      appendBootstrap();

      e.preventDefault();
   });


   $('#mapReturn').click(function(e) {
      //$('#mapWrapper').css('margin-bottom', '3em');

      $('#contactSlide').css('display', 'block');
      $('#mapSlide').animate({
         marginLeft : '3000px'
      }, 400, function() {
      });


      $('#contactSlide').animate({
         marginLeft : '0'
      }, 400, function() {
         $('#mapSlide').css('display', 'none');
      });

      e.preventDefault();
   });


   if ($('#portfolio-carousel').length) {
      alert('toto');
      $("#portfolio-carousel").owlCarousel();
   }

   if ($('#flexHome').length) {

      $('#flexHome').flexslider({
         animation : "slide",
         controlNav : true,
         directionNav : false,
         touch : true,
         direction : "vertical"

      });
   }


   if ($('.flexFullScreen').length) {

      $('.flexFullScreen').flexslider({
         animation : "slide",
         controlNav : true,
         directionNav : true,
         slideshow : true,
         touch : true,
         prevText : '<i class="icon-left-open"></i>',
         nextText : '<i class="icon-right-open"></i>',
         start : function(slider) {
            setTimeout("animateTxt(" + slider.currentSlide + ", 'in')", 100);
         },
         before : function(slider) {
            setTimeout("animateTxt(" + slider.currentSlide + ")", 100);
         },
         after : function(slider) {
            setTimeout("animateTxt(" + slider.currentSlide + ", 'in')", 100);
         }
      });

   }


   if ($('.flexScreenSlider').length) {

      $('.flexScreenSlider').flexslider({
         animation : "slide",
         controlNav : false,
         touch : true,
         slideshow : true,
         prevText : '<i class="icon-left-open"></i>',
         nextText : '<i class="icon-right-open"></i>'
      });
   }


   if ($('.flexPortfolio').length) {

      $('.flexPortfolio').flexslider({
         animation : "slide",
         controlNav : false,
         touch : true,
         slideshow : true,
         prevText : '<i class="icon-left-open"></i>',
         nextText : '<i class="icon-right-open"></i>'
      });
   }


   if ($('.flexProject').length) {

      $('.flexProject').flexslider({
         animation : "slide",
         controlNav : true,
         touch : true,
         slideshow : true,
         prevText : '<i class="icon-left-open"></i>',
         nextText : '<i class="icon-right-open"></i>'
      });
   }

   if ($('.flexApp').length) {

      $('.flexApp').flexslider({
         animation : "slide",
         controlNav : false,
         touch : true,
         prevText : '<i class="icon-left-open"></i>',
         nextText : '<i class="icon-right-open"></i>'
      });
   }


   if ($('.imgHover').length) {

      $('.imgHover article').hover(
              function() {

                 var $this = $(this);

                 var fromTop = ($('.imgWrapper', $this).height() / 2 - $('.iconLinks', $this).height() / 2);
                 $('.iconLinks', $this).css('margin-top', fromTop);

                 $('.mediaHover', $this).height($('.imgWrapper', $this).height());

                 $('.mask', this).css('height', $('.imgWrapper', this).height());
                 $('.mask', this).css('width', $('.imgWrapper', this).width());
                 $('.mask', this).css('margin-top', $('.imgWrapper', this).height());


                 $('.mask', this).stop(1).show().css('margin-top', $('.imgWrapper', this).height()).animate({marginTop : 0}, 200, function() {

                    $('.iconLinks', $this).css('display', 'block');
                    if (Modernizr.csstransitions) {
                       $('.iconLinks a').addClass('animated');


                       $('.iconLinks a', $this).removeClass('flipOutX');
                       $('.iconLinks a', $this).addClass('bounceInDown');

                    } else {

                       $('.iconLinks', $this).stop(true, false).fadeIn('fast');
                    }


                 });

              }, function() {

         var $this = $(this);


         $('.mask', this).stop(1).show().animate({marginTop : $('.imgWrapper', $this).height()}, 200, function() {

            if (Modernizr.csstransitions) {
               $('.iconLinks a', $this).removeClass('bounceInDown');
               $('.iconLinks a', $this).addClass('flipOutX');

            } else {
               $('.iconLinks', $this).stop(true, false).fadeOut('fast');
            }

         });

      });
   }

   $('.socialIcon').hover(
           function() {
              $(this).stop(true, true).addClass('socialHoverClass', 300);
           },
           function() {
              $(this).removeClass('socialHoverClass', 300);
           });





   $('.tabs li, .accordion h2').hover(
           function() {
              $(this).stop(true, true).addClass('speBtnHover', 300);
           },
           function() {
              $(this).stop(true, true).removeClass('speBtnHover', 100);
           });

   $('.alert').delegate('button', 'click', function() {
      $(this).parent().fadeOut('fast');
   });


   if ($('.colorHover').length) {
      var array = [];
      $('.colorHover').hover(
              function() {

                 array[0] = $(this).attr('src');
                 $(this).attr('src', $(this).attr('src').replace('-off', ''));

              },
              function() {

                 $(this).attr('src', array[0]);

              });
   }

   if ($('.boxIcon').length) {

      $('.boxIcon').hover(function() {
         var $this = $(this);

         $this.css('opacity', '1');
         //$this.find('.boxContent>p').stop(true, false).css('opacity', 0);
         $this.addClass('hover');
         $('.boxContent>p').css('bottom', '-50px');
         $this.find('.boxContent>p').stop(true, false).css('display', 'block');

         $this.find('.iconWrapper i').addClass('triggeredHover');

         $this.find('.boxContent>p').stop(true, false).animate({
            'margin-top' : '0px'},
         300, function() {
            // stuff to do after animation is complete
         });


      }, function() {
         var $this = $(this);
         $this.removeClass('hover');

         $this.find('.boxContent>p').stop(true, false).css('display', 'none');
         $this.find('.boxContent>p').css('margin-top', '250px');
         $this.find('.iconWrapper i').removeClass('triggeredHover');


      });
   }

   $('#quoteTrigger').click(function(e) {

      //$("#quoteWrapper").scrollTop(0);

      if (!$('#quoteFormWrapper').is(':visible')) {
         $('html, body').animate({scrollTop : $("#quoteWrapper").offset().top}, 300);
      }

      var $this = $(this);


      $('#quoteFormWrapper').slideToggle('fast', function() {

         $this.text($('#quoteFormWrapper').is(':visible') ? "Close form" : "I have a project");

      });


      e.preventDefault();
   });

   if ($('#shareme').length) {

      $('#shareme').sharrre({
         share : {
            googlePlus : true,
            facebook : true,
            twitter : true,
            linkedin : true
         },
         buttons : {
            googlePlus : {size : 'tall', annotation : 'bubble'},
            facebook : {layout : 'box_count'},
            twitter : {count : 'vertical'},
            linkedin : {counter : 'top'}
         },
         enableHover : false,
         enableCounter : false,
         enableTracking : true,
         //url:'document.location.href'
      });
   }

   if ($('.previewTrigger').length) {

      $('.mask').css('height', $('.previewTrigger').height());
      $('.mask').css('width', $('.previewTrigger').width());
      // $('.mask', this).css('top', $('.previewTrigger', this).width());
      // $('.mask', this).css('left', $('.previewTrigger', this).width());

      $('.previewTrigger').hover(function() {

         var $this = $(this);

         $this.children('.mask').fadeIn('fast');

         if (Modernizr.csstransitions) {
            $('.iconWrapper', $this).addClass('animated');
            $('.iconWrapper', $this).css('display', 'block');
            $('.iconWrapper', $this).removeClass('flipOutX');
            $('.iconWrapper', $this).addClass('bounceInDown');
         } else {
            $('.iconWrapper', $this).stop(true, false).fadeIn('fast');
         }

      }, function() {

         var $this = $(this);

         $this.children('.mask').fadeOut('fast');

         if (Modernizr.csstransitions) {
            $('.iconWrapper', $this).removeClass('bounceInDown');
            $('.iconWrapper', $this).addClass('flipOutX');
            $('.iconWrapper', $this).css('display', 'none');
            $('.iconWrapper', $this).removeClass('animated');
         } else {
            $('.iconWrapper', $this).stop(true, false).fadeOut('fast');
         }

      });
   }

// PAGE SLIDE
   $(".pageSheet").pageslide({
      direction : "left",
      modal : true,
      iframe : true,
      speed : "slow"
   });

   $('.nav a').on('click', function() {

      if ($('.navbar-toggle').css('display') != 'none')
         $('.navbar-toggle').click();

   });

//END DOCUMENT READY   
});


$(window).load(function() {

   "use strict";
   /*
    |--------------------------------------------------------------------------
    | PRELOADER
    |--------------------------------------------------------------------------
    */
   $('#status').fadeOut(); // will first fade out the loading animation
   $('#preloader').delay(350).fadeOut('slow'); // will fade out the white DIV that covers the website.
   $('body').delay(350).css({'overflow' : 'visible'});

   /*
    |--------------------------------------------------------------------------
    | ISOTOPE USAGE FILTERING
    |--------------------------------------------------------------------------
    */
   if ($('.isotopeWrapper').length) {

      var $container = $('.isotopeWrapper');
      var $resize = $('.isotopeWrapper').attr('id');
      // initialize isotope

      $container.isotope({
         itemSelector : '.isotopeItem',
         resizable : false, // disable normal resizing
         masonry : {
            columnWidth : $container.width() / $resize
         }

      });
      var rightHeight = $('#works').height();
      $('#filter a').click(function() {


         $('#works').height(rightHeight);
         $('#filter a').removeClass('current');


         $(this).addClass('current');
         var selector = $(this).attr('data-filter');
         $container.isotope({
            filter : selector,
            animationOptions : {
               duration : 1000,
               easing : 'easeOutQuart',
               queue : false
            }
         });
         return false;
      });


      $(window).smartresize(function() {
         $container.isotope({
            // update columnWidth to a percentage of container width
            masonry : {
               columnWidth : $container.width() / $resize
            }
         });
      });


   }


   /**PROCESS ICONS**/
   $('.iconBoxV3 a').hover(function() {

      if (Modernizr.csstransitions) {

         $(this).stop(false, true).toggleClass('hover', 150);
         $('i', this).css('-webkit-transform', 'rotateZ(360deg)');
         $('i', this).css('-moz-transform', 'rotateZ(360deg)');
         $('i', this).css('-o-transform', 'rotateZ(360deg)');
         $('i', this).css('transform', 'rotateZ(360deg)');

      } else {

         $(this).stop(false, true).toggleClass('hover', 150);

      }

   }, function() {

      if (Modernizr.csstransitions) {
         $(this).stop(false, true).toggleClass('hover', 150);
         $('i', this).css('-webkit-transform', 'rotateZ(0deg)');
         $('i', this).css('-moz-transform', 'rotateZ(0deg)');
         $('i', this).css('-o-transform', 'rotateZ(0deg)');
         $('i', this).css('transform', 'rotateZ(0deg)');

      } else {

         $(this).stop(false, true).toggleClass('hover', 150);
      }

   });


   if ($('.scrollMenu').length) {


      if ($('.localscroll').length) {
         $('.localscroll').localScroll({
            lazy : true,
            offset : {
               top : -($('#mainHeader').height() - 1)
            }
         });
      }

      var isMobile = false;

      if (Modernizr.mq('only all and (max-width: 1024px)')) {
         isMobile = true;
      }


      if (isMobile === false && ($('#paralaxSlice1').length || isMobile === false && $('#paralaxSlice2').length))
      {


         $(window).stellar({
            horizontalScrolling : false,
            responsive : true/*,
             scrollProperty: 'scroll',
             parallaxElements: false,
             horizontalScrolling: false,
             horizontalOffset: 0,
             verticalOffset: 0*/
         });

      }


   }


//END WINDOW LOAD
});

function animateTxt(curSlide, action) {
   "use strict";
   if (action === 'in') {
      var i = 0;
      var animaDelay = 0;

      $('.slideN' + curSlide + ':not([class*=clone])>.caption').css('display', 'block');

      $('.slideN' + curSlide + ':not([class*=clone])>.caption>div').each(function( ) {
         if (Modernizr.csstransitions) {

            $(this).css('-webkit-animation-delay', animaDelay + 's');
            $(this).css('-moz-animation-delay', animaDelay + 's');
            $(this).css('-0-animation-delay', animaDelay + 's');
            $(this).css('-ms-animation-delay', animaDelay + 's');
            $(this).css('animation-delay-delay', animaDelay + 's');

            $(this).show().addClass('animated').addClass($(this).attr('data-animation'));


            // $(this).show('slow', function() {
            //     $(this).addClass('animated').addClass($(this).attr('data-animation'));
            // });


         } else {
            var timing;
            $('.slideN' + curSlide + ':not([class*=clone])>.caption>div').hide();
            if (i === 0) {
               timing = 0;
            } else if (i === 1) {
               timing = 300;
            } else {
               timing = 300 * i;
            }
            $(this).delay(timing).fadeIn('fast');
         }
         i++;
         animaDelay = animaDelay + 0.2;


      });

   } else {
      var j = 0;
      $('.slideN' + curSlide + ':not([class*=clone])>.caption').css('display', 'none');

      $('.slideN' + curSlide + ':not([class*=clone])>.caption>div').each(function( ) {
         if (Modernizr.csstransitions) {

            $(this).removeClass($(this).attr('data-animation')).removeClass('animated').hide();

         } else {
            $(this).hide();
         }
         j++;
      });
   }

}



/*
 * GOOGLE MAP
 */

function appendBootstrap() {
   "use strict";
   var script = document.createElement("script");
   script.type = "text/javascript";
   script.src = "http://maps.google.com/maps/api/js?sensor=false&callback=initialize";
   document.body.appendChild(script);
}


function initialize(id) {
   "use strict";
   var image = 'images/icon-map.png';

   var overlayTitle = 'Agencies';

   var locations = [/*
    //point number 1
    ['Madison Square Garden', '4 Pennsylvania Plaza, New York, NY'],
    
    //point number 2
    ['Best town ever', 'Santa Cruz', 36.986021, -122.02216399999998],
    
    //point number 3 
    ['Located in the Midwestern United States', 'Kansas'],
    
    //point number 4
    ['I\'ll definitly be there one day', 'Chicago', 41.8781136, -87.62979819999998] */
   ];


   id = (id === undefined) ? 'mapWrapper' : id;

   var map = new google.maps.Map(document.getElementById(id), {
      mapTypeId : google.maps.MapTypeId.ROADMAP,
      scrollwheel : false,
      zoomControl : true,
      zoomControlOptions : {
         style : google.maps.ZoomControlStyle.LARGE,
         position : google.maps.ControlPosition.LEFT_CENTER
      },
      streetViewControl : true,
      scaleControl : false,
      zoom : 14,
      styles : [
         {
            "featureType" : "water",
            "stylers" : [
               {
                  "color" : "#6196AD"
               },
            ]
         },
         {
            "featureType" : "road",
            "elementType" : "geometry.fill",
            "stylers" : [
               {
                  "color" : "#FCFFF5"
               },
            ]
         },
         {
            "featureType" : "road",
            "elementType" : "geometry.stroke",
            "stylers" : [
               {
                  "color" : "#808080"
               },
               {
                  "lightness" : 54
               }
            ]
         },
         {
            "featureType" : "landscape.man_made",
            "elementType" : "geometry.fill",
            "stylers" : [
               {
                  "color" : "#dde1d4"
               }
            ]
         },
         {
            "featureType" : "poi.park",
            "elementType" : "geometry.fill",
            "stylers" : [
               {
                  "color" : "#73AB7D"
               }
            ]
         },
         {
            "featureType" : "road",
            "elementType" : "labels.text.fill",
            "stylers" : [
               {
                  "color" : "#767676"
               }
            ]
         },
         {
            "featureType" : "road",
            "elementType" : "labels.text.stroke",
            "stylers" : [
               {
                  "color" : "#ffffff"
               }
            ]
         },
         {
            "featureType" : "road.highway",
            "elementType" : "geometry.fill",
            "stylers" : [
               {
                  "color" : "#7e7341"
               }
            ]
         },
         {
            "featureType" : "landscape.natural",
            "elementType" : "geometry.fill",
            "stylers" : [
               {
                  "visibility" : "on"
               },
               {
                  "color" : "#dee6e6"
               }
            ]
         },
         {
            "featureType" : "poi.park",
            "stylers" : [
               {
                  "visibility" : "on"
               }
            ]
         },
         {
            "featureType" : "poi.sports_complex",
            "stylers" : [
               {
                  "visibility" : "on"
               }
            ]
         },
         {
            "featureType" : "poi.medical",
            "stylers" : [
               {
                  "visibility" : "on"
               }
            ]
         },
         {
            "featureType" : "poi.business",
            "stylers" : [
               {
                  "visibility" : "simplified"
               }
            ]
         }
      ]

   });

   var myLatlng;
   var marker, i;
   var bounds = new google.maps.LatLngBounds();
   var infowindow = new google.maps.InfoWindow({content : "loading..."});

   for (i = 0; i < locations.length; i++) {


      if (locations[i][2] !== undefined && locations[i][3] !== undefined) {
         var content = '<div class="infoWindow">' + locations[i][0] + '<br>' + locations[i][1] + '</div>';
         (function(content) {
            myLatlng = new google.maps.LatLng(locations[i][2], locations[i][3]);

            marker = new google.maps.Marker({
               position : myLatlng,
               icon : image,
               title : overlayTitle,
               map : map
            });

            google.maps.event.addListener(marker, 'click', (function() {
               return function() {
                  infowindow.setContent(content);
                  infowindow.open(map, this);
               };

            })(this, i));

            if (locations.length > 1) {
               bounds.extend(myLatlng);
               map.fitBounds(bounds);
            } else {
               map.setCenter(myLatlng);
            }

         })(content);
      } else {

         var geocoder = new google.maps.Geocoder();
         var info = locations[i][0];
         var addr = locations[i][1];
         var latLng = locations[i][1];

         (function(info, addr) {

            geocoder.geocode({
               'address' : latLng

            }, function(results) {

               myLatlng = results[0].geometry.location;

               marker = new google.maps.Marker({
                  position : myLatlng,
                  icon : image,
                  title : overlayTitle,
                  map : map
               });
               var $content = '<div class="infoWindow">' + info + '<br>' + addr + '</div>';
               google.maps.event.addListener(marker, 'click', (function() {
                  return function() {
                     infowindow.setContent($content);
                     infowindow.open(map, this);
                  };
               })(this, i));

               if (locations.length > 1) {
                  bounds.extend(myLatlng);
                  map.fitBounds(bounds);
               } else {
                  map.setCenter(myLatlng);
               }
            });
         })(info, addr);

      }
   }
}




/** FULLSCREEN IMAGE **/
function fullscreenImage() {
   $('#homeFullScreen').css({height : $(window).height()})
}

$(window).on("resize", function(e) {

   if ($('#fullScreen').length)
   {
      fullscreenImage();
   }

});










;/* Modernizr 2.6.1 (Custom Build) | MIT & BSD
 * Build: http://modernizr.com/download/#-fontface-backgroundsize-borderimage-borderradius-boxshadow-flexbox-hsla-multiplebgs-opacity-rgba-textshadow-cssanimations-csscolumns-generatedcontent-cssgradients-cssreflections-csstransforms-csstransforms3d-csstransitions-applicationcache-canvas-canvastext-draganddrop-hashchange-history-audio-video-indexeddb-input-inputtypes-localstorage-postmessage-sessionstorage-websockets-websqldatabase-webworkers-geolocation-inlinesvg-smil-svg-svgclippaths-touch-webgl-shiv-mq-cssclasses-addtest-prefixed-teststyles-testprop-testallprops-hasevent-prefixes-domprefixes-load
 */
;window.Modernizr=function(a,b,c){function D(a){j.cssText=a}function E(a,b){return D(n.join(a+";")+(b||""))}function F(a,b){return typeof a===b}function G(a,b){return!!~(""+a).indexOf(b)}function H(a,b){for(var d in a){var e=a[d];if(!G(e,"-")&&j[e]!==c)return b=="pfx"?e:!0}return!1}function I(a,b,d){for(var e in a){var f=b[a[e]];if(f!==c)return d===!1?a[e]:F(f,"function")?f.bind(d||b):f}return!1}function J(a,b,c){var d=a.charAt(0).toUpperCase()+a.slice(1),e=(a+" "+p.join(d+" ")+d).split(" ");return F(b,"string")||F(b,"undefined")?H(e,b):(e=(a+" "+q.join(d+" ")+d).split(" "),I(e,b,c))}function K(){e.input=function(c){for(var d=0,e=c.length;d<e;d++)u[c[d]]=c[d]in k;return u.list&&(u.list=!!b.createElement("datalist")&&!!a.HTMLDataListElement),u}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),e.inputtypes=function(a){for(var d=0,e,f,h,i=a.length;d<i;d++)k.setAttribute("type",f=a[d]),e=k.type!=="text",e&&(k.value=l,k.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(f)&&k.style.WebkitAppearance!==c?(g.appendChild(k),h=b.defaultView,e=h.getComputedStyle&&h.getComputedStyle(k,null).WebkitAppearance!=="textfield"&&k.offsetHeight!==0,g.removeChild(k)):/^(search|tel)$/.test(f)||(/^(url|email)$/.test(f)?e=k.checkValidity&&k.checkValidity()===!1:e=k.value!=l)),t[a[d]]=!!e;return t}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var d="2.6.1",e={},f=!0,g=b.documentElement,h="modernizr",i=b.createElement(h),j=i.style,k=b.createElement("input"),l=":)",m={}.toString,n=" -webkit- -moz- -o- -ms- ".split(" "),o="Webkit Moz O ms",p=o.split(" "),q=o.toLowerCase().split(" "),r={svg:"http://www.w3.org/2000/svg"},s={},t={},u={},v=[],w=v.slice,x,y=function(a,c,d,e){var f,i,j,k=b.createElement("div"),l=b.body,m=l?l:b.createElement("body");if(parseInt(d,10))while(d--)j=b.createElement("div"),j.id=e?e[d]:h+(d+1),k.appendChild(j);return f=["&#173;",'<style id="s',h,'">',a,"</style>"].join(""),k.id=h,(l?k:m).innerHTML+=f,m.appendChild(k),l||(m.style.background="",g.appendChild(m)),i=c(k,a),l?k.parentNode.removeChild(k):m.parentNode.removeChild(m),!!i},z=function(b){var c=a.matchMedia||a.msMatchMedia;if(c)return c(b).matches;var d;return y("@media "+b+" { #"+h+" { position: absolute; } }",function(b){d=(a.getComputedStyle?getComputedStyle(b,null):b.currentStyle)["position"]=="absolute"}),d},A=function(){function d(d,e){e=e||b.createElement(a[d]||"div"),d="on"+d;var f=d in e;return f||(e.setAttribute||(e=b.createElement("div")),e.setAttribute&&e.removeAttribute&&(e.setAttribute(d,""),f=F(e[d],"function"),F(e[d],"undefined")||(e[d]=c),e.removeAttribute(d))),e=null,f}var a={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return d}(),B={}.hasOwnProperty,C;!F(B,"undefined")&&!F(B.call,"undefined")?C=function(a,b){return B.call(a,b)}:C=function(a,b){return b in a&&F(a.constructor.prototype[b],"undefined")},Function.prototype.bind||(Function.prototype.bind=function(b){var c=this;if(typeof c!="function")throw new TypeError;var d=w.call(arguments,1),e=function(){if(this instanceof e){var a=function(){};a.prototype=c.prototype;var f=new a,g=c.apply(f,d.concat(w.call(arguments)));return Object(g)===g?g:f}return c.apply(b,d.concat(w.call(arguments)))};return e}),s.flexbox=function(){return J("flexWrap")},s.canvas=function(){var a=b.createElement("canvas");return!!a.getContext&&!!a.getContext("2d")},s.canvastext=function(){return!!e.canvas&&!!F(b.createElement("canvas").getContext("2d").fillText,"function")},s.webgl=function(){return!!a.WebGLRenderingContext},s.touch=function(){var c;return"ontouchstart"in a||a.DocumentTouch&&b instanceof DocumentTouch?c=!0:y(["@media (",n.join("touch-enabled),("),h,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(a){c=a.offsetTop===9}),c},s.geolocation=function(){return"geolocation"in navigator},s.postmessage=function(){return!!a.postMessage},s.websqldatabase=function(){return!!a.openDatabase},s.indexedDB=function(){return!!J("indexedDB",a)},s.hashchange=function(){return A("hashchange",a)&&(b.documentMode===c||b.documentMode>7)},s.history=function(){return!!a.history&&!!history.pushState},s.draganddrop=function(){var a=b.createElement("div");return"draggable"in a||"ondragstart"in a&&"ondrop"in a},s.websockets=function(){return"WebSocket"in a||"MozWebSocket"in a},s.rgba=function(){return D("background-color:rgba(150,255,150,.5)"),G(j.backgroundColor,"rgba")},s.hsla=function(){return D("background-color:hsla(120,40%,100%,.5)"),G(j.backgroundColor,"rgba")||G(j.backgroundColor,"hsla")},s.multiplebgs=function(){return D("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(j.background)},s.backgroundsize=function(){return J("backgroundSize")},s.borderimage=function(){return J("borderImage")},s.borderradius=function(){return J("borderRadius")},s.boxshadow=function(){return J("boxShadow")},s.textshadow=function(){return b.createElement("div").style.textShadow===""},s.opacity=function(){return E("opacity:.55"),/^0.55$/.test(j.opacity)},s.cssanimations=function(){return J("animationName")},s.csscolumns=function(){return J("columnCount")},s.cssgradients=function(){var a="background-image:",b="gradient(linear,left top,right bottom,from(#9f9),to(white));",c="linear-gradient(left top,#9f9, white);";return D((a+"-webkit- ".split(" ").join(b+a)+n.join(c+a)).slice(0,-a.length)),G(j.backgroundImage,"gradient")},s.cssreflections=function(){return J("boxReflect")},s.csstransforms=function(){return!!J("transform")},s.csstransforms3d=function(){var a=!!J("perspective");return a&&"webkitPerspective"in g.style&&y("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(b,c){a=b.offsetLeft===9&&b.offsetHeight===3}),a},s.csstransitions=function(){return J("transition")},s.fontface=function(){var a;return y('@font-face {font-family:"font";src:url("https://")}',function(c,d){var e=b.getElementById("smodernizr"),f=e.sheet||e.styleSheet,g=f?f.cssRules&&f.cssRules[0]?f.cssRules[0].cssText:f.cssText||"":"";a=/src/i.test(g)&&g.indexOf(d.split(" ")[0])===0}),a},s.generatedcontent=function(){var a;return y(['#modernizr:after{content:"',l,'";visibility:hidden}'].join(""),function(b){a=b.offsetHeight>=1}),a},s.video=function(){var a=b.createElement("video"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),c.h264=a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),c.webm=a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,"")}catch(d){}return c},s.audio=function(){var a=b.createElement("audio"),c=!1;try{if(c=!!a.canPlayType)c=new Boolean(c),c.ogg=a.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),c.mp3=a.canPlayType("audio/mpeg;").replace(/^no$/,""),c.wav=a.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),c.m4a=(a.canPlayType("audio/x-m4a;")||a.canPlayType("audio/aac;")).replace(/^no$/,"")}catch(d){}return c},s.localstorage=function(){try{return localStorage.setItem(h,h),localStorage.removeItem(h),!0}catch(a){return!1}},s.sessionstorage=function(){try{return sessionStorage.setItem(h,h),sessionStorage.removeItem(h),!0}catch(a){return!1}},s.webworkers=function(){return!!a.Worker},s.applicationcache=function(){return!!a.applicationCache},s.svg=function(){return!!b.createElementNS&&!!b.createElementNS(r.svg,"svg").createSVGRect},s.inlinesvg=function(){var a=b.createElement("div");return a.innerHTML="<svg/>",(a.firstChild&&a.firstChild.namespaceURI)==r.svg},s.smil=function(){return!!b.createElementNS&&/SVGAnimate/.test(m.call(b.createElementNS(r.svg,"animate")))},s.svgclippaths=function(){return!!b.createElementNS&&/SVGClipPath/.test(m.call(b.createElementNS(r.svg,"clipPath")))};for(var L in s)C(s,L)&&(x=L.toLowerCase(),e[x]=s[L](),v.push((e[x]?"":"no-")+x));return e.input||K(),e.addTest=function(a,b){if(typeof a=="object")for(var d in a)C(a,d)&&e.addTest(d,a[d]);else{a=a.toLowerCase();if(e[a]!==c)return e;b=typeof b=="function"?b():b,f&&(g.className+=" "+(b?"":"no-")+a),e[a]=b}return e},D(""),i=k=null,function(a,b){function k(a,b){var c=a.createElement("p"),d=a.getElementsByTagName("head")[0]||a.documentElement;return c.innerHTML="x<style>"+b+"</style>",d.insertBefore(c.lastChild,d.firstChild)}function l(){var a=r.elements;return typeof a=="string"?a.split(" "):a}function m(a){var b=i[a[g]];return b||(b={},h++,a[g]=h,i[h]=b),b}function n(a,c,f){c||(c=b);if(j)return c.createElement(a);f||(f=m(c));var g;return f.cache[a]?g=f.cache[a].cloneNode():e.test(a)?g=(f.cache[a]=f.createElem(a)).cloneNode():g=f.createElem(a),g.canHaveChildren&&!d.test(a)?f.frag.appendChild(g):g}function o(a,c){a||(a=b);if(j)return a.createDocumentFragment();c=c||m(a);var d=c.frag.cloneNode(),e=0,f=l(),g=f.length;for(;e<g;e++)d.createElement(f[e]);return d}function p(a,b){b.cache||(b.cache={},b.createElem=a.createElement,b.createFrag=a.createDocumentFragment,b.frag=b.createFrag()),a.createElement=function(c){return r.shivMethods?n(c,a,b):b.createElem(c)},a.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+l().join().replace(/\w+/g,function(a){return b.createElem(a),b.frag.createElement(a),'c("'+a+'")'})+");return n}")(r,b.frag)}function q(a){a||(a=b);var c=m(a);return r.shivCSS&&!f&&!c.hasCSS&&(c.hasCSS=!!k(a,"article,aside,figcaption,figure,footer,header,hgroup,nav,section{display:block}mark{background:#FF0;color:#000}")),j||p(a,c),a}var c=a.html5||{},d=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,e=/^<|^(?:a|b|button|code|div|fieldset|form|h1|h2|h3|h4|h5|h6|i|iframe|img|input|label|li|link|ol|option|p|param|q|script|select|span|strong|style|table|tbody|td|textarea|tfoot|th|thead|tr|ul)$/i,f,g="_html5shiv",h=0,i={},j;(function(){try{var a=b.createElement("a");a.innerHTML="<xyz></xyz>",f="hidden"in a,j=a.childNodes.length==1||function(){b.createElement("a");var a=b.createDocumentFragment();return typeof a.cloneNode=="undefined"||typeof a.createDocumentFragment=="undefined"||typeof a.createElement=="undefined"}()}catch(c){f=!0,j=!0}})();var r={elements:c.elements||"abbr article aside audio bdi canvas data datalist details figcaption figure footer header hgroup mark meter nav output progress section summary time video",shivCSS:c.shivCSS!==!1,supportsUnknownElements:j,shivMethods:c.shivMethods!==!1,type:"default",shivDocument:q,createElement:n,createDocumentFragment:o};a.html5=r,q(b)}(this,b),e._version=d,e._prefixes=n,e._domPrefixes=q,e._cssomPrefixes=p,e.mq=z,e.hasEvent=A,e.testProp=function(a){return H([a])},e.testAllProps=J,e.testStyles=y,e.prefixed=function(a,b,c){return b?J(a,b,c):J(a,"pfx")},g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(f?" js "+v.join(" "):""),e}(this,this.document),function(a,b,c){function d(a){return o.call(a)=="[object Function]"}function e(a){return typeof a=="string"}function f(){}function g(a){return!a||a=="loaded"||a=="complete"||a=="uninitialized"}function h(){var a=p.shift();q=1,a?a.t?m(function(){(a.t=="c"?B.injectCss:B.injectJs)(a.s,0,a.a,a.x,a.e,1)},0):(a(),h()):q=0}function i(a,c,d,e,f,i,j){function k(b){if(!o&&g(l.readyState)&&(u.r=o=1,!q&&h(),l.onload=l.onreadystatechange=null,b)){a!="img"&&m(function(){t.removeChild(l)},50);for(var d in y[c])y[c].hasOwnProperty(d)&&y[c][d].onload()}}var j=j||B.errorTimeout,l={},o=0,r=0,u={t:d,s:c,e:f,a:i,x:j};y[c]===1&&(r=1,y[c]=[],l=b.createElement(a)),a=="object"?l.data=c:(l.src=c,l.type=a),l.width=l.height="0",l.onerror=l.onload=l.onreadystatechange=function(){k.call(this,r)},p.splice(e,0,u),a!="img"&&(r||y[c]===2?(t.insertBefore(l,s?null:n),m(k,j)):y[c].push(l))}function j(a,b,c,d,f){return q=0,b=b||"j",e(a)?i(b=="c"?v:u,a,b,this.i++,c,d,f):(p.splice(this.i++,0,a),p.length==1&&h()),this}function k(){var a=B;return a.loader={load:j,i:0},a}var l=b.documentElement,m=a.setTimeout,n=b.getElementsByTagName("script")[0],o={}.toString,p=[],q=0,r="MozAppearance"in l.style,s=r&&!!b.createRange().compareNode,t=s?l:n.parentNode,l=a.opera&&o.call(a.opera)=="[object Opera]",l=!!b.attachEvent&&!l,u=r?"object":l?"script":"img",v=l?"script":u,w=Array.isArray||function(a){return o.call(a)=="[object Array]"},x=[],y={},z={timeout:function(a,b){return b.length&&(a.timeout=b[0]),a}},A,B;B=function(a){function b(a){var a=a.split("!"),b=x.length,c=a.pop(),d=a.length,c={url:c,origUrl:c,prefixes:a},e,f,g;for(f=0;f<d;f++)g=a[f].split("="),(e=z[g.shift()])&&(c=e(c,g));for(f=0;f<b;f++)c=x[f](c);return c}function g(a,e,f,g,i){var j=b(a),l=j.autoCallback;j.url.split(".").pop().split("?").shift(),j.bypass||(e&&(e=d(e)?e:e[a]||e[g]||e[a.split("/").pop().split("?")[0]]||h),j.instead?j.instead(a,e,f,g,i):(y[j.url]?j.noexec=!0:y[j.url]=1,f.load(j.url,j.forceCSS||!j.forceJS&&"css"==j.url.split(".").pop().split("?").shift()?"c":c,j.noexec,j.attrs,j.timeout),(d(e)||d(l))&&f.load(function(){k(),e&&e(j.origUrl,i,g),l&&l(j.origUrl,i,g),y[j.url]=2})))}function i(a,b){function c(a,c){if(a){if(e(a))c||(j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}),g(a,j,b,0,h);else if(Object(a)===a)for(n in m=function(){var b=0,c;for(c in a)a.hasOwnProperty(c)&&b++;return b}(),a)a.hasOwnProperty(n)&&(!c&&!--m&&(d(j)?j=function(){var a=[].slice.call(arguments);k.apply(this,a),l()}:j[n]=function(a){return function(){var b=[].slice.call(arguments);a&&a.apply(this,b),l()}}(k[n])),g(a[n],j,b,n,h))}else!c&&l()}var h=!!a.test,i=a.load||a.both,j=a.callback||f,k=j,l=a.complete||f,m,n;c(h?a.yep:a.nope,!!i),i&&c(i)}var j,l,m=this.yepnope.loader;if(e(a))g(a,0,m,0);else if(w(a))for(j=0;j<a.length;j++)l=a[j],e(l)?g(l,0,m,0):w(l)?B(l):Object(l)===l&&i(l,m);else Object(a)===a&&i(a,m)},B.addPrefix=function(a,b){z[a]=b},B.addFilter=function(a){x.push(a)},B.errorTimeout=1e4,b.readyState==null&&b.addEventListener&&(b.readyState="loading",b.addEventListener("DOMContentLoaded",A=function(){b.removeEventListener("DOMContentLoaded",A,0),b.readyState="complete"},0)),a.yepnope=k(),a.yepnope.executeStack=h,a.yepnope.injectJs=function(a,c,d,e,i,j){var k=b.createElement("script"),l,o,e=e||B.errorTimeout;k.src=a;for(o in d)k.setAttribute(o,d[o]);c=j?h:c||f,k.onreadystatechange=k.onload=function(){!l&&g(k.readyState)&&(l=1,c(),k.onload=k.onreadystatechange=null)},m(function(){l||(l=1,c(1))},e),i?k.onload():n.parentNode.insertBefore(k,n)},a.yepnope.injectCss=function(a,c,d,e,g,i){var e=b.createElement("link"),j,c=i?h:c||f;e.href=a,e.rel="stylesheet",e.type="text/css";for(j in d)e.setAttribute(j,d[j]);g||(n.parentNode.insertBefore(e,n),m(c,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};

;/* /router.js 
 */

App.Router.map(function(){
   /**
    * @type link to index [root]
    */
   this.route("index", { path: "/" });
   
   /**
    * @type link to analyze
    */
   this.route("features", { path: "/features" });
   
   /**
    * @type link to form
    */
   this.route("form", { path: "/form" });
   
});

;/* /store.js 
*/
App.ApplicationAdapter = DS.FixtureAdapter;
App.store = DS.Store.extend();
;Ember.TEMPLATES['application'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "outlet", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  
});
;Ember.TEMPLATES['features'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div id=\"portfolioSheetWrapper\">    \n    <header id=\"project\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-10\">\n                    <h1>Features</h1>\n                    <p class=\"date\">Bootstrap elements</p>\n                </div>\n                <div class=\"col-md-2\">\n                    <a href=\"javascript:parent.$.pageslide.close()\" class=\"btn pull-right\"><i class=\"icon-cancel-outline\"></i>Close</a>\n\n                </div>\n            </div>\n        </div>\n    </header>\n\n    <!-- main content -->\n    <section class=\"content\">\n        <div class=\"container\">\n            <section class=\"row\">\n                <div class=\"col-md-12\">\n                    <h2>Call to action boxes</h2>\n                </div>\n                <div class=\"col-md-12\">\n                    <div class=\"jumbotron\">\n                        <div class=\"container\">\n                            <h1>Hello, world!</h1>\n                            <p>This is a simple hero unit, a simple jumbotron-style component for calling extra attention to featured content or information.</p>\n                            <p><a class=\"btn btn-lg\">Learn more</a></p>\n                        </div>\n                    </div>\n                </div>\n            </section>\n\n            <section class=\"row slice\">\n                <!-- call to action -->\n                <div class=\"container mb15\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"color4 ctaBox \">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-8\">\n                                            <h1>\n                                                <strong>NFL Bootstrap Website Template</strong> is perfect for simple and clean presentation of your business.\n                                            </h1>\n\n                                        </div>\n                                        <div class=\"col-md-4\">\n                                            <a class=\"btn btn-lg\" title=\"\" href=\"#\" target=\"blank\">\n                                                <i class=\"icon-flash\"></i> purchase now\n                                            </a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- call to action -->\n                <!-- call to action -->\n                <div class=\"container mb15\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"color1 ctaBox \">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-8\">\n                                            <h1>\n                                                <strong>NFL Bootstrap Website Template</strong> is perfect for simple and clean presentation of your business.\n                                            </h1>\n\n                                        </div>\n                                        <div class=\"col-md-4\">\n                                            <a class=\"btn btn-lg\" title=\"\" href=\"#\" target=\"blank\">\n                                                <i class=\"icon-flash\"></i> purchase now\n                                            </a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- call to action -->\n                <!-- call to action -->\n                <div class=\"container\">\n                    <div class=\"row\">\n                        <div class=\"col-md-12\">\n                            <div class=\"ctaBox \">\n                                <div class=\"container\">\n                                    <div class=\"row\">\n                                        <div class=\"col-md-8\">\n                                            <h1>\n                                                <strong>NFL Bootstrap Website Template</strong> is perfect for simple and clean presentation of your business.\n                                            </h1>\n\n                                        </div>\n                                        <div class=\"col-md-4\">\n                                            <a class=\"btn btn-lg\" title=\"\" href=\"#\" target=\"blank\">\n                                                <i class=\"icon-flash\"></i> purchase now\n                                            </a>\n                                        </div>\n                                    </div>\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n                <!-- call to action -->\n            </section>  \n\n            <section class=\"row mb30\">\n                <div class=\"col-md-12\">\n                    <h2>Typography</h2>\n                </div>\n                <div class=\"col-md-4\">\n                    <h1 class=\"text-left\">Heading 1</h1>\n                    <h2>Heading 2</h2>\n                    <h3>Heading 3</h3>\n                    <h4>Heading 4</h4>\n                    <h5>Heading 5</h5>\n                </div>\n                <div class=\"col-md-4\">\n                    <h3>Body text</h3>\n                    <p>This did not seem to encourage the witness at all: he kept shifting from one foot to the other, looking uneasily at the Queen, and in his confusion he bit a large piece out of his teacup instead of the bread-and-butter. </p>\n                </div>\n                <div class=\"col-md-4\">\n                    <h3>list</h3>\n                    <ul><li>This did not seem to encourage the witness</li>\n                        <li>at all: he kept shifting from one foot</li>\n                        <li>to the other, looking uneasily at the Queen</li>\n                        <li>and in his confusion he bit a large piece out</li>\n                        <li>of his teacup instead of the bread-and-butter.</li>\n                    </ul>\n                </div>\n            </section>\n            <section class=\"row mb30\">\n                <div class=\"col-md-12\">\n                    <h2>Buttons</h2>\n                </div>\n                <div class=\"col-md-12\">\n                    <button class=\"btn btn-lg\" type=\"button\">Large button</button>\n                    <button class=\"btn\" type=\"button\">Default button</button>\n                    <button class=\"btn btn-sm\" type=\"button\">Small button</button>\n                    <button class=\"btn btn-xs\" type=\"button\">Mini button</button>\n                </div>           \n            </section>\n\n\n            <section class=\"row mb40\">\n                <div class=\"col-md-6\">\n                    <h2>Tabs</h2>\n                    <p>Add quick, dynamic tab functionality to transition through panes of local content, even via dropdown menus.</p>\n                    <ul class=\"nav nav-tabs\" id=\"bTab\">\n                        <li class=\"active\"><a data-toggle=\"tab\" href=\"#homeTab\">Home</a></li>\n                        <li><a data-toggle=\"tab\" href=\"#profile\">Profile</a></li>\n                        <li class=\"dropdown\"> <a data-toggle=\"dropdown\" class=\"dropdown-toggle\" href=\"#\">Dropdown <b class=\"caret\"></b></a>\n                            <ul class=\"dropdown-menu\">\n                                <li><a data-toggle=\"tab\" href=\"#dropdown1\">@fat</a></li>\n                                <li><a data-toggle=\"tab\" href=\"#dropdown2\">@mdo</a></li>\n                            </ul>\n                        </li>\n                    </ul>\n                    <div class=\"tab-content\" id=\"myTabContent\">\n                        <div id=\"homeTab\" class=\"tab-pane fade in active\">\n                            <p>Raw denim you probably haven't heard of them jean shorts Austin. Nesciunt tofu stumptown aliqua, retro synth master cleanse. Mustache cliche tempor, williamsburg carles vegan helvetica. Reprehenderit butcher retro keffiyeh dreamcatcher synth. Cosby sweater eu banh mi, qui irure terry richardson ex squid. Aliquip placeat salvia cillum iphone. Seitan aliquip quis cardigan american apparel, butcher voluptate nisi qui.</p>\n                        </div>\n                        <div id=\"profile\" class=\"tab-pane fade\">\n                            <p>Food truck fixie locavore, accusamus mcsweeney's marfa nulla single-origin coffee squid. Exercitation +1 labore velit, blog sartorial PBR leggings next level wes anderson artisan four loko farm-to-table craft beer twee. Qui photo booth letterpress, commodo enim craft beer mlkshk aliquip jean shorts ullamco ad vinyl cillum PBR. Homo nostrud organic, assumenda labore aesthetic magna delectus mollit. Keytar helvetica VHS salvia yr, vero magna velit sapiente labore stumptown. Vegan fanny pack odio cillum wes anderson 8-bit, sustainable jean shorts beard ut DIY ethical culpa terry richardson biodiesel. Art party scenester stumptown, tumblr butcher vero sint qui sapiente accusamus tattooed echo park.</p>\n                        </div>\n                        <div id=\"dropdown1\" class=\"tab-pane fade\">\n                            <p>Etsy mixtape wayfarers, ethical wes anderson tofu before they sold out mcsweeney's organic lomo retro fanny pack lo-fi farm-to-table readymade. Messenger bag gentrify pitchfork tattooed craft beer, iphone skateboard locavore carles etsy salvia banksy hoodie helvetica. DIY synth PBR banksy irony. Leggings gentrify squid 8-bit cred pitchfork. Williamsburg banh mi whatever gluten-free, carles pitchfork biodiesel fixie etsy retro mlkshk vice blog. Scenester cred you probably haven't heard of them, vinyl craft beer blog stumptown. Pitchfork sustainable tofu synth chambray yr.</p>\n                        </div>\n                        <div id=\"dropdown2\" class=\"tab-pane fade\">\n                            <p>Trust fund seitan letterpress, keytar raw denim keffiyeh etsy art party before they sold out master cleanse gluten-free squid scenester freegan cosby sweater. Fanny pack portland seitan DIY, art party locavore wolf cliche high life echo park Austin. Cred vinyl keffiyeh DIY salvia PBR, banh mi before they sold out farm-to-table VHS viral locavore cosby sweater. Lomo wolf viral, mustache readymade thundercats keffiyeh craft beer marfa ethical. Wolf salvia freegan, sartorial keffiyeh echo park vegan.</p>\n                        </div>\n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n\n\n                    <h2>Accordions</h2>\n\n\n                    <div class=\"panel-group\" id=\"bAccordion\">\n\n                        <div class=\"panel panel-default\">\n                            <div class=\"panel-heading\">\n                                <h4 class=\"panel-title\">\n                                    <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseOne\">\n                                        Collapsible Group Item #1\n                                    </a>\n                                </h4>\n                            </div>\n                            <div id=\"collapseOne\" class=\"panel-collapse collapse in\">\n                                <div class=\"panel-body\">\n                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"panel panel-default\">\n                            <div class=\"panel-heading\">\n                                <h4 class=\"panel-title\">\n                                    <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseTwo\">\n                                        Collapsible Group Item #2\n                                    </a>\n                                </h4>\n                            </div>\n\n                            <div id=\"collapseTwo\" class=\"panel-collapse collapse\">\n                                <div class=\"panel-body\">\n                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                                </div>\n                            </div>\n                        </div>\n\n                        <div class=\"panel panel-default\">\n                            <div class=\"panel-heading\">\n                                <h4 class=\"panel-title\">\n                                    <a class=\"accordion-toggle\" data-toggle=\"collapse\" data-parent=\"#accordion\" href=\"#collapseThree\">\n                                        Collapsible Group Item #3\n                                    </a>\n                                </h4>\n                            </div>\n                            <div id=\"collapseThree\" class=\"panel-collapse collapse\">\n                                <div class=\"panel-body\">\n                                    Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry richardson ad squid. 3 wolf moon officia aute, non cupidatat skateboard dolor brunch. Food truck quinoa nesciunt laborum eiusmod. Brunch 3 wolf moon tempor, sunt aliqua put a bird on it squid single-origin coffee nulla assumenda shoreditch et. Nihil anim keffiyeh helvetica, craft beer labore wes anderson cred nesciunt sapiente ea proident. Ad vegan excepteur butcher vice lomo. Leggings occaecat craft beer farm-to-table, raw denim aesthetic synth nesciunt you probably haven't heard of them accusamus labore sustainable VHS.\n                                </div>\n                            </div>\n                        </div>\n                    </div>\n                </div>\n\n            </section>\n\n            <section class=\"row mb40\">\n                <div class=\"col-md-6\">\n                    <h2>Alerts</h2>\n                    <p>Wrap any text and an optional dismiss button in <code>.alert</code> for a basic warning alert message.</p>\n                    <div class=\"alert alert-dismissable alert-success fade in\">\n                        <button data-dismiss=\"alert\" class=\"close\" type=\"button\">×</button>\n                        <strong>Well done!</strong> You successfully read this important alert message.\n                    </div>\n                    <div class=\"alert alert-dismissable alert-info fade in\">\n                        <button data-dismiss=\"alert\" class=\"close\" type=\"button\">×</button>\n                        <strong>Heads up!</strong> This alert needs your attention, but it's not super important.\n                    </div>\n                    <div class=\"alert alert-dismissable alert-warning fade in\">\n                        <button data-dismiss=\"alert\" class=\"close\" type=\"button\">×</button>\n                        <strong>Warning!</strong> Best check yo self, you're not looking too good.\n                    </div>\n                    <div class=\"alert alert-dismissable alert-danger fade in\">\n                        <button data-dismiss=\"alert\" class=\"close\" type=\"button\">×</button>\n                        <strong>Oh snap!</strong> Change a few things up and try submitting again. \n                    </div>\n                </div>\n                <div class=\"col-md-6\">\n                    <h2>Progress bars</h2>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\n                            <span class=\"sr-only\">40% Complete (success)</span>\n                        </div>\n                    </div>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\n                            <span class=\"sr-only\">20% Complete</span>\n                        </div>\n                    </div>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%\">\n                            <span class=\"sr-only\">60% Complete (warning)</span>\n                        </div>\n                    </div>\n                    <div class=\"progress\">\n                        <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\n                            <span class=\"sr-only\">80% Complete</span>\n                        </div>\n                    </div>\n\n                    <p>Similar to the solid colors, we have varied striped progress bars.</p>\n                    <div class=\"progress progress-striped\">\n                        <div class=\"progress-bar progress-bar-success\" role=\"progressbar\" aria-valuenow=\"40\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 40%\">\n                            <span class=\"sr-only\">40% Complete (success)</span>\n                        </div>\n                    </div>\n                    <div class=\"progress progress-striped\">\n                        <div class=\"progress-bar progress-bar-info\" role=\"progressbar\" aria-valuenow=\"20\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 20%\">\n                            <span class=\"sr-only\">20% Complete</span>\n                        </div>\n                    </div>\n                    <div class=\"progress progress-striped\">\n                        <div class=\"progress-bar progress-bar-warning\" role=\"progressbar\" aria-valuenow=\"60\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 60%\">\n                            <span class=\"sr-only\">60% Complete (warning)</span>\n                        </div>\n                    </div>\n                    <div class=\"progress progress-striped\">\n                        <div class=\"progress-bar progress-bar-danger\" role=\"progressbar\" aria-valuenow=\"80\" aria-valuemin=\"0\" aria-valuemax=\"100\" style=\"width: 80%\">\n                            <span class=\"sr-only\">80% Complete (danger)</span>\n                        </div>\n                    </div>\n                </div>\n            </section>\n            <section class=\"mb40 row\">\n                <div class=\"col-md-12\">\n                    <h2><span>Columns</span></h2>\n                </div>\n\n                <div class=\"col-md-12\">\n                    <h3>2 Columns</h3>\n                </div>\n                <div class=\"col-md-6\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium pretium rutrum. Donec sodales interdum blandit. Nullam volutpat, elit sed auctor condimentum, augue orci volutpat elit, eu ultrices nulla justo in dui. In aliquam semper metus, ut facilisis erat condimentum porta. Aliquam vel libero urna, ut suscipit quam. Vivamus condimentum sem ac justo commodo lacinia. Nulla facilisi.</p>\n                </div>\n                <div class=\"col-md-6\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium pretium rutrum. Donec sodales interdum blandit. Nullam volutpat, elit sed auctor condimentum, augue orci volutpat elit, eu ultrices nulla justo in dui. In aliquam semper metus, ut facilisis erat condimentum porta. Aliquam vel libero urna, ut suscipit quam. Vivamus condimentum sem ac justo commodo lacinia. Nulla facilisi.</p>\n                </div>\n                <div class=\"col-md-12\">\n                    <h3>3 Columns</h3>\n                </div>\n                <div class=\"col-md-4\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium pretium rutrum. Donec sodales interdum blandit. Nullam volutpat, elit sed auctor condimentum, augue orci volutpat elit, eu ultrices nulla justo in dui. In aliquam semper metus, ut facilisis erat condimentum porta. Aliquam vel libero urna, ut suscipit quam. Vivamus condimentum sem ac justo commodo lacinia. Nulla facilisi.</p>\n                </div>\n                <div class=\"col-md-4\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium pretium rutrum. Donec sodales interdum blandit. Nullam volutpat, elit sed auctor condimentum, augue orci volutpat elit, eu ultrices nulla justo in dui. In aliquam semper metus, ut facilisis erat condimentum porta. Aliquam vel libero urna, ut suscipit quam. Vivamus condimentum sem ac justo commodo lacinia. Nulla facilisi.</p>\n                </div>\n                <div class=\"col-md-4\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium pretium rutrum. Donec sodales interdum blandit. Nullam volutpat, elit sed auctor condimentum, augue orci volutpat elit, eu ultrices nulla justo in dui. In aliquam semper metus, ut facilisis erat condimentum porta. Aliquam vel libero urna, ut suscipit quam. Vivamus condimentum sem ac justo commodo lacinia. Nulla facilisi.</p>\n                </div>\n                <div class=\"col-md-12\">\n                    <h3>2/3 Columns</h3>\n                </div>\n                <div class=\"col-md-8\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium pretium rutrum. Donec sodales interdum blandit. Nullam volutpat, elit sed auctor condimentum, augue orci volutpat elit, eu ultrices nulla justo in dui. In aliquam semper metus, ut facilisis erat condimentum porta. Aliquam vel libero urna, ut suscipit quam. Vivamus condimentum sem ac justo commodo lacinia. Nulla facilisi.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium pretium rutrum. Donec sodales interdum blandit. Nullam volutpat, elit sed auctor condimentum, augue orci volutpat elit, eu ultrices nulla justo in dui. In aliquam semper metus, ut facilisis erat condimentum porta. Aliquam vel libero urna, ut suscipit quam. Vivamus condimentum sem ac justo commodo lacinia. Nulla facilisi.</p>\n                </div>\n                <div class=\"col-md-4\">\n                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed pretium pretium rutrum. Donec sodales interdum blandit. Nullam volutpat, elit sed auctor condimentum, augue orci volutpat elit, eu ultrices nulla justo in dui. In aliquam semper metus, ut facilisis erat condimentum porta. Aliquam vel libero urna, ut suscipit quam. Vivamus condimentum sem ac justo commodo lacinia. Nulla facilisi.</p>\n                </div>\n                <div class=\"col-md-12\">\n                    <h3>4 Columns</h3>\n                </div>\n                <div class=\"col-md-3\">\n                    <p>Lorem ipsum dolor sit amet humerefe, consectetur adipiscing elit. Sediozezed pretium pretium rutrum. Donectablez sodales interdum blandit. Nullamzezez volutpat, elit sed auctor condimentes, augue orci volutpat elit, eu ultriceszez nulla justo in dui. In aliquam semperzd metus, ut facilisis erat condimentumau porta. Aliquam vel libero urna, uthazfd suscipit quam. Vivamus condimentum sem ac justo commodo lacinia. Nullazd facilisi.</p>\n                </div>\n                <div class=\"col-md-3\">\n                    <p>Lorem ipsum dolor sit amet humerefe, consectetur adipiscing elit. Sediozezed pretium pretium rutrum. Donectablez sodales interdum blandit. Nullamzezez volutpat, elit sed auctor condimentes, augue orci volutpat elit, eu ultriceszez nulla justo in dui. In aliquam semperzd metus, ut facilisis erat condimentumau porta. Aliquam vel libero urna, uthazfd suscipit quam. Vivamus condimentum sem ac justo commodo lacinia. Nullazd facilisi.</p>\n                </div>\n                <div class=\"col-md-3\">\n                    <p>Lorem ipsum dolor sit amet humerefe, consectetur adipiscing elit. Sediozezed pretium pretium rutrum. Donectablez sodales interdum blandit. Nullamzezez volutpat, elit sed auctor condimentes, augue orci volutpat elit, eu ultriceszez nulla justo in dui. In aliquam semperzd metus, ut facilisis erat condimentumau porta. Aliquam vel libero urna, uthazfd suscipit quam. Vivamus condimentum sem ac justo commodo lacinia. Nullazd facilisi.</p>\n                </div>\n                <div class=\"col-md-3\">\n                    <p>Lorem ipsum dolor sit amet humerefe, consectetur adipiscing elit. Sediozezed pretium pretium rutrum. Donectablez sodales interdum blandit. Nullamzezez volutpat, elit sed auctor condimentes, augue orci volutpat elit, eu ultriceszez nulla justo in dui. In aliquam semperzd metus, ut facilisis erat condimentumau porta. Aliquam vel libero urna, uthazfd suscipit quam. Vivamus condimentum sem ac justo commodo lacinia. Nullazd facilisi.</p>\n                </div>\n            </section>\n        </div>\n    </section>\n\n    <section class=\"pricing slice color1\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <h1 class=\"noSubtitle\">Our plans</h1>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-md-3 col-sm-6\">\n                    <div class=\"pricingBloc\">\n                        <h2>Free</h2>\n                        <h3>0$<span>per month</span></h3>\n                        <ul>\n                            <li>This is what you get For free</li>\n                            <li>Not bad, but could be better</li>\n                            <li>-</li>\n                            <li>-</li>\n                            <li>-</li>\n                            <li>-</li>\n                        </ul>\n                        <p class=\"sign\">\n                            <a class=\"btn\" href=\"\">\n                                Sign up\n                            </a>\n                        </p>\n                    </div>\n                </div>\n                <div class=\"col-md-3 col-sm-6\">\n                    <div class=\"pricingBloc\">\n                        <h2>Silver</h2>\n                        <h3>10$<span>per month</span></h3>\n                        <ul>\n                            <li>This is a little better</li>\n                            <li>Though</li>\n                            <li>Not the best plan for you!</li>\n                            <li>-</li>\n                            <li>-</li>\n                            <li>-</li>\n                        </ul>\n                        <p class=\"sign\">\n                            <a class=\"btn\" href=\"\">\n                                Sign up\n                            </a>\n                        </p>\n                    </div>\n                </div>\n                <div class=\"col-md-3 col-sm-6\">\n                    <div class=\"pricingBloc focusPlan\">\n                        <h2>Gold</h2>\n                        <h3>25$<span>per month</span></h3>\n                        <ul>\n                            <li>Honestly, go Premium</li>\n                            <li>We have a lot</li>\n                            <li>of cool features for you!</li>\n                            <li>Really, you will love what you will get</li>\n                            <li>Come on!!</li>\n                            <li>Please!!!</li>\n                        </ul>\n                        <p class=\"sign\">\n                            <a class=\"btn btn-large\" href=\"\">\n                                Sign up\n                            </a>\n                        </p>\n                    </div>\n                </div>\n                <div class=\"col-md-3 col-sm-6\">\n                    <div class=\"pricingBloc\">\n                        <h2>Platinium</h2>\n                        <h3>40$<span>per month</span></h3>\n                        <ul>\n                            <li>This one is super good</li>\n                            <li>Super awesome</li>\n                            <li>Just the right plan for you</li>\n                            <li>If you are</li>\n                            <li>A super pro!</li>\n                            <li>No kidding</li>\n                        </ul>\n                        <p class=\"sign\">\n                            <a class=\"btn\" href=\"\">\n                                Sign up\n                            </a>\n                        </p>\n                    </div>\n                </div>\n            </div>\n        </div>\n    </section>\n    <div id=\"paralaxSlice2\" data-stellar-background-ratio=\"0.5\">\n        <div class=\"maskParent\">\n            <div class=\"paralaxMask\"></div>\n            <div class=\"paralaxText container\">\n                <i class=\"icon-mobile iconBig\"></i><i class=\"icon-tablet iconBig\"></i><i class=\"icon-laptop iconBig\"></i><i class=\"icon-desktop iconBig\"></i>\n                <blockquote class=\"bigTitle\">Mobile first, truly responsive,<br /> based on bootstrap 3</blockquote>\n            </div>\n        </div>\n    </div>\n    <section class=\"slice\" id=\"news\">\n        <div class=\"container imgHover\">\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <h1>Breaking news</h1>\n                    <h2 class=\"subTitle\">Here, there and everywhere... what we've been doing</h2>\n                </div>\n\n                <article class=\"col-sm-4\">\n\n                    <section class=\"imgWrapper\"> \n                        <img src=\"images/team/deadpool-illustration.jpg\" class=\"img-responsive\" alt=\"Ashleye template image news\" /> \n                    </section>\n\n                    <div class=\"mediaHover\">\n                        <div class=\"mask\"></div>\n                        <div class=\"iconLinks\"> \n\n                            <a href=\"images/team/deadpool-illustration.jpg\" class=\"image-link\" title=\"Zoom\" ><i class=\"icon-search iconRounded iconBig\"></i><span>zoom</span></a> \n                        </div>\n                    </div>\n                    <section class=\"newsText color4\">\n                        <h3>New hair cut today</h3>\n                        <h4 class=\"date\">September 12</h4>\n                        <p>The Duchess took her choice, and was gone in a moment. 'Let's go on with the game,' the Queen said to Alice; and Alice was  too much frightened to say a word, but slowly followed her back to the  croquet-ground.</p>\n                        <a href=\"#\" class=\"btn btn-sm\"><i class=\"icon-right-open-mini\"></i>read more</a>\n                    </section>\n\n                </article>\n\n\n                <article class=\"col-sm-4\">\n                    <section class=\"imgWrapper\"> \n                        <img src=\"images/team/deadpool-illustration.jpg\" class=\"img-responsive\" alt=\"snowflake template image news\" /> \n                    </section>\n                    <div class=\"mediaHover\">\n                        <div class=\"mask\"></div>\n                        <div class=\"iconLinks\"> \n                            <a href=\"images/team/deadpool-illustration.jpg\" class=\"image-link\" title=\"Zoom\" ><i class=\"icon-search iconRounded iconBig\"></i><span>zoom</span></a> \n                        </div>\n                    </div>\n                    <section class=\"newsText color4\">\n                        <h3>We are a family</h3>\n                        <h4 class=\"date\">November 24</h4>\n                        <p>The Duchess took her choice, and was gone in a moment. 'Let's go on with the game,' the Queen said to Alice; and Alice was  too much frightened to say a word, but slowly followed her back to the  croquet-ground.</p>\n                        <a href=\"#\" class=\"btn btn-sm\"><i class=\"icon-right-open-mini \"></i>read more</a>\n                    </section>\n                </article>\n\n\n                <article class=\"col-sm-4\">\n                    <section class=\"imgWrapper\"> \n                        <img src=\"images/team/deadpool-illustration.jpg\" class=\"img-responsive\" alt=\"snowflake template image news\" /> \n                    </section>\n                    <div class=\"mediaHover\">\n                        <div class=\"mask\"></div>\n                        <div class=\"iconLinks\"> \n                            <a href=\"images/team/deadpool-illustration.jpg\" class=\"image-link\" title=\"Zoom\" ><i class=\"icon-search iconRounded iconBig\"></i><span>zoom</span></a> \n                        </div>\n                    </div>\n                    <section class=\"newsText color4\">\n                        <h3>Call me if you can</h3>\n                        <h4 class=\"date\">November 24</h4>\n                        <p>The Duchess took her choice, and was gone in a moment. 'Let's go on with the game,' the Queen said to Alice; and Alice was  too much frightened to say a word, but slowly followed her back to the  croquet-ground.</p>\n                        <a href=\"#\" class=\"btn btn-sm\"><i class=\"icon-right-open-mini\"></i>read more</a>\n                    </section>\n                </article>\n\n\n            </div>\n        </div>\n    </section>\n\n    <!-- end main content -->\n    <!-- footer -->\n    <footer>\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-md-2 col-md-offset-10\">\n                    <a href=\"javascript:parent.$.pageslide.close()\" class=\"btn pull-right\"><i class=\"icon-cancel-outline\"></i>Close</a>\n\n                </div>\n            </div>\n        </div>\n    </footer>\n\n</div>\n\n<script type=\"text/javascript\">\n    $(function() {\n\n\n        $('#bTab a').click(function(e) {\n            $(this).tab('show');\n            e.preventDefault();\n        });\n\n        $('.dropdown-toggle').dropdown();\n\n        $('.dropdown-menu a').click(function(e) {\n            $('li.active').removeClass('open');\n            e.preventDefault();\n        });\n\n\n        $(\".accordion-toggle\").click(function(e) {\n            var $target = $(this).parent().parent().parent().find('.panel-collapse');\n\n            if ($target.hasClass('in')) {\n                $target.collapse('hide');\n            } else {\n                $('.panel-collapse.in').collapse('hide');\n                $target.collapse('show');\n            }\n            e.preventDefault();\n        });\n\n        $('.close').click(function(e) {\n            $(this).parent('.alert').alert('close');\n            e.preventDefault();\n        });\n\n    });\n\n\n</script>");
  
});
;Ember.TEMPLATES['form'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  


  data.buffer.push("<div class=\"container\">\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <h1>GET STARTED</h1>\n            <h2 class=\"subTitle\">Help us understand your needs</h2>\n        </div>\n    </div>\n    <div class=\"row\">\n        <div class=\"col-xs-12\">\n            <p>Once you fill out this form, we will schedule a brief conversation to:</p>\n            <ol>\n                <li> Get a better understanding of our data needs</li>\n                <li> How these needs impact your business </li>\n                <li> How important is to solve this need </li>\n            </ol>\n            <p> Once we learn more about you, if Peloton fits your needs, we will setup your 30 day trial immediately.</p>\n            <p> Thank you.</p>\n            <form role=\"form\">\n\n                <label for=\"firstname\">First Name*</label>\n                <input id=\"firstname\" type=\"text\" class=\"form-control landing--subscribe required\">\n\n\n\n                <label for=\"lastname\">Last Name*</label>\n                <input id=\"lastname\" type=\"text\" class=\"form-control landing--subscribe required\">\n\n\n\n                <label for=\"email\">Email Address*</label>\n                <input id=\"email\" type=\"email\" class=\"form-control landing--subscribe required\">\n\n\n\n                <label for=\"phone\">Phone number*</label>\n                <input id=\"phone\" type=\"text\" class=\"form-control landing--subscribe required\">\n\n\n\n                <label for=\"company\">Company Name*</label>\n                <input id=\"company\" type=\"text\" class=\"form-control landing--subscribe required\">\n\n\n\n                <label for=\"problems\">Problem you're trying to solve*</label>\n                <textarea id=\"problems\"  class=\"form-control\" rows=\"4\" cols=\"50\"></textarea>\n\n\n\n                <label for=\"timeline\">Project Timeline</label>\n                <select id=\"timeline\" class=\"form-control\">\n                    <option value=\"immediate\">Immediate</option>\n                    <option value=\"3months\">Within 3 months</option>\n                    <option value=\"6months\">Within 6 months</option>\n                    <option value=\"1year\">Within 1 year</option>\n                    <option value=\"unknonw\">I don't know</option>\n                </select>\n\n\n\n                <label for=\"budget\">Budget</label>\n                <select id=\"budget\" class=\"form-control\">\n                    <option value=\"10k\">More than $10,000</option>\n                    <option value=\"100k\">More than $100,000</option>\n                    <option value=\"1M\">More than $1,000,000</option>\n                    <option value=\"unknown\">I don't know</option>\n                </select>\n                <br \\>\n                <button class=\"btn btn-default\">\n                    Submit\n                </button>\n            </form>\n            <br />\n        </div>\n    </div>\n</div>\n<script>\n    $(document).ready(function() {\n\n        $('form').submit(function(event) {\n            event.preventDefault();\n\n            var inputs = $('form').children('input').map(function() {\n                return $(this).val()\n            });\n            \n            var text = $('form').children('textarea').map(function() {\n                return $(this).val()\n            });\n            \n            var selection = $('form').children('select').map(function() {\n                return $(this).val()\n            });\n\n\n            $('input:invalid').attr('class', 'invalid');\n            $('input:valid').removeClass('invalid');\n\n            if ($('input:invalid').length == 0) {\n                $.post('https://docs.google.com/forms/d/1TYVQ_zP6aSVVTM0QAAYi9cspevINf4ixzcoY-eVmfmE/formResponse', {\n                    entry_1894065795 : inputs[0],\n                    entry_1363979019 : inputs[1],\n                    entry_1674268535 : inputs[2],\n                    entry_942642208 : inputs[3],\n                    entry_70651751 : inputs[4],\n                    entry_972470042 : text[0],\n                    entry_2022842138 : selection[0],\n                    entry_622903359 : selection[1]\n                }).always(function() {\n                    alert('Thanks ' + inputs[0] + '! We will keep you up to date.');\n                    window.close();\n                })\n            }\n        })\n    });\n</script>\n");
  
});
;Ember.TEMPLATES['index'] = Ember.Handlebars.template(function anonymous(Handlebars,depth0,helpers,partials,data) {
this.compilerInfo = [4,'>= 1.0.0'];
helpers = this.merge(helpers, Ember.Handlebars.helpers); data = data || {};
  var buffer = '', hashTypes, hashContexts, escapeExpression=this.escapeExpression;


  data.buffer.push("<!-- Preloader -->\n<div id=\"preloader\">\n    <div id=\"status\">\n        <img src=\"images/theme-pics/ajax-loader.gif\" alt=\"\"/><h1 class=\"noSubtitle\">Welcome home</h1>\n    </div>\n</div>\n<!-- Preloader -->\n<!-- Primary Page Layout\n================================================== -->\n<!-- globalWrapper -->\n<div id=\"globalWrapper\" class=\"localscroll\">\n    <!-- header -->\n    <header id=\"mainHeader\" class=\"navbar-fixed-top\" role=\"banner\">\n        <div class=\"container\">\n            <nav class=\"navbar navbar-default scrollMenu\" role=\"navigation\">\n                <div class=\"navbar-header\">\n                    <button type=\"button\" class=\"navbar-toggle\" data-toggle=\"collapse\" data-target=\".navbar-ex1-collapse\"> <span class=\"sr-only\">Toggle navigation</span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> <span class=\"icon-bar\"></span> </button>\n                    <a class=\"navbar-brand\" href=\"/\"><img src=\"images/NflabsLogo.png\" alt=\"NFLABS Logo\" width=\"150px\"/></a> </div>\n                <div class=\"collapse navbar-collapse navbar-ex1-collapse\" id=\"scrollTarget\" style=\"margin-left:120px;\">\n                    <ul class=\"nav navbar-nav pull-right\" style=\"margin: 0 auto; text-align:center;\">\n                        <li class=\"active\"><a href=\"#homeFullScreen\">Home</a> </li>\n                        <li><a href=\"#aboutus\">About Us</a> </li>\n                        <li><a href=\"#howitworks\">Peloton</a> </li>\n                        <li><a href=\"#customers\">Customers</a> </li>\n                        <li><a href=\"#resources\">Resources</a> </li>\n                        <li><a href=\"#ourversions\">Our Versions</a> </li>\n                    </ul>\n                </div>\n            </nav>\n        </div>\n    </header>\n\n    <!-- header -->\n    <!-- content -->\n    <section id=\"homeFullScreen\" data-stellar-background-ratio=\"0.5\">\n        <div class=\"maskParent\" >\n            <div class=\"paralaxMask\"></div>\n            <div id=\"fullScreenSliderWrapper\">\n                <div id=\"logoBig\">\n                    <img class=\"img-responsive\" src=\"images/main-logo-big.png\" alt=\"NFLABS with big logo\" />\n                </div>\n\n                <div class=\"flexslider\" id=\"flexHome\">\n                    <ul class=\"slides\">\n                        <li>\n                            <h1>real-time insight @scale</h1>\n                        </li>\n                        <li>\n                            <h1>big data analytics</h1>\n                        </li>\n                        <li>\n                            <h1>out of the box</h1>\n                        </li>\n                    </ul>\n                </div>\n                <a href=\"#howitworks\" class=\"homeBtn btn\"><i class=\"icon-down\"></i>learn more</a>\n            </div>\n        </div>\n    </section>\n    <!-- about us -->\n    <section class=\"slice noPaddingBottom\" id=\"aboutus\">\n        <div class=\"container\">\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <h1>About us</h1>\n                    <h2 class=\"subTitle\">Our mission is to simplify the way the world analyzes data</h2>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-6\">\n                    <h2 style=\"color: #222;font-size:34px;line-height:34px;text-align:center;\">Who we are</h2>\n\n                    <h2 class=\"subTitle h2nobg\" style=\"margin-bottom:20px;text-align:left;font-size:20px;line-height:20px;\">We are a group of entrepreneurs, developers and technologists who banded together with the sole of making innovation simpler. We believe that together with creativity and passion, even small band such as us, can change the world.</h2>\n                    <h2 class=\"subTitle h2nobg\" style=\"font-size:20px;line-height:20px;text-align:left;\">We've brought innovation to many areas including the content delivery space and cloud as individuals, and now have joined forces to do the same to big data. <span style=\"font-weight:400;font-style:italic\">JOIN US!</span></h2>\n                </div>\n\n                <div class=\"col-sm-6\">\n                    <h2 style=\"color: #222;font-size:34px;text-align:center;line-height:34px;\">What Customers say about us</h2>\n                    <h2 class=\"subTitle h2nobg\" style=\"margin-bottom:20px;text-align:right;font-size:20px;line-height:20px;\"> “Peloton turned out to be very effective to analyze large data sets we had stored on S3. Our data scientists love it. Instead of wasting their time with dumping data from S3 they could get started with their discovery, analysis and modeling and work right away.”</h2>\n                    <p style=\"text-align:right;font-style:italic;\">Bjoern Lasse Herman, CEO of Compass</p>\n                </div>\n            </div>\n        </div>\n    </section>\n    <!-- about us -->\n    <!-- How it works -->\n    <section class=\"slice noPaddingBottom color4\" id=\"howitworks\">\n        <div class=\"container\" style=\"padding-bottom:50px;\">\n            <div class=\"row\">\n                <div class=\"col-xs-12\">\n                    <h1>How Peloton works</h1>\n                    <h2 class=\"subTitle\">Our mission is to simplify the way the world analyzes data</h2>\n                </div>\n            </div>\n\n            <div class=\"row\">\n                <div class=\"col-sm-3\">\n                    <article class=\"boxFeature-2\">\n                        <i class=\"icon-puzzle iconBig\"></i>\n                        <h1>Connect</h1>\n                        <p style=\"font-size: 14px;\">Simply send your data (logs, csv, JSON, or table based data sets) to one of our “pipes”. Through FTP, HTTP, or via an agents, once our pipes begin receiving your data, it automatically applies all the necessary filters, partitions, and formats. You don’t need to do anything. Our intelligent pipes come preset to identify and process your data on the fly.</p>\n\n                    </article>\n                </div>\n                <div class=\"col-sm-3\">\n                    <article class=\"boxFeature-2\">\n                        <i class=\"icon-desktop iconBig\"></i>\n                        <h1>Visualize</h1>\n                        <p style=\"font-size: 14px;\">Once data is fed into one of our pipes, Peloton instantly creates a dashboard containing all the industry standard reports that you will need to manage and monitor your business. This dashboard is updated in real-time. Nothing for you to do except running your business smoother and making decisions faster than ever before.</p>\n\n                    </article>\n                </div>\n                <div class=\"col-sm-3\">\n                    <article class=\"boxFeature-2\">\n                        <i class=\"icon-wrench iconBig\"></i>\n                        <h1>Customize</h1>\n                        <p style=\"font-size: 14px;\">If you require a different report or a different way to view your dashboard, Peloton allows you to further filter, connect, and drill down your reports further. Create new dashboards and reports with our easy to use interface. No coding or scripting necessary.</p>\n\n                    </article>\n\n                </div>\n                <div class=\"col-sm-3\">\n                    <article class=\"boxFeature-2\">\n                        <i class=\"icon-search iconBig\"></i>\n                        <h1>Discover</h1>\n                        <p style=\"font-size: 14px;\">Satisfy your inner data scientist by using our data discovery tool. You will be able to directly access all your data at source, and using our SQL-enhanced language (ZQL) dig deeper into your data. Write or use one of the many available algorithms to look for patterns, forecast, and apply predictive models to gain the edge against your competition.</p>\n                    </article>\n                </div>\n            </div>\n        </div>\n    </section>\n\n</section>\n<!-- END How it works -->\n<div id=\"paralaxSlice5\" data-stellar-background-ratio=\"0.5\">\n    <div class=\"maskParent\">\n        <div class=\"paralaxMask2\"></div>\n        <div class=\"paralaxText container\">\n            <blockquote class=\"bigTitle\">WE MAKE IT SIMPLE <br \\> <small>ANALYTICS IS HARD. BIG DATA ANALYTICS IS HARDER.</small></blockquote>\n        </div>\n    </div>\n</div>\n\n<!-- Client -->\n<section class=\"slice noPaddingBottom\" id=\"customers\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-xs-12\">\n                <h1>CLIENTS, PARTNERS</h1>\n                <h2 class=\"subTitle\">AND EVERYTHING IN BETWEEN</h2>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-3\">\n                    <img src=\"images/customers/cloudera.png\" alt=\"services\" class=\"img-responsive\">\n                </div>\n                <div class=\"col-sm-3\">\n                    <img src=\"images/customers/compass.png\" alt=\"services\" class=\"img-responsive\">\n                </div>\n                <div class=\"col-sm-3\">\n                    <img src=\"images/customers/findwise.png\" alt=\"services\" class=\"img-responsive\">\n                </div>\n                <div class=\"col-sm-3\">\n                    <img src=\"images/customers/hyosung.png\" alt=\"services\" class=\"img-responsive\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <br>\n                <br>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-3\">\n                    <img src=\"images/customers/skb.png\" alt=\"services\" class=\"img-responsive\">\n                </div>\n                <div class=\"col-sm-3\">\n                    <img src=\"images/customers/lg.png\" alt=\"services\" class=\"img-responsive\">\n                </div>\n                <div class=\"col-sm-3\">\n                    <img src=\"images/customers/hortonworks.png\" alt=\"services\" class=\"img-responsive\">\n                </div>\n                <div class=\"col-sm-3\">\n                    <img src=\"images/customers/personae.png\" alt=\"services\" class=\"img-responsive\">\n                </div>\n            </div>\n            <div class=\"row\">\n                <br>\n                <br>\n            </div>\n            <div class=\"row\">\n                <div class=\"col-sm-3\">\n                    <img src=\"images/customers/kt.png\" alt=\"services\" class=\"img-responsive\">\n                </div>\n                <div class=\"col-sm-3\">\n                    <img src=\"images/customers/waffle.png\" alt=\"services\" class=\"img-responsive\">\n                </div>\n                <div class=\"col-sm-3\">\n                    <img src=\"images/customers/zettaset.png\" alt=\"services\" class=\"img-responsive\">\n                </div>\n            </div>\n        </div>\n</section>\n<!-- END Client -->\n\n<!-- Resources  -->\n<section class=\"pricing slice color1\" id=\"resources\">\n    <div class=\"container\">\n        <h1>RESOURCES</h1><br>\n        <div class=\"row\">\n            <div class=\"col-md-4 col-sm-6\">\n                <div class=\"pricingBloc focusPlan\">\n                    <h3><font size=\"6\">DATASHEET</font>\n                        <span>More details on Peloton and other NFLabs products</span>\n                    </h3>\n                    <p class=\"sign\">\n                        <a href=\"docs/peloton_brochure2014.pdf\"><font color=\"#0800000\" size=\"4\"><b>DOWNLOAD</b></font></a>\n                    </p>\n                </div>\n            </div>\n            <div class=\"col-md-4 col-sm-6\">\n                <div class=\"pricingBloc focusPlan\">\n                    <h3><font size=\"6\">OPENSOURCE</font>\n                        <span> We believe in the community because we are part of the community. Check out our open source contribution—Zeppelin</span>\n                    </h3>\n\n                    <p class=\"sign\">\n                        <a href=\"http://zeppelin-project.org/\"><font color=\"#0800000\" size=\"4\"><b>GO TO SITE</b></font></a>\n                    </p>\n                </div>\n            </div>\n            <div class=\"col-md-4 col-sm-6\">\n                <div class=\"pricingBloc focusPlan\">\n                    <h3><font size=\"6\">CASE STUDY</font>\n                        <span>LG significantly lowers time to analysis with Peloton</span>\n                    </h3>\n                    </ul>\n                    <p class=\"sign\">\n                        <a href=\"docs/case_study-LG.pdf\"><font color=\"#0800000\" size=\"4\"><b>DOWNLOAD</b></font></a>\n                    </p>\n                </div>\n            </div>\n        </div>\n    </div>\n</section>\n\n<!-- Try us -->\n<section class=\"slice\" id=\"ourversions\">\n    <div class=\"container\">\n        <h1> OUR VERSIONS </h1>\n        <br>\n        <div class=\"row\">\n            <div class=\"col-sm-12\">\n                <p><center><img src=\"images/versions.png\"></center></p>\n            </div>\n            <br>\n            <p style=\"text-align:center;\">&nbsp;&nbsp;&nbsp; *Ask about our special pricing for startups and educational institutions.</p>\n            <div class=\"col-md-12\" align=\"center\">\n                <br><br><br> <a class=\"btn btn-lg\" title=\"\" href=\"#/form\" onclick=\"window.open(this.href, 'form', 'left=20,top=20,width=500,height=700,resizable=0');\n                        return false;\" >\n                    GIVE IT A TRY\n                </a>\n                </p>\n            </div>\n        </div>\n    </div>\n\n</section>\n\n<!-- content -->\n<!-- footer -->\n<footer class=\"color4\">\n    <section id=\"mainFooter\">\n        <div class=\"container\" id=\"footer\">\n            <div class=\"row\">\n                <div class=\"col-sm-3\">\n                    <div class=\"footerWidget\">\n                        <img src=\"images/RS_PoweredBy_OCC_logo-white-shadow-1.png\" class=\"img-responsive\" alt=\"Friends\" id=\"footerLogo\">\n\n                    </div>\n                </div>\n\n\n                <div class=\"col-sm-3\">\n                    <div class=\"footerWidget\">\n                        <h4>NFLabs</h4>\n                        <address>\n                            <p> <i class=\"icon-location\"></i>&nbsp;9 Teheran-ro 10-gil,<br>\n                                Gangnam-gu, Seoul South Korea <br>\n                                <i class=\"icon-phone\"></i>&nbsp;+82(0)2-3458-9600 <br>\n                                <i class=\"icon-mail-alt\"></i>&nbsp;<a href=\"mailto:info@nflabs.com\">info@nflabs.com</a>\n                            </p>\n                        </address>\n                    </div>\n                </div>\n\n                <div class=\"col-sm-3\">\n                    <div class=\"footerWidget\">\n                        <h4>We're social</h4>\n                        <ul class=\"socialNetwork pull-right\">\n                            <li><a href=\"https://www.facebook.com/pages/NFLabs/254269554635823\" class=\"tips\" title=\"\" target=\"_blank\" data-original-title=\"follow us on Facebook\"><i class=\"fa fa-facebook iconRounded\"></i></a></li>\n                            <li><a href=\"https://twitter.com/koreabigdata\" class=\"tips\" title=\"\" data-original-title=\"follow us on Twitter\" target=\"_blank\"><i class=\"fa fa-twitter iconRounded\"></i></a></li>\n                            <li><a href=\"https://github.com/NFLabs\" class=\"tips\" title=\"\" data-original-title=\"Github\" target=\"_blank\"><i class=\"fa fa-github-alt iconRounded\"></i></a></li>\n                        </ul>\n                    </div>\n                </div>\n\n            </div>\n        </div>\n    </section>\n</footer>\n<section  id=\"footerRights\">\n    <div class=\"container\">\n        <div class=\"row\">\n            <div class=\"col-sm-10 text-center\">\n                <p>Copyright © ");
  hashTypes = {};
  hashContexts = {};
  data.buffer.push(escapeExpression(helpers._triageMustache.call(depth0, "currentDate", {hash:{},contexts:[depth0],types:["ID"],hashContexts:hashContexts,hashTypes:hashTypes,data:data})));
  data.buffer.push("  <a href=\"http://www.nflabs.com\" target=\"blank\">NFLabs, Inc.</a> / All rights reserved.</p>\n            </div>\n\n        </div>\n    </div>\n</section>\n<!-- End footer -->\n</div>\n");
  return buffer;
  
});
;
//# sourceMappingURL=app.js.map