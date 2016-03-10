// JavaScript Document

var bigCarImage, thumbnails, prevClicked, arrow;

var heroShot = ["images/eyeBallCats8.jpg", "images/powerOfLove2.jpg", "images/plutonium2.jpg", "images/caseOfArms2.jpg", "images/shinyPic2.jpg", "images/blownUp2.jpg", "images/saveTheClock2.jpg", "images/styleOrgy8.jpg", "images/pineWoods2.jpg", "images/jeez2.jpg", "images/todayDate2.jpg", "images/holyShit2.jpg", "images/bullyOnTheGround2.jpg", "images/ehmanuel2.jpg", "images/sparky2.jpg", "images/boobs2.jpg", "images/shredding12.jpg", "images/shredding22.jpg", "images/timeWatch2.jpg", "images/hangingOn1.jpg", "images/hangingOn22.jpg", "images/boom2.jpg", "images/shocking2.jpg" ,"images/lightingmarks2.jpg"];

function init (){
	console.log("init fired");
	
	//arrow = document.querySelector("#arrow");
	//TweenMax.to(arrow, 1, {x:-1090 , y: 40});
	
	bigCarImage = document.querySelector("#carImage");
	thumbnails = document.querySelectorAll("#thumbs li");
	prevClicked = document.querySelector("li:first-child");
	prevClicked.style.opacity = 1;
	for (i=0; i<thumbnails.length; i++) {
		thumbnails[i].addEventListener("click", switchImages, true);
	}

}

function switchImages(e) {
	
	if (prevClicked) {
		prevClicked.style.opacity = null;
	}
	
	this.style.opacity = 1;
	
	bigCarImage.src = heroShot[this.id];
	
	prevClicked = this;
}

window.addEventListener("click", init, false);
