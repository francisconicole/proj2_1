$(document).ready(function() {
    $('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage', '4thPage'],
		slidesNavigation: true,
		slidesNavPosition: 'bottom',
		menu: '#menu'
	});
	
	var renderer = PIXI.autoDetectRenderer(1500,100, {transparent: true});
	$('#addPixi').append(renderer.view);
	var stage = new PIXI.Container();
	var coach = PIXI.Sprite.fromImage('../images/coach.png');
	coach.anchor.x = 0.5;
	coach.anchor.y = 0.5;
	coach.position.x = 10;
	coach.position.y = 50;
	coach.width = 200;
	coach.height = 100;
	stage.border = 0;
	stage.addChild(coach);
	
	render();
	
	function render() {
		requestAnimationFrame(render);
		if (coach.position.x < 2000) {
			coach.position.x +=1;
		}
		renderer.render(stage);
	}
	
});

function atv() {
	var renderer1 = PIXI.autoDetectRenderer(1500,100, {transparent: true});
		$('#addPixi1').append(renderer1.view);
		var stage1 = new PIXI.Container();
		var atv = PIXI.Sprite.fromImage('../images/red.png');
		atv.anchor.x = 0.5;
		atv.anchor.y = 0.5;
		atv.position.x = 10;
		atv.position.y = 50;
		atv.width = 200;
		atv.height = 100;
		stage1.border = 0;
		stage1.addChild(atv);
		
		render();
	
		function render() {
			requestAnimationFrame(render);
			if(atv.position.x < 2000) {
				atv.position.x +=10;
			}
			if (atv.position.x >= 1500) {
				$('#muddys').show();
				$('#muddys').addClass('animated zoomIn');
				$('#muddys').removeClass('animated zoomIn');
				$('#muddys').addClass('animated slideOutDown');
				$('#muddys').css('-animation-duration', '3s');
				$('#slide1').css('background-image', 'url("../images/hogwaller.png")');
				$('#slide1').css('background-position', 'center');
				$('#slide1').css('background-size', '50%');
				$('#slide1').css('background-repeat', 'no-repeat');
			}
			
			renderer1.render(stage1);
			
			$('#what').remove();
		}
}

function shake() {
	$('#myth1').addClass('shake-slow shake-constant');
}

function stopShake() {
	$('#myth1').removeClass('shake-slow shake-constant');
}

function PlaySound(soundobj) {
	var beepOne = document.getElementById(soundobj);
		beepOne.currentTime = 26;
		beepOne.play();
}
	
function StopSound(soundobj) {
	var beepOne = document.getElementById(soundobj);
	beepOne.pause();
}

function PlayBoar(soundobje) {
	var beepTwo = document.getElementById(soundobje);
		beepTwo.play();
}
	
function StopBoar(soundobje) {
	var beepTwo = document.getElementById(soundobje);
	beepTwo.pause();
}
	
function PlayAtv(soundobjec) {
	var beepThree = document.getElementById(soundobjec);
		beepThree.currentTime = 24;
		beepThree.play();
}
	
function StopAtv(soundobjec) {
	var beepThree = document.getElementById(soundobjec);
	beepThree.pause();
}	


