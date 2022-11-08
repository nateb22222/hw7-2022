//function definition
/*
function loading(){
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	video.load();
}
*/

// function call
// window.addEventListener("load", loading());
// only need to use this once^^ , so we can define it within the call.
var video;

window.addEventListener("load", function() {
	console.log("Good job opening the window");
	video = document.querySelector('#player1');
	video.autoplay = false;
	video.loop = false;
	video.load();
})


document.querySelector("#play").addEventListener("click", function(){
	console.log("play video");
	video.play();
	// cannot do .value = .value, have to change html using innerhtml
	var volume = document.getElementById("slider").value;
	document.getElementById("volume").innerHTML = volume + "%";
})

document.querySelector("#pause").addEventListener("click", function(){
	console.log("pause video");
	video.pause();
})

document.querySelector("#slower").addEventListener("click", function(){
	video.playbackRate = video.playbackRate - 0.1;
	console.log("Speed is " + video.playbackRate);
})

document.querySelector("#faster").addEventListener("click", function(){
	console.log("Speed up video!");
	video.playbackRate = video.playbackRate + 0.1;
	console.log("Speed is " + video.playbackRate);
})

document.querySelector("#skip").addEventListener("click", function(){
	console.log("SKIP");
	if (video.currentTime + 10 > video.duration) {
		video.currentTime = 0;
	}

	else {
		video.currentTime = video.currentTime + 10;
	}
	console.log("Current video time is " + video.currentTime)
})

document.querySelector("#mute").addEventListener("click", function(){
	console.log("MUTE");
	if (video.muted) {
		video.muted = false;
		document.querySelector("#mute").innerHTML = "Mute";console.log("Unmute");
	}
	else {
		video.muted = true;
		document.querySelector("#mute").innerHTML = "Unmute";
		console.log("Mute");
	}
})

document.querySelector("#slider").addEventListener("click", function(){
	console.log("Volume Slider");
	console.log("Current Volume: " + video.volume);
	video = document.querySelector("#player1");
	video.volume = this.value / 100;
	document.querySelector("#volume").innerHTML = video.volume * 100 + "%";
});

document.querySelector("#vintage").addEventListener("click", function(){
	console.log("STYLED");
	document.querySelector("#player1").classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", function(){
	console.log("STYLED");
	document.querySelector("#player1").classList.remove("oldSchool");
});