//loading.....
		var start;
		window.onload = function () {
		if(document.all) {//简单判断是否是IE
			start = setInterval('loading()', 1000);
		} else {
			var load = $('#onlo');
			load.fadeOut(1000);
			loadheart();
		}
		}
		function loading() {
		if (document.readyState == "complete") {
		try{
			var load = $('#onlo');
			load.fadeOut(1000);
			loadheart();
			clearInterval(start);//执行成功，清除监听
			
		}catch(err){return true;}
		}
		}

function loadheart(){
	if(!document.createElement('canvas').getContext) {//判断浏览器支不支持 Canvas 元素
			var msg = document.createElement("div");
			msg.id = "errorMsg";
			msg.innerHTML = "Oops, your browser doesn't support HTML5!<br/>I recommend Chrome/Firefox/Safari/Opera";
			document.body.appendChild(msg);
		} else {
			startAnimation();
		}

}

// VIDEO PLAYER
	  $('.videoLink').click(function() {
		$('audio').get(0).pause();
		$('.videoCurtain').fadeIn(250);
		$('.videoLarge').delay(300).fadeIn(500);
	    $('video').get(0).play();
		
	  });
	  
	  $('.videoCurtain').click(function() {
	    $('video').get(0).pause();
	    $('.videoLarge, #facebookModal, #applyModal').fadeOut(250);
	    $('.videoCurtain').delay(300).fadeOut(500);
		//$('audio').get(0).play(); 音频不播放了
	  });