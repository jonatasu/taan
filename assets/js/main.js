// Global variables
var navbarHeight = $(".navbar-taan").height();
var wrapperHeight = $("#wrapper").height();

function initAOS(){
  // Iniate the Animate On Scroll plugin
  AOS.init({
    offset: 100,
    duration: 600,
    easing: 'ease-in-sine',
    delay: 100
  });
}

// Set "#wrapper" TOP padding as navbar's height
if( $(window).width() > 768 ){ $("#wrapper").css("padding-top", navbarHeight+"px"); }
$("body > footer").css("margin-bottom", "-"+navbarHeight+"px");

// Prevents a click on the active item on menu
$(".taan nav.navbar li.active a").on("click", function(e){ e.preventDefault(); });

// Prevents a click on ANCHOR buttons and scrolls direct to ANCHOR's place
$("html,body").on("click",".scrollit",function(e){
  $($(this).attr("href")).length > 0 && e.preventDefault();
  $("html,body").animate({ scrollTop: ($($(this).attr("href")).offset().top - navbarHeight) }, 1300);
});

// Toggles the class "open" on the "Hamburger menu" on every click
$('#nav-icon4').on("click",function(){ $(this).toggleClass('open'); });

$(document).ready(function(){
  // ADD "Animate On-Scroll" every "SECTION" tag that doesn't have it
  $("section").each(function(){ $(this).data("aos") === undefined && $(this).data("aos","fade-up"); });

  initAOS();
});
$(window).scroll(function(){

  // Calls AOS again if content height's changes
  if(wrapperHeight !== $("#wrapper").height()){
    wrapperHeight = $("#wrapper").height();
    initAOS();
  }
});
