// Querry selectors
const buttonPrevious = document.querySelector('.slideshow__button-previous');
const buttonNext = document.querySelector('.slideshow__button-next');
const slides = document.querySelectorAll('.slideshow__slide');

// Eventlisteners
buttonPrevious.addEventListener('click', handleButtonPreviousClick);
buttonNext.addEventListener('click', handleButtonNextClick);

// Handlers
function handleButtonPreviousClick() {
	decreaseIndex();
	displaySlide();
}

function handleButtonNextClick() {
	increasIndex();
	displaySlide();
}


// Variables
let currentSLideIndex = 0;
displaySlide();

// Functions
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

