// JavaScript Document

var currentFile = "";
			
function playAudio() {
	// Check for audio element support.
	if (window.HTMLAudioElement) {
		try {
			var oAudio = document.getElementById('myaudio');
			var btn = document.getElementById('play'); 
			var audioURL = document.getElementById('audiofile'); 

			if (oAudio.play){
				btn = false;
			}

			//Skip loading if current file hasn't changed.
			if (audioURL.value !== currentFile) {
				oAudio.src = audioURL.value;
				currentFile = audioURL.value;  
				oAudio.loop = true;                        
			}

			// Tests the paused attribute and set state. 
			if (oAudio.paused) {
				oAudio.play();
			}
		}
		catch (e) {
			// Fail silently but show in F12 developer tools console
			 if(window.console && console.error("Error:" + e));
		}
	}
}


// Restart the audio file to the beginning.

function restartAudio() {
	 // Check for audio element support.
	if (window.HTMLAudioElement) {
		try {
			var oAudio = document.getElementById('myaudio');
			oAudio.pause();
			oAudio.currentTime = 0;
		}
		catch (e) {
			// Fail silently but show in F12 developer tools console
			 if(window.console && console.error("Error:" + e));
	   }
	}
}