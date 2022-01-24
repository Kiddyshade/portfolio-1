
$(document).ready(function(){

    $(window).on('load',function(){
        $('.preloader').addClass('complete');
    });


    $(window).on('load',function(){
      $('.preloader').addClass('complete')
    });
    
    $(window).on('scroll',function(){
      var scroll = $(window).scrollTop();
      console.log(scroll);
      if(scroll >=50){
        $(".sticky").addClass("stickyadd");
      }else{
        $(".sticky").removeClass("stickyadd");
      }
    });

    var typed =new Typed(".element",{
        strings: ["Naresh Kumar", "a Developer","a Freelancer","a Freasher"],smartBackspace:true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    });

    // progress bars
var waypoint=new Waypoint({
    element: document.getElementById('exp-id'),
    handler:function(){
        var p=document.querySelectorAll('.progress-bar');
        p[0].setAttribute("style","width:100%;transition:1s all");
        p[1].setAttribute("style","width:85%;transition:1.5s all");
        p[2].setAttribute("style","width:85%;transition:1.7s all");
        p[3].setAttribute("style","width:80%;transition:2.5s all");
        p[4].setAttribute("style","width:95%;transition:2.7s all");
        
    },
    offset:'90%'
});

// adding fadeInup animation to child of div with class .way-col
var $child = $('.lightspeedin').children();
$child.each(function(){
    var self= $(this);
    $(this).waypoint(function(){
        self.addClass('animated rubberBand');
    },{offset: '90%'});
});

var $child = $('.fadefromleft').children();
$child.each(function(){
    var self= $(this);
    $(this).waypoint(function(){
        self.addClass('animated fadeInRight');
    },{offset: '90%'});
});

var $child = $('.fadefromRight').children();
$child.each(function(){
    var self= $(this);
    $(this).waypoint(function(){
        self.addClass('animated fadeInLeft');
    },{offset: '90%'});
});

var $child = $('.rollin').children();
$child.each(function(){
    var self= $(this);
    $(this).waypoint(function(){
        self.addClass('animated rollIn');
    },{offset: '90%'});
});

var $child = $('.slideinup').children();
$child.each(function(){
    var self= $(this);
    $(this).waypoint(function(){
        self.addClass('animated slideInUp');
    },{offset: '90%'});
});
var filterizd = $('.filter-container').filterizr({
    animationDuration:.5,
})

// Owl Carousel

$(".owl-carousel").owlCarousel({
loop:true,
autoplay:true,
autoplayTimeout:8000,
items:1
});

$('a').smoothScroll({

    speed:2000,
  });

});
    
