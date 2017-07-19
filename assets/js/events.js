$(".box_item").on("mouseover", "h2 > a", function(){
  $(this).parents(".box_item").addClass("hover");
}).on("mouseleave", "h2 > a", function(){
  $(this).parents(".box_item").removeClass("hover");
});
$(".box_item ul li").each(function(){
  if($(this).outerWidth() < ($(this).find("a span").outerWidth() + 60)){
    $(this).append('<span class="etc">&nbsp;...</span>');
  }
});
