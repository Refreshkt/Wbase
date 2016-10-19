	var res=$(window).width();
	var divslider=[];
	$("#selec a").each(function(i){
		divslider[i]=$(this).attr("href");
	});
	var x=0;
	var timer;
	var url;
	var ruta;
	var linkf;
	var linkb=$("a[href]");;
	var reproducir = function(){
		clearTimeout(timer);
		if(x>=divslider.length)
			{
				x=0;
			}
		ruta=divslider[x];
		linkf=$("a[href='"+ruta+"']");
		$(".default").removeClass("default");
		$(divslider[x]).addClass("default");
		linkb.css({
			"outline":"dotted #fff 5px",
			"outlineOffset":"10000px"//,
			//"transition":"all .3s ease-in-out"
		});
		linkf.css({
				"outlineWidth":"1px",
				"outlineOffset":"1px"
			});
		x++;
		timer=setTimeout(reproducir, 10000);
		};				
	var stop = function(b){
		linkf=$("a[href='"+b+"']");
		clearTimeout(timer);
		$(".default").removeClass("default");
		$(b).addClass("default");
		linkb.css({
			"outline":"dotted #fff 10px",
			"outlineOffset":"10000px"//,
			//"transition":"all .2s ease-in-out"
		});
		linkf.css({
				"outlineWidth":"1px",
				"outlineOffset":"1px"
			});
		timer=setTimeout(reproducir, 25000);
	};
	$(function(){

		if (res>=1200) {
			$("style").append('<link rel="stylesheet" href="estilos/estiloJs.css">');
			reproducir();
			$("#selec a").on("click", function()
			{
				url=$(this).attr("href");
				stop(url);
			});
		};
	});
