$(document).ready(function() {
   instructions();

  $('.ryu').mouseenter(function() {
    mouseIn();
  })
  .mouseleave(function(){
  	mouseOut();
  })
  .mousedown(function(){
  	playHadouken();
  	$('.ryu-still').hide();
  	$('.ryu-ready').hide();
  	$('.ryu-throwing').show();
  	$('.hadouken').show();
	$('.hadouken').finish().show().animate({'left': '300px'},
		500, 
		function() {
     		 $(this).hide();
      		 $(this).css('left', '-175px');
    	}
    	);
   })
   .mouseup(function(){
   	$('.ryu-ready').show();
  	$('.ryu-throwing').hide()
  	$('.ryu-cool').hide();
   });


    $(document).keydown(function(e) {
    if (e.keyCode == 88) {
      playGroove();
      $(".ryu-still").hide();
      $(".ryu-ready").hide();
      $(".ryu-cool").show();
      $(".ryu").unbind("mouseenter");
      $(".ryu").unbind("mouseleave");
    }   
  })
    .keyup(function(e) {
    if (e.keyCode == 88) {
      $('#groove-sound')[0].pause();
      $('#groove-sound')[0].load()
      $('.ryu-cool').hide();
      $('.ryu-still').show();
      $(".ryu").bind("mouseenter", mouseIn);
      $(".ryu").bind("mouseleave", mouseOut);
    }
  });

    function instructions () {
    	  $('.instructions').fadeIn(3000);
    }

    var mouseIn = function(){
    	$('.ryu-still').hide();
   		$('.ryu-ready').show();
    }

    var mouseOut = function(){
    	$('.ryu-still').show();
   		$('.ryu-ready').hide();
    }

	function playHadouken () {
    	$('#hadouken-sound')[0].volume = 0.5;
   		$('#hadouken-sound')[0].load();
   		$('#hadouken-sound')[0].play();
	}

	function playGroove () {
    	$('#groove-sound')[0].volume = 0.5;
   		//$('#groove-sound')[0].load();
        $('#groove-sound')[0].play();
	}

});