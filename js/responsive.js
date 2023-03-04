//Adaptive function
$(window).resize(function(event){
	adaptive_function();
});
function adaptive_header(w,h){
		var headerMenu=$('.header-menu');
		var headerLang=$('.header-top-lang');
	if(w<896){
		if(!headerLang.hasClass('done')){
			headerLang.addClass('done').appendTo(headerMenu);
		}
	}else{
		if(headerLang.hasClass('done')){
			headerLang.removeClass('done').prependTo($('.header-top'));
		}
	}
	}
