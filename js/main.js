$('.menu__burger').on('click', function(e) {
	e.preventDefault;
	$(this).toggleClass('menu__burger-active');
	$('.menu__burger-links').toggleClass('menu__burger-links-active');
});




