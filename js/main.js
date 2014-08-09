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
});