
$('.slider-principal').slick({
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 1,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,
  fade: true,
  cssEase: 'linear'
});


$('.slider').slick({
  dots: true,
  infinite: true,
  speed: 100,
  slidesToShow: 2,
  adaptiveHeight: true,
  autoplay: true,
  autoplaySpeed: 3000,

});

/*
  Slidemenu
*/
(function() {
	var $body = document.body
	, $menu_trigger = $body.getElementsByClassName('menu-trigger')[0];

	if ( typeof $menu_trigger !== 'undefined' ) {
		$menu_trigger.addEventListener('click', function() {
			$body.className = ( $body.className == 'menu-active' )? '' : 'menu-active';
		});
	}

}).call(this);
