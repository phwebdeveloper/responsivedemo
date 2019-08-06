

(function($) {

	$('.self').click(function(){
		$('#self-txt').text("Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries. ");
	})

	$('.recentwork').click(function(){
		$('.container-work').append('<div class="row aln-center spacer-top5"><div class="col-4 col-6-medium col-12-small"><section class="box style1"><span class="icon featured fa-comments"></span><h3>Consequat lorem</h3><p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p></section></div><div class="col-4 col-6-medium col-12-small"><section class="box style1"><span class="icon solid featured fa-camera-retro"></span><h3>Lorem dolor tempus</h3><p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p></section></div><div class="col-4 col-6-medium col-12-small"><section class="box style1"><span class="icon featured fa-thumbs-up"></span><h3>Feugiat posuere</h3><p>Ornare nulla proin odio consequat sapien vestibulum ipsum primis sed amet consequat lorem dolore.</p></section></div></div>');
	})

	$('.featured').click(function(){
		$(this).find( "img" ).attr("src","images/opt_mkp_thumbnail.jpg");
	})



})(jQuery);