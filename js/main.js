var lastScrollTop = 0;
var menuButton = document.getElementById('mainMenuButton');
var nav = document.getElementById('topNav');
var mainMenu = document.getElementById('mainMenu');

function isVisible(elem) {
	var y = elem.offsetTop;
	var height = elem.offsetHeight;

	while ( elem = elem.offsetParent ) {
		y += elem.offsetTop;
	}

	var maxHeight = y + height;
	var visible = ( y < ( window.pageYOffset + window.innerHeight ) ) && ( maxHeight >= window.pageYOffset );
	return  visible; 
}

function isHeaderVisible() {
	var header = document.getElementById('pageHeader');

	if (isVisible(header)){
		nav.classList.add('white');
	} else {
		nav.classList.remove('white');
	}
}

window.addEventListener('scroll', function() {
	var scrollTop = window.pageYOffset || document.documentElement.scrollTop;

	if (scrollTop < lastScrollTop) {
		nav.setAttribute('class','fixed');
	} else {
		nav.removeAttribute('class','fixed');
	}
	lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
}, false);

window.addEventListener('scroll', isHeaderVisible);

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
