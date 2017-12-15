$(document).ready(function() {

	//Lettering:

	var words = '.word1, .word2, .word3, .word4, .word5, .word6, .word7, .word8, .word9, .word10, .word11, .word12, .word13, .word14, .word15, .word16, .word17, .word18, .word19, .word20, .word21, .word22, .word23, .word24, .word25, .word26, .word27, .word28, .word29, .word30, .word31, .word32, .word33, .word34, .word35, .word36';

	$(".camel-wrap").lettering('words');
	$(words).lettering();

	$( words ).wrap( "<div class='word-wrap'></div>" );

	//Word position:
	$(".word-wrap").each(function(){
		var staticTop = $(this).position().top;
		var staticLeft = $(this).position().left;

		console.log('top= '+staticTop+' left= '+staticLeft);

		$(this).css('left', staticLeft);
		$(this).css('top', staticTop);
	});

	//Animation delay:
	setTimeout(function(){
		 $(".word-wrap").css('position','absolute');
		 animateDiv();
	},5000);

	//Animate div code:
	function makeNewPosition() {

	    // Get viewport dimensions (remove the dimension of the div)
	    var h = $(window).height() - 10;
	    var w = $(window).width() - 100;

	    var nh = Math.floor(Math.random() * h);
	    var nw = Math.floor(Math.random() * w);

	    return [nh,nw];
	}

	function animateDiv(){
	   $('.word-wrap').each(function(){

			var newq = makeNewPosition();
			var oldq = $(this).offset();
			var speed = calcSpeed([oldq.top, oldq.left], newq);

			$(this).animate({ top: newq[0], left: newq[1] }, speed, function(){
			  animateDiv();
			});

	    });
	};

	function calcSpeed(prev, next) {
	    var x = Math.abs(prev[1] - next[1]);
	    var y = Math.abs(prev[0] - next[0]);

	    var greatest = x > y ? x : y;
	    var speedModifier = 0.015;
	    var speed = Math.ceil(greatest/speedModifier);

	    return speed;
	}
});
