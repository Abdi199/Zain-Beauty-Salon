export default function Header() {
	// Data 
	// This represents the model/state of header menu, which is what decides how our HTML is rendered.
	let isMenuOpen = false;
	
	// Querryselectors
	// This selects elements in HTML and is how jacascript interacts with it.
	const menuButton = document.querySelector('.header__button-menu');
	const navigation = document.querySelector('.header__navigation');
	const navigationButtons = document.querySelectorAll('.header__navigation-button');
	
	// Eventlisteners
	// Added an eventlistener on menuButton listening for a click. When that happens it runs the handler function.
	menuButton.addEventListener('click', handleMenuButtonClick);

	// Added an eventlistener on each navigationButton listening for a click, that's why I use a loop.
	for(let index = 0; index < navigationButtons.length; index += 1) {
		navigationButtons[index].addEventListener('click', handleNavigationButtonClick);
	}
	
	// Handlers
	// Handlers is where I decide which methods to run and is a great way to have an overview of what happens.
	function handleMenuButtonClick() {
		toggleMenu();
		renderHTML();
	}

	function handleNavigationButtonClick() {
		toggleMenu();
		renderHTML();
	}
	
	// Methods
	// Methods is functions which does ONE spesific thing and you don't want any sideeffects which is doing other things then what the function name is saying.

	/**
	* This function changes isMenuOpen to the opposite.
	* @example isMenuOpen = false // set is isMenuOpen = true.
	**/
	function toggleMenu() {
		isMenuOpen = !isMenuOpen;
	}
   
	/**
	* This function changes the html based on the state of isMenuOpen.
	**/
	function renderHTML() {
		if (isMenuOpen === true) {
			navigation.classList.add('header__navigation--open');
		} else {
			navigation.classList.remove ('header__navigation--open');
		}
	}
}
