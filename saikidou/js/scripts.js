$(function(){
	/* main background image. moves against the direction of scroll*/
	$('.item').scrollParallax({
		'speed': 0.3
	});

	/* inner items, moves slightly faster than the background */
	$('.item .inner').scrollParallax({
		'speed': 0.83
	});
	
	/* two additional samples inside item2, both moving with direction of scroll*/
	$('.item .inner-lev1').scrollParallax({
		'speed': 0.75
	});	
	$('.item .inner-lev2').scrollParallax({
		'speed': 0.77
	});
	$('.item .inner-lev3').scrollParallax({
		'speed': 0.45
	});
    $('.item .inner-lev4').scrollParallax({
		'speed': 0.85
	});
	$('.item .inner-lev5').scrollParallax({
		'speed': 0.65
	});
	$('.item .inner-lev6').scrollParallax({
		'speed': 0.8
	});
	$('.item .inner-lev7').scrollParallax({
		'speed': 0.55
	});

});