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

	if($('[data-fitvids-target]').length > 0){
		$('[data-fitvids-target]').fitVids();
	}

	$('.carousel')
		.on('slide.bs.carousel', function(e){
			var $activeSlide = $(this).find('.item.active'),
					$nextSlide = $(e.relatedTarget),
					newHeight = $nextSlide.outerHeight(),
					$player = $activeSlide.find('iframe'),
					data = {
						method: 'pause'
					};
			if($player.length > 0){
				var url = window.location.protocol + $player.attr('src').split('?')[0];
				$player[0].contentWindow.postMessage(JSON.stringify(data), url);
			}
			$activeSlide.parent().animate({
				'height': newHeight
			}, 500);
		})
		.carousel({
			interval: 10000
		});

});