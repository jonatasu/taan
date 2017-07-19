// Global variables
var navbarHeight = $(".navbar-taan").height();
var wrapperHeight = $("#wrapper").height();


// Iniate the Animate On Scroll plugin
AOS.init({
  disable: 'mobile',
  offset: 100,
  duration: 1200,
  easing: 'ease-in-sine',
  delay: 300
});

// Mobile alternative for BS3 taan-tabs
if($("#membership_mobile_tabs").length !==0){
  $("#membership_mobile_tabs").on("change", function(){
    $('.taan-tabs .nav-tabs a[href="'+$(this).val()+'"]').tab('show');
    $("html, body").scrollTop($("#membership_mobile_tabs").offset().top);
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
  if($("#subnavbar").length !== 0){
    // Sets the right position for the SUB-NAVBAR when "affixed"
    $("#subnavbar").data("offset-top", $("#subnavbar").offset().top - ($("body > nav").height() + 20)).css("top",$("body > nav").height());
  }

  // Rola o scroll da página até o conteúdo se caso existir conteúdo com o mesmo ID que a HASH da URL
	if(window.location.hash != undefined && window.location.hash != "" && $(window.location.hash).length > -1){
		$("html,body").animate({scrollTop: ($(window.location.hash).offset().top - $("nav.navbar-taan").outerHeight())+"px" }, 1000);
	}

  AOS.refresh();
});
$(window).scroll(function(){

  // Calls AOS again if content height's changes
  if(wrapperHeight !== $("#wrapper").height()){
    wrapperHeight = $("#wrapper").height();
    AOS.refresh();
  }
});
