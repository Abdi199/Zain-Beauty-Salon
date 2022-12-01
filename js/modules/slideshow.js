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
		giveDotActiveClass();
	}

	function handleDotsClick(index) {
		currentSLideIndex = index;
		giveDotActiveClass();
	}
		
	function handleButtonNextClick() {
		increasIndex();
		displaySlide();
		giveDotActiveClass();
	}

	// Methods
	/**
	* this function increases currentSlideIndex, as long as currentSlideIndex is not at the end of slides: 
	* Is it at the end of slides, it will set currentSlideIndex to 0.
	**/
	function increasIndex() {
		if (currentSLideIndex < slides.length - 1) {
			currentSLideIndex = currentSLideIndex + 1;
		} else {
			currentSLideIndex = 0;
		}
	}

	/**
	* This function decreases currentSlideIndex, as long as the number is over 0.
	* Is it 0 it will set the index to be at the end of slides array.
	**/
	function decreaseIndex() {
		if (currentSLideIndex > 0) {
			currentSLideIndex = currentSLideIndex - 1;
		} else {
			currentSLideIndex = slides.length - 1;
		}
	}

	/**
	* this function removes visible class from all slides and ads it to slide with currentSLideIndex.
	**/
	function displaySlide() {
		for (let index = 0; index < slides.length; index += 1) {
			slides[index].classList.remove('slideshow__slide--visible');
		}

		slides[currentSLideIndex].classList.add('slideshow__slide--visible');
	}


	/**
	* this function removes active class from all dots and ads it to dot with currentSLideIndex.
	**/
	function giveDotActiveClass() {
		for (let index = 0; index < dots.length; index += 1) {
			dots[index].classList.remove('slideshow__dot--active');
		}

		dots[currentSLideIndex].classList.add('slideshow__dot--active');
	}

	function automaticSlideshow() {
		increasIndex();
		displaySlide();
		giveDotActiveClass();
	}

	// Called methods
	setInterval(automaticSlideshow, 5 * 1000);
	displaySlide();
	giveDotActiveClass();
}
