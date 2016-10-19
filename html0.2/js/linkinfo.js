$(function(){
	var lifo=$("a.linkfo");
	var cl=$("[data-i=tanc]");
	var polifo=null;
	var claslifo=null;
	$(lifo).click(function(){
		claslifo="#"+$(this).attr("title");
		polifo=$(window).scrollTop();
		$("html,body").animate({scrollTop: polifo});
		$(claslifo).css("top",polifo);
		$(claslifo).addClass("popinfo");
		$(claslifo).fadeIn("slow");
		$(cl).css("cursor","pointer");
		$(cl).click(function(){
			$(claslifo).fadeOut("slow");
		});
	});
});