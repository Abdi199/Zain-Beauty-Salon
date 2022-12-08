export default function AboutUs() {
	// Data
	let isplaying = false;

	// Creat new audio and select the source for it.
	const audio = new Audio();
	audio.src = '/assets/audio/wedding.mp3';
	
	// Querryselectors
	const playButton = document.querySelector('.about-us__play-button');

	// Eventlisteners
	playButton.addEventListener('click', handlePlayButtonClick);

	// Handlers
	function handlePlayButtonClick() {
		toggleIsPlaying();
		renderAudio();
		renderHTML();
	}

	// Methods

	/**
	 * Toggels isPlaying between true and false
	 */
	function toggleIsPlaying() {
		isplaying = !isplaying;
	}

	/**
	 * This plays or pauses the music based on the state of isPlaying
	 * @Example isPlaying = false // audio.pause()
	 */
	function renderAudio() {
		if (isplaying) {
			audio.play();
		} else {
			audio.pause();
		}
	}

	/**
	 * This changes the text of the Play/Pause button based on the state of isPlaying
	 */
	function renderHTML() {
		if (isplaying) {
			playButton.innerText = 'Pause Music'
		} else {
			playButton.innerText = 'Play Music'
		}
	}
}