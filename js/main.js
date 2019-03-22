var lastScrollTop = 0;
var menuButton = document.getElementById('mainMenuButton');
var nav = document.getElementById('topNav');
var mainMenu = document.getElementById('mainMenu');

// Global check if an element visible to the user
function isVisible(elem) {
	var y = elem.offsetTop;
	var height = elem.offsetHeight;

	while (elem = elem.offsetParent) {
		y += elem.offsetTop;
	}

	var maxHeight = y + height;
	var visible = (y < (window.pageYOffset + window.innerHeight)) && (maxHeight >= window.pageYOffset);
	return visible;
}

// Is header visible to the user
function isHeaderVisible() {
	var header = document.getElementById('pageHeader');

	if (isVisible(header)) {
		nav.classList.remove('dark-bg');
	} else {
		nav.classList.add('dark-bg');
	}
}

window.onload = function () {
	isHeaderVisible();
};
window.addEventListener('scroll', isHeaderVisible);

// Scroll nav position effect
(function (document, window, index) {
	'use strict';

	var elSelector = '.header',
		element = document.querySelector(elSelector);

	if (!element) return true;

	var elHeight = 0,
		elTop = 0,
		dHeight = 0,
		wHeight = 0,
		wScrollCurrent = 0,
		wScrollBefore = 0,
		wScrollDiff = 0;

	window.addEventListener('scroll', function () {
		elHeight = element.offsetHeight;
		dHeight = document.body.offsetHeight;
		wHeight = window.innerHeight;
		wScrollCurrent = window.pageYOffset;
		wScrollDiff = wScrollBefore - wScrollCurrent;
		elTop = parseInt(window.getComputedStyle(element).getPropertyValue('top')) + wScrollDiff;

		if (wScrollCurrent <= 0)
			element.style.top = '0px';

		else if (wScrollDiff > 0)
			element.style.top = (elTop > 0 ? 0 : elTop) + 'px';

		else if (wScrollDiff < 0) {
			if (wScrollCurrent + wHeight >= dHeight - elHeight)
				element.style.top = ((elTop = wScrollCurrent + wHeight - dHeight) < 0 ? elTop : 0) + 'px';

			else
				element.style.top = (Math.abs(elTop) > elHeight ? -elHeight : elTop) + 'px';
		}

		wScrollBefore = wScrollCurrent;
	});

}(document, window, 0));

// When mobile/tablet menu button is pressed
menuButton.addEventListener('click', function () {
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