(function($) { 

$('[data-toggle="offcanvas"]').on('click', function () {
    $('.navbar-collapse').toggleClass('show');
    });


/* ================ Revolution Slider. ================ */
  if($('.tp-banner').length > 0){
    $('.tp-banner').show().revolution({
      delay:6000,
          startheight: 550,
          startwidth: 1170,
          hideThumbs: 1000,
          navigationType: 'none',
          touchenabled: 'on',
          onHoverStop: 'on',
          navOffsetHorizontal: 0,
          navOffsetVertical: 0,
          dottedOverlay: 'none',
          fullWidth: 'on'
    });
  }
  if($('.tp-banner-full').length > 0){
    $('.tp-banner-full').show().revolution({
      delay:6000,
          hideThumbs: 1000,
          navigationType: 'none',
          touchenabled: 'on',
          onHoverStop: 'on',
          navOffsetHorizontal: 0,
          navOffsetVertical: 0,
          dottedOverlay: 'none',
          fullScreen: 'on'
    });
  } 
  


    /*==== Nav ====*/
    $('.navbar-collapse a').on('click',function(){
        $(".navbar-collapse").collapse('hide');
    });

/* ================ Nav ================ */
    $('.fa-caret-down').on("click", function(e) {
        e.preventDefault();
        $(this).next().slideToggle('');
    });
    

/* ================ Nice Select ================ */
    $(document).ready(function() {
  $('select').niceSelect();
});



  // The slider being synced must be initialized first
  $('#carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '#slider'
  });
 
  $('#slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: "#carousel"
  });


  
	


  jQuery('.carousel').each(function(index){
    console.log(index);
    if(jQuery(".carousel").eq(index).length) {
      jQuery('.carousel').eq(index).flexslider({
        animation: "slide",
        controlNav: false,
        directionNav:true,
        animationLoop: false,
        slideshow: true,
        itemWidth: 91,
        pausePlay: false,
        asNavFor: '.slider:eq('+index+')',
        itemMargin: 7,
        minItems: 4,
        maxItems: 4,
        move: 4
        });
      }
  
      if(jQuery('.slider').eq(index).length){
        jQuery('.slider').eq(index).flexslider({
        animation: "slide",
        controlNav: false ,        
        directionNav:true,
        animationLoop: false,
        slideshow: true,
        pausePlay: false,
        video: true,
        sync: ".carousel:eq("+index+")", 		
        });	 
      }

  });
  /*$('.carousel').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    itemWidth: 210,
    itemMargin: 5,
    asNavFor: '.slider'
  });
 
  $('.slider').flexslider({
    animation: "slide",
    controlNav: false,
    animationLoop: false,
    slideshow: false,
    sync: ".carousel"
  });*/

})(jQuery);;