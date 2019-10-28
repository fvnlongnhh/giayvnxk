$(document).ready(function(){	
	$(".open-nav").click(function(){
        $("figure.nav-mobile").addClass("active");
    });
	
	$(".close-nav").click(function(){
        $("figure.nav-mobile").removeClass("active");
    });
	
	$(".open-nav-tab").click(function(){
        $("ul.nav-tab-mobile").toggleClass("active");
    });
	
	$(".open-nav-mobile").click(function(){
        $("ul.nav-mobile").toggleClass("active");
    });
	
	$("#btn-baogia").click(function(){
        $(".form-price").toggleClass("active");
    });
	
	$(".form-price-bg").click(function(){
        $(".form-price").removeClass("active");
    });
	
	$(".close-form").click(function(){
        $(".form-price").removeClass("active");
    });
	
	$(".open-search").click(function(){
        $(".search-form").toggleClass("active");
    });
	
	
});