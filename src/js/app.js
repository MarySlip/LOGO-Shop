$(document).ready(function(){
$('.icon-menu').click(function (event) {
	$(this).toggleClass('_active');
	$('.menu__body').toggleClass('-active');
	$('body').toggleClass('lock');
});
});