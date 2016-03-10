// JavaScript Document

var readMoreButton, targetDiv, textArea, arrow, giveAway;

console.log("init fired");

	arrow = document.querySelector("#arrow");
	TweenMax.to(arrow, 1, {x:-1185 , y: 20});
	
	giveAway = document.querySelector("#giveAwayText");
	TweenMax.to(giveAwayText, 1, {x: 520, y: 0});

	readMoreButton = document.querySelector(".apply");
	readMoreButton.addEventListener("click", showText, false);
	targetDiv = document.querySelector("#textWrapper");

	
	textArea = document.querySelector("#form");
	textArea.value = null;
	textArea.addEventListener("keydown", checkKeyPressed, false);

function checkKeyPressed(e) {
    if (e.keyCode == "13") {
		submitComment();
		e.preventDefault();
		textArea.value = null;
    }
	
}

function submitComment() {
	console.log("Pressed Enter");
	
	textArea.value = null;
}

function showText() {
	console.log("showText fired");
	targetDiv.classList.toggle("showAll");
	(targetDiv.classList.contains("showAll")) ? readMoreButton.firstChild.nodeValue = "Apply Here" : readMoreButton.firstChild.nodeValue = "Good Luck";
}

window.addEventListener("load", init, false);