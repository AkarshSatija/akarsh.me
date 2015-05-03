$(document).ready(function()
{

  // Navigation

  $('a[href*=#]:not([href=#])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html,body').stop(true,false).animate({
          scrollTop: target.offset().top
        }, 1200);
        return false;
      }
    }
  });

  var aChildren = $("nav div a");
    var aArray = []; // create the empty aArray
    for (var i=0; i < aChildren.length; i++) {    
        var aChild = aChildren[i];
        var ahref = $(aChild).attr('href');
        aArray.push(ahref);
    } // this for loop fills the aArray with attribute href values

    $(window).scroll(function(){
        var windowPos = $(window).scrollTop(); // get the offset of the window from the top of page
        var windowHeight = $(window).height(); // get the height of the window
        var docHeight = $(document).height();

        for (var i=0; i < aArray.length; i++) {
            var theID = aArray[i];
            var divPos = $(theID).offset().top; // get the offset of the div from the top of page
            var divHeight = $(theID).height(); // get the height of the div in question
            if (windowPos >= divPos && windowPos < (divPos + divHeight)) {
                $("a[href='" + theID + "']").addClass("active");
            } else {
                $("a[href='" + theID + "']").removeClass("active");
            }
        }

        if(windowPos + windowHeight == docHeight) {
            if (!$("nav div a").hasClass("active")) {
                var navActiveCurrent = $(".active").attr("href");
                $("a[href='" + navActiveCurrent + "']").removeClass("active");
                $("nav div a").addClass("active");
            }
        }
    });

    if($(window).width() < 800){

      $("body > nav .hamburger").click(function(){
      $("body > nav div").slideToggle();
      });

      $("section, body > nav div a").click(function(){
      $("body > nav div").slideUp();
      });

    }


    $(".portfolio .expand").hide();

  $(".portfolio .content .project").click(function(){

    var index = $(this).data("index");
    var section_id = "#" + String($(this).data("section"));
    var child = $(section_id + "-expand-" + index);

    $(".portfolio .expand").hide();
    $(section_id + " .project").removeClass("active");
    $(this).addClass("active");

    child.slideDown(800);
    $.scrollTo( child, 800);
  });

  if($(window).width() > 800){
      $(".portfolio .expand .project .close").click(function(){
        $(this).parent().parent().hide();
        $(".portfolio .content .project").removeClass("active");
        $.scrollTo($(this).parent().parent().parent(), 800);
  });

  };

    if($(window).width() < 800){
      $(".portfolio .expand .project .close").click(function(){
        $(this).parent().parent().hide();
        $(".portfolio .content .project").removeClass("active");
        $.scrollTo($(this).parent().parent().parent(), 800);
  });

  };

    $(".experience .timeline .time").click(function(){


    var index = $(this).data("index");
    var section_id = "#" + String($(this).data("section"));
    var child = $(section_id + "-expand-" + index);

    $(section_id + " .expand").hide();
    $(section_id + " .time").removeClass("active");
    $(this).addClass("active");

    child.show();
    child.slideDown(800);
    $.scrollTo( child, 800);
    });

    $(".experience .expand .experience-full .close").click(function(){
          $(this).parent().parent().animate({ height: 0 }, 800);
          $(".experience .timeline .time").removeClass("active");
          $.scrollTo( '.experience .description', 800);
    });
  // Sliders

  var experienceCount = $('.experience .timeline .time').length;
  $('.experience .timeline').slick({
            draggable:false,
            focusOnSelect: true,
            dots: false,
            slidesToShow: Math.min(4, experienceCount),
            slidesToScroll: 1,
            autoplay: true,
            infinite: true,
            speed: 400,
            accessibility: false,
            touchMove: false,
            responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: Math.min(4, experienceCount),
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: Math.min(3, experienceCount),
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: Math.min(2, experienceCount),
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
  });

  var portfolioCount = $('.portfolio .content .project').length;
  $('.portfolio .content').slick({
            dots: false,
            slidesToShow: Math.min(3, portfolioCount),
            slidesToScroll: 1,
            infinite: false,
            autoplay: true,
            speed: 800,
            accessibility: false,
            touchMove: false,
            responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: Math.min(3, portfolioCount),
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
  });

  var galleryCount = $('.gallery .content .image').length;
  $('.gallery .content').slick({
            dots: false,
            slidesToShow: Math.min(4, galleryCount),
            slidesToScroll: 1,
            speed: 400,
            autoplay: true,
            accessibility: false,
            touchMove: false,
            responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: Math.min(4, galleryCount),
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: Math.min(3, galleryCount),
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: Math.min(2, galleryCount),
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
  });

  $('.testimonials .content').slick({
            dots: false,
            draggable: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            autoplay: true,
            speed: 1200,
            accessibility: false,
            touchMove: false,
            adaptiveHeight: false,
            responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 800,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    },
    {
      breakpoint: 480,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
      }
    }
  ]
  });

  if($(window).width() > 800){

  $('.education .content').slick({
            dots: false,
            slidesToShow: 1,
            slidesToScroll: 1,
            infinite: true,
            autoplay: true,
            autoplaySpeed: 2000,
            speed: 1200,
            accessibility: false,
            touchMove: false,
            draggable:false
    });

  var listCount = $('.list .content .item').length;
  $('.list .content').slick({
            focusOnSelect: true,
            dots: false,
            slidesToShow: Math.min(4, listCount),
            slidesToScroll: 1,
            speed: 400,
            autoplay: true,
            autoplaySpeed: 2000,
            accessibility: false,
            touchMove: false,
            draggable:false
  });

  };

});
