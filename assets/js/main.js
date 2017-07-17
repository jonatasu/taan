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
  if($($(this).attr("href")).length > 0){
    e.preventDefault();
  }
  $("html,body").animate({ scrollTop: ($($(this).attr("href")).offset().top - navbarHeight) }, 1300);
});

// Toggles the class "open" on the "Hamburger menu" on every click
$('#nav-icon4').on("click",function(){ $(this).toggleClass('open'); });

$(document).ready(function(){
  // ADD "Animate On-Scroll" every "SECTION" tag that doesn't have it
  $("section").each(function(){
    if($(this).data("aos") === undefined){
      $(this).data("aos","fade-up");
    }
  });

  // Rola o scroll da página até o conteúdo se caso existir conteúdo com o mesmo ID que a HASH da URL
	if(window.location.hash != undefined && window.location.hash != "" && $(window.location.hash).length > -1){
		$("html,body").animate({scrollTop: ($(window.location.hash).offset().top - $("nav.navbar-taan").outerHeight())+"px" }, 1000);
	}

  initAOS();
});
$(window).scroll(function(){

  // Calls AOS again if content height's changes
  if(wrapperHeight !== $("#wrapper").height()){
    wrapperHeight = $("#wrapper").height();
    initAOS();
  }
});
