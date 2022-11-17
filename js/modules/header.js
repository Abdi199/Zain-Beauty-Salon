export default function Header() {
	// Data 
	let istoggleMenuOpen = false;
	
	// Selectors
	const menuButton = document.querySelector('.header__button-menu');
	const navigation = document.querySelector('.header__navigation');
	
	// Eventlisteners
	menuButton.addEventListener('click', handleMenuButtonClick)
	
	// Handlers
	function handleMenuButtonClick() {
		toggleMenu();
	}
	
	// Methods
	function toggleMenu() {
		if (istoggleMenuOpen === false) {
			navigation.classList.add('header__navigation--open');
			istoggleMenuOpen = true;
		} else {
			navigation.classList.remove ('header__navigation--open');
			istoggleMenuOpen = false;
		}
	}
}
