$(function(){
	var flex=$("#up");
	var bv=$("#ir");
	var ic=$(".ic");
	var icp=$(".icp p")
	flex.hide();
	ic.hide();
	icp.hide();
	$(window).scroll(function(){
		if ($(this).scrollTop()>500) {
			$(flex).fadeIn("fast");
			
		}
		else 
		{
			$(flex).fadeOut("fast");
		}
		
		if ($(this).scrollTop()>1000) {
			$(ic).fadeIn("slow");
		}
		
		if ($(this).scrollTop()>1100) {
			$(icp).fadeIn("slow");
		}
		
	});
	$(flex).css("cursor","pointer");
	$(flex).mouseover(function(){
		$(this).css({
			"color":"#F77",
			"textShadow":"2px 2px #333"
		});
	});
	$(flex).mouseout(function(){
		$(this).css({
			"color":"#000",
			"textShadow":"none"
		});
	});		
	$(flex).click(function(){
		$("html,body").animate({scrollTop: 0}, 500);
	});
	$(bv).css("cursor","pointer");
	$(bv).click(function(){
		$("html,body").animate({scrollTop:$("#tuguia").position().top}, 'slow');
	});
});