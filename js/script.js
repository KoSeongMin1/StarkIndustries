$(".mainmenu>li").mouseover(function(){
    $(".submenu").stop().slideDown();
    $(".submenuBG").stop().slideDown();
});
$(".mainmenu>li").mouseleave(function(){
    $(".submenu").stop().slideUp();
    $(".submenuBG").stop().slideUp();
});

setInterval(function(){
    $(".imageslide").delay(2300);
    $(".imageslide").animate({marginLeft:"-1920px"})
    $(".imageslide").delay(2300);
    $(".imageslide").animate({marginLeft:"-3840px"})
    $(".imageslide").delay(2300);
    $(".imageslide").animate({marginLeft:"0px"})
});