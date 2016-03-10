var glasses, glasses2, dvd, dvd2, arrow;

function init (){
	console.log("init fired");
	
	glasses = document.querySelector("#glasses");
	
	TweenMax.to(glasses, 1, {x: 475, y: 0});
	
	glasses2 = document.querySelector("#glasses2");
	
	TweenMax.to(glasses2, 1, {x: -220, y: 0});
	
	dvd = document.querySelector("#dvd");
	
	TweenMax.to(dvd, 1, {x: 275, y: 0, delay: 5});
	
	dvd2 = document.querySelector("#dvd2");
	
	TweenMax.to(dvd2, 1, {x: -197, y: 0, delay: 5});
	
	arrow = document.querySelector("#arrow");
	
	TweenMax.to(arrow, 1, {x:-1185 , y: 20});
}

window.addEventListener("load", init, false);
