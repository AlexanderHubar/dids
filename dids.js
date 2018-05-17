$( document ).ready(function() {
	function DidsOR (did, delayStart, play) {
		$(did).delay(delayStart).queue(function () { 
			$(this).css('display', 'block'); 
			$(this).dequeue();
		}).delay(play).queue(function () { 
			$(this).css('display', 'none'); 
			$(this).dequeue();
		})
	}
	function playMusic () {
		$(".doOR").add( "<audio id='audio' src='audio.mp3' volume='1' autoplay></audio>" );
		setTimeout("$('#audio').pause();", 5000);
	}
	$(".doOR").click(function() {
		playMusic();
		DidsOR(".did1", 200, 3200);
		DidsOR(".did2", 3900, 3500);
		DidsOR(".did3", 7400, 3800);
		DidsOR(".did4", 11200, 3800);
		DidsOR(".did5", 15000, 4800);
		DidsOR(".did6", 19800, 2800);
		DidsOR(".did7", 24900, 1300);
		DidsOR(".did8", 26700, 3500);
	})
});