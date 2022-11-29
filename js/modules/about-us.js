export default function AboutUs() {
	let isplaying = false;
	const audio = new Audio();
	audio.src = '/assets/audio/wedding.mp3'
	
	const playButton = document.querySelector('.about-us__play-button')
	playButton.addEventListener('click', handlePlayButtonClick);

	function handlePlayButtonClick() {
		toggleIsPlaying();
		togglePlay();
		renderHTML();
	}

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