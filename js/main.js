var lastScrollTop = 0;
var menuButton = document.getElementById('mainMenuButton');
var nav = document.getElementById('topNav');
var mainMenu = document.getElementById('mainMenu');

window.addEventListener('scroll', function() {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	if (scrollTop < lastScrollTop) {
		nav.setAttribute('class','fixed');
	} else {
		nav.removeAttribute('class','fixed');
	}
	lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

menuButton.addEventListener('click', function() {
	if (mainMenu.classList.contains('open')) {
		mainMenu.removeAttribute('class', 'open');
		menuButton.innerText = "menu";
		menuButton.setAttribute('aria-label', 'Open main menu');
	} else {
		mainMenu.setAttribute('class', 'open');
		menuButton.innerText = "close";
		menuButton.setAttribute('aria-label', 'Close main menu');
	}
});
