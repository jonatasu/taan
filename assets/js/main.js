// Global variables
var navbarHeight = $(".navbar-taan").height();

// Set "#wrapper" TOP padding as navbar's height
$("#wrapper").css("padding-top", navbarHeight+"px");
$("body > footer").css("margin-bottom", "-"+navbarHeight+"px");

// Prevents a click on the active item on menu
$(".taan nav.navbar li.active a").on("click", function(e){ e.preventDefault(); });

// Prevents a click on ANCHOR buttons and scrolls direct to ANCHOR's place
$("html,body").on("click",".scrollit",function(e){
  e.preventDefault();
  $("html,body").animate({ scrollTop: ($($(this).attr("href")).offset().top - navbarHeight) }, 1300);
});

$(document).ready(function(){
  // ADD "Animate On-Scroll" attributes on every "P" tag
  $("section p").each(function(){ $(this).attr("data-aos","fade-up"); });
  $(".taan-tabs .tab-pane ul").each(function(){ $(this).attr("data-aos","fade-up"); });
  $(".taan-tabs .tab-pane img").each(function(){ $(this).attr("data-aos","fade-in"); });

  // Iniate the Animate On Scroll plugin
  AOS.init({
    offset: 100,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100
  });
});
