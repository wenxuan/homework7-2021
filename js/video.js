var video;

window.addEventListener("load", function() {
	video = document.querySelector("#player1");
	volume = document.querySelector("#volume");

});

document.querySelector("#play").addEventListener("click", 
function() {
	console.log("Play Video");
	video.play()
	document.querySelector("#volume").innerHTML=video.volume *100 +"%"
});

document.querySelector("#pause").addEventListener("click", 
function() {
	console.log("Pause Video");
	video.pause()
});

document.querySelector("#faster").addEventListener("click", 
function() {
	// video.playbackRate = video.playbackRate *.95
	video.playbackRate /=.95;
	console.log("New speed is "+ video.playbackRate );
});

document.querySelector("#slower").addEventListener("click", 
function() {
	video.playbackRate = video.playbackRate *.95;
	// video.playbackRate *=.95
	console.log("New speed is "+ video.playbackRate );
});

document.querySelector("#skip").addEventListener("click", 
function() {
	if (video.currentTime < video.duration - 15){
		console.log(video.currentTime);
		video.currentTime += 15
	}
	else {
		console.log("Go Back to Beginning")
		video.currentTime = 0}
});

document.querySelector("#slider").addEventListener("click", 
function() {
	console.log("Changing volume" )
	console.log(this.value)
	video.volume = this.value /100
	document.querySelector("#volume").innerHTML=video.volume *100 +"%"
});

document.querySelector("#vintage").addEventListener("click", 
function() {
	console.log("Changing CSS")
	video.classList.add("oldSchool");
});

document.querySelector("#orig").addEventListener("click", 
function() {
	console.log("Removing CSS")
	video.classList.remove("oldSchool");
});

document.querySelector("#mute").addEventListener("click", 
function() {
	if (video.muted == true) {
		video.muted = false
		console.log("Unmute the Video")
		this.innerHTML="Mute"
		
	}

	else {
		video.muted = true
		console.log("Mute the Video")
		this.innerHTML="Unmute"
	}
});

