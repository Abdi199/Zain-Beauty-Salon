// Querry selectors
const buttonPrevious = document.querySelector('.slideshow__button-previous');
const buttonNext = document.querySelector('.slideshow__button-next');
const slides = document.querySelectorAll('.slideshow__slide');
const menuButton = document.querySelector('.header__button-menu');
const navigation = document.querySelector('.header__navigation');
const dots = document.querySelectorAll('.slideshow__dot')


// Eventlisteners
buttonPrevious.addEventListener('click', handleButtonPreviousClick);
buttonNext.addEventListener('click', handleButtonNextClick);

for(let index = 0; index < slides.length; index += 1) {
	dots[index].addEventListener('click', event => {
		handleDotsClick(index);
	});
}



// Handlers
function handleButtonPreviousClick() {
	decreaseIndex();
	displaySlide();
}

function handleDotsClick(index) {
currentSLideIndex = index;
displaySlide();
}

function handleButtonNextClick() {
	increasIndex();
	displaySlide();
}


// Variables
let currentSLideIndex = 0;
let istoggleMenuOpen = false;
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

 menuButton.addEventListener('click', handleMenuButton)

 

function handleMenuButton() {
	toggleMenu();
}



function toggleMenu() {
	if (istoggleMenuOpen === false) {
		navigation.classList.add('header__navigation--open');
		istoggleMenuOpen = true;
	} else {
		navigation.classList.remove ('header__navigation--open');
		istoggleMenuOpen = false;
	}
}
