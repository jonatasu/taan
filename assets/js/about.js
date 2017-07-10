// Set SCROLLSPY to the SUBNAVBAR object
$('body').scrollspy({ target: '#subnavbar', offset: 190 });

// Custom EM and SPAN.SIDE-INFO heights
$(".personas").each(function(){
  var em = [], sideInfo = [];

  $(this).find(".person em").each(function(){
    em.push($(this).height());
  });
  $(this).find(".person .side-info").each(function(){
    sideInfo.push($(this).height());
  });

  em = Math.max.apply(null, em);
  sideInfo = Math.max.apply(null, sideInfo);

  $(this).find(".person em").each(function(){
    $(this).height(em+"px")
  });
  $(this).find(".person .side-info").each(function(){
    $(this).height(sideInfo+"px")
  });

});

// Sets the right height fro each vertical line under each year
$(".timeline").each(function(){
  $(this).height( $(this).parent().next().height() - $(this).prev().height() );
});

// Sets the right position for the SUB-NAVBAR when "affixed"
$("#subnavbar").data("offset-top", $("#subnavbar").offset().top - ($("body > nav").height() + 20)).css("top",$("body > nav").height());
