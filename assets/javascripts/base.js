/* ----- Base JS ----- */

  /* ----- Cufon----- */
  Cufon.replace('', {
    hover: 'true',
    fontFamily: ''
  });

  /* ----- SWFObject----- */
  var flashvars = {};
  var params = {};
  var attributes = {};
  swfobject.embedSWF("/flash/", "flash-anni", "420", "90", "9.0.0", flashvars, params, attributes);

  /* ----- jQuery Start----- */
  $(document).ready(function () {
    // STYLING FIX'S
    // IE FIX'S
  });

/* ----- Common Functions / Tools / Plugins ----- */

  /* ----- Slide Show ----- */
  $(function(){
    $('.hero-panel').slides({
    preload: true,
    preloadImage: '/images/loading.gif',
    effect:'slide',
    hoverPause: false,
    generatePagination: false,
    slideSpeed: 800,
    generateNextPrev: true
    });
    $('.js-needed').hide();
  });

  /* ----- Adding Body Images ----- */
  $("#body a.lightbox").each(function(){
    $(this).append('<span class="overlay">&nbsp;</span>');
   });
 
  $("#body a").each(function(){
    image = $(this);
    image.wrap('<a class="lightbox image-wrap" target="_blank" title="'+ image.attr('title') +'" href="'+   image.attr('longdesc') +'" />');
    image.after('<span class="zoom">&nbsp;</span>');
  });

  /* ----- Fancybox ----- */
  $('').fancybox({
    'padding'        : 10,
    'autoScale'      : true,
    'transitionIn'    : 'elastic',
    'transitionOut'    : 'elastic',
    'title'          : false,
    'width'        : 680,
    'height'        : 495,
    'centerOnScroll'   : true,
    'titlePosition' : 'over'
  });

  /* ----- JCarousel Lite ----- */
  $(".component.gallery.single.wide .carousel").each(function(index, gallery) {
    gallery = $(gallery);
    if (gallery.find('li').length > 3) {
          
      gallery.parents(".carousel-wrap").css("margin","10px 70px 0 50px");
      gallery.before("<a class='carousel-back'>Backward</a>");
      gallery.after("<a class='carousel-forward'>Forward</a>");

      gallery.jCarouselLite({
        btnNext: gallery.next(".carousel-forward"),
        btnPrev: gallery.prev(".carousel-back"),
        visible: 3
      });
    }
  });

  /* ----- Flash Messages ----- */
  $('#flash').delay(4000).slideUp(400);