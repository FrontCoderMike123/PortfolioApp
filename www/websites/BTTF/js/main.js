// JavaScript Document

var video, toggleButton, toggleRestart, toggleStop, buttonGroup, theExt, ffButton, volSlider;

function init () {
	console.log("init fired");
	
	arrow = document.querySelector("#arrow");
	TweenMax.to(arrow, 1, {x:-1185 , y: 20});
	
	video = document.querySelector("#trailerBox");
	toggleButton = document.querySelector(".playVideo")
	toggleButton.addEventListener("click", togglePlay, false);
	
	toggleRestart = document.querySelector(".rewindVideo");
	toggleRestart.addEventListener("click", restart, false);
	
	toggleStop = document.querySelector(".stopVideo");
	toggleStop.addEventListener("click", videoStop, false);
	
	ffButton = document.querySelector(".fastVideo")
	ffButton.addEventListener("click", ffVid, false);
	
	volSlider = document.querySelector("#vidVol");
	volSlider.addEventListener("change", updateVol, false);
	
	var currentSource = video.currentSrc;
	console.log(currentSource);
	theExt = currentSource.substr(currentSource.lastIndexOf("."));
	console.log(theExt);
	console.log(video.currentSrc);
	buttonGroup = document.querySelectorAll("button");
	for (i=0; i<buttonGroup.length; i++) {
		buttonGroup[i].addEventListener("click", logClick, false);
	}
}

function updateVol() {
	console.log (this.value);
	video.volume = (this.value / 100);
}

function ffVid (){
	console.log("clicked on FF button");
	//theVid.playbackRate = 3;
	this.classList.toggle("ffOn");
	
	if (this.classList.contains("ffOn")) {
		video.playbackRate = 3;
	} else {
		video.playbackRate = 1;
	}
}

function logClick() {
	console.log(this.id);
	video.src = "video/" + this.id + theExt;
	video.load();
	//video.play();
}

function videoStop (){
	console.log("toggle clicked");
	
	video.currentTime = 0;

	video.pause();
}


function restart () {
	console.log("toggle clicked");
	
	video.currentTime = 0;
}
	
function togglePlay() {
		
	
	if (video.paused) {
		video.play();
		this.firstChild.nodeValue = "Pause";		
		togglePlay.innerHTML = "Pause";
		video.playbackRate = 1;
	} else {
	video.pause();
	this.firstChild.nodeValue = "Play";
	togglePlay.innerHTML = "Play";
	}
}
window.addEventListener("load", init, false);