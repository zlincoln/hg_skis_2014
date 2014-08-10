$(function(){
	$('#sub-nav').affix({
		offset: {
			top: 132
		}
	}).on('affix.bs.affix', function(){
		$('header + section').css('padding-top', $('#sub-nav').outerHeight()+'px');
	}).on('affix-top.bs.affix', function(){
		$('header + section').css('padding-top', '0px');
	});

	$('[data-fitvids-target]').fitVids();

	$('.carousel')
		.on('slide.bs.carousel', function(e){
			console.log(e.relatedTarget);
			var newHeight = $(e.relatedTarget).outerHeight();
			console.log(newHeight);
			$(this).find('.item.active').parent().animate({
				'height': newHeight
			}, 500);
		})
		.carousel({
			interval: 10000
		});

});