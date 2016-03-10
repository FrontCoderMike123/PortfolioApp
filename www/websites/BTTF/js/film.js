var listItems, bannerImages, theHeading, arrow;

var mottoArray = [];
mottoArray[0] = "In 1985 Stephen Spielberg film the iconic movie Back To The Future. A young Michael J. Fox is accidentally sent back in time 30 years, thanks to Dr. Emmetts time travelling DeLorean. He is now faced with keeping his own existence.";
mottoArray[1] = "Michael J. Fox visits 2015, Marty McFly must now repeat his visit to 1955 to prevent disastrous changes to 1985... without interfering with his first trip. This seat gripping sequel came out in 1989.";
mottoArray[2] = "The third movie came out in 1990, based in the year 1885. Dr. Emmett Brown is about to be killed, he desperately needs Marty' help before it's to late.";

console.log(mottoArray);


function init() {

	arrow = document.querySelector("#arrow");
	TweenMax.to(arrow, 1, {x:-1185 , y: 20});


	theHeading = document.querySelector(".filmText");
	bannerImages = document.querySelector("#houseImages");
	listItems = document.querySelectorAll("#navList li");
	console.log(listItems);
	
	for (i=0; i<listItems.length; i++) {
		console.log(listItems[i]);
		listItems[i].addEventListener("click", moveBanner, true)
	}
}

function moveBanner(e) {
	var offSet = 400;
	TweenMax.to(bannerImages, .5, {right:offSet * this.id});
	theHeading.firstChild.nodeValue = mottoArray[this.id];
}

window.addEventListener("load", init, false);