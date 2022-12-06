export default function AboutUs() {
	// Data
	let isplaying = false;

	// Creat new audio and select the source for it.
	const audio = new Audio();
	audio.src = '/assets/audio/wedding.mp3'
	
	// Querryselectors
	const playButton = document.querySelector('.about-us__play-button')

	// Eventlisteners
	playButton.addEventListener('click', handlePlayButtonClick);

	// Handlers
	function handlePlayButtonClick() {
		toggleIsPlaying();
		togglePlay();
		renderHTML();
	}

	// Methods
	function toggleIsPlaying() {
		isplaying = !isplaying;
	}

	function togglePlay() {
		if (isplaying) {
			audio.play();
		} else {
			audio.pause();
		}
	}

	function renderHTML() {
		if (isplaying) {
			playButton.innerText = 'Pause Music'
		} else {
			playButton.innerText = 'Play Music'
		}
	}
}