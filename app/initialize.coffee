
$(document).ready ->
  arrowAfterScroll = ->
    if $(document).scrollTop() > 1
      $('.intro__arrow').find('.intro__arrow__inner').addClass('intro-opacity')


  $(document).scroll arrowAfterScroll

  $(".promo_blocks").slick
    arrows: true
    dots: false
    fade: true
