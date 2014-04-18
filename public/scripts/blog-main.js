$(function(){
	$('#appsdropdown').hide();
	$('#appstab').on('mouseenter',function() {
		$('#appsdropdown').slideDown(100);
		$('.nav-meta-menu').on('mouseleave',function() {
			$('#appsdropdown').slideUp(100);
		});
	});
});
