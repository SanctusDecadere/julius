
// All Images In Gallery
var	testImages = document.querySelectorAll('.testImage').getAttribute("src");

// Previous and Next Image Buttons
var prevButton = document.querySelector('#prev-button');
var	nextButton = document.querySelector('#next-button');

// Array of Images in Gallery Via Index.
var	currently = testImages[i];

var i;

var actualMainImage = document.querySelector('.actualMainImage');

// *****************************************************

// Clears all images
function reset() {
	for( i = 0; i < testImages.length; i++) {
			// testImages[i].style.display = 'none';
	}
}

// *****************************************************
// Initializes the slider
function startSlide() {
	reset();
	testImages[0].style.display = 'block';
}

// *****************************************************
// Show Prev
function prevImage() {
	reset();
	actualMainImage.src = currently;

	testImages[currently - 1].style.display = 'block';
	currently--;
}


// Left Arrow Click
window.onload = function() {
	var prevButton = document.querySelector('#prev-button');
	for( let i = 0; i < testImages.length; i++) {
		prevButton[i].addEventListener('click', function() {
				if(currently === 0) {
					currently = testImages.length;
				}
	prevImage();
		});
	}
};

// prevButton.addEventListener('click', function() {
// 	if(currently === 0) {
// 		currently = testImages.length;
// 	}
// 	prevImage();
// });

// *****************************************************

// Show Next
function nextImage() {
	reset();
	actualMainImage.src = currently;

	testImages[currently + 1].style.display = 'block';
	currently++;
}

// Right Arrow Click
window.onload = function() {
	var nextButton = document.querySelector('#next-button');
	for( let i = 0; i < testImages.length; i++) {
		nextButton[i].addEventListener('click', function() {
				if(currently === testImages.length -1) {
					currently = -1
				}
	nextImage();
		});
	}
};


// Right Arrow Click
// nextButton.addEventListener('click', function() {
// 	if(currently === testImages.length - 1) {
// 		currently = -1
// 	}
// 	nextImage();
// });

// *****************************************************

// startSlide();

// *****************************************************
// Initial Image Gallery

	// Example of ES6 Destructuring. This can be used instead of line 41 and 42. Saves 1 line of code. 
	var [current, imgs] = [document.querySelector('#current'), document.querySelectorAll('.imgs img') ];

	// const current = document.querySelector('#current');
	// const imgs = document.querySelectorAll('.imgs img');

	imgs.forEach(img => img.addEventListener('click', e => (current.src = e.target.src)));

// *****************************************************
