$(document).ready(function() {
    $('#fullpage').fullpage({
		anchors: ['firstPage', 'secondPage', '3rdPage'],
		menu: '#menu'
	});
	
	var renderer = PIXI.autoDetectRenderer(1500,100, {transparent: true});
	$('#addPixi').append(renderer.view);
	var stage = new PIXI.Container();
	var coach = PIXI.Sprite.fromImage('images/coach.png');
	coach.anchor.x = 0.5;
	coach.anchor.y = 0.5;
	coach.position.x = 10;
	coach.position.y = 50;
	coach.width = 200;
	coach.height = 100;
	stage.border = 0;
	stage.addChild(coach);
	
	var renderer1 = PIXI.autoDetectRenderer(1500,100, {transparent: true});
	$('#addPixi1').append(renderer1.view);
	var stage1 = new PIXI.Container();
	var atv = PIXI.Sprite.fromImage('images/red.png');
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
		if (coach.position.x < 2000) {
			coach.position.x +=1;
		}
		renderer.render(stage);
		
		if(atv.position.x < 2000) {
			atv.position.x +=3;
		}
		
		if(atv.position.x < 200) {
			atv.rotate = 45;
		}
		renderer1.render(stage1);
	}
	
	
});

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

