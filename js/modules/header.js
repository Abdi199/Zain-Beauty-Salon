export default function Header() {
	// Data 
	let isMenuOpen = false;
	
	// Selectors
	const menuButton = document.querySelector('.header__button-menu');
	const navigation = document.querySelector('.header__navigation');
	const navigationButton = document.querySelectorAll('.header__navigation-button')
	
	// Eventlisteners
	menuButton.addEventListener('click', handleMenuButtonClick)

	for(let index = 0; index < navigationButton.length; index += 1) {
		navigationButton[index].addEventListener('click', handleNavigationButtonClick)
	}
	
	// Handlers
	function handleMenuButtonClick() {
		toggleMenu();
		renderHTML();
	}

	function handleNavigationButtonClick() {
		toggleMenu();
		renderHTML();
	}
	
	// Methods
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}

	function renderHTML() {
		if (isMenuOpen === true) {
			navigation.classList.add('header__navigation--open');
		} else {
			navigation.classList.remove ('header__navigation--open');
		}
	}
}
