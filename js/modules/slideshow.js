export default function Slideshow() {
	// Data
	let currentSLideIndex = 0;

	// Selectors
	const buttonPrevious = document.querySelector('.slideshow__button-previous');
	const buttonNext = document.querySelector('.slideshow__button-next');
	const slides = document.querySelectorAll('.slideshow__slide');
	const dots = document.querySelectorAll('.slideshow__dot')

	// Eventlisteners
	buttonPrevious.addEventListener('click', handleButtonPreviousClick);
	buttonNext.addEventListener('click', handleButtonNextClick);

	for(let index = 0; index < slides.length; index += 1) {
		dots[index].addEventListener('click', event => {
			handleDotsClick(index);
			displaySlide();
		});
	}

	// Handlers
	function handleButtonPreviousClick() {
		decreaseIndex();
		displaySlide();
	}

	function handleDotsClick(index) {
		currentSLideIndex = index;
	}
		
	function handleButtonNextClick() {
		increasIndex();
		displaySlide();
	}

	// Methods
	function increasIndex() {
		if (currentSLideIndex < slides.length - 1) {
			currentSLideIndex = currentSLideIndex + 1;
		} else {
			currentSLideIndex = 0;
		}
	}


	function decreaseIndex() {
		if (currentSLideIndex > 0) {
			currentSLideIndex = currentSLideIndex - 1;
		} else {
			currentSLideIndex = slides.length - 1;
		}
	}

	function displaySlide() {
		for (let index = 0; index < slides.length; index += 1) {
			slides[index].classList.remove('slideshow__slide--visible');
		}

		slides[currentSLideIndex].classList.add('slideshow__slide--visible');
	}

	// Called methods
	displaySlide();
}
