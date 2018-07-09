window.onload = function begin() {
	let sliderImages = document.querySelectorAll(".testImage"),
		arrowLeft = document.querySelector("#arrow-left"),
		arrowRight = document.querySelector("#arrow-right"),
		actualMainImage = document
			.querySelector("#actualMainImage")
			.getAttribute("src");
	// Represents what image we are on. 0 by default.
	current = 0;

	// 	**********************************************

	// Clears all images.
	function reset() {
		for (let i = 0; i < sliderImages.length; i++) {
			sliderImages[i].style.display = "none";
		}
	}

	// 	**********************************************

	// Initializer
	function startSlide() {
		reset();
		sliderImages[0].style.display = "block";
	}

	// 	**********************************************

	// Show Prev
	function slideLeft() {
		reset();
		sliderImages[current - 1].style.display = "block";
		current--;
	}

	// left Arrow Click
	arrowLeft.addEventListener("click", function() {
		if (current === 0) {
			current = sliderImages.length;
		}
		slideLeft();
	});
	// 	**********************************************

	// 	**********************************************
	// Show Next
	function slideRight() {
		reset();
		sliderImages[current + 1].style.display = "block";
		current++;
	}

	// left Arrow Click
	arrowRight.addEventListener("click", function() {
		if (current === sliderImages.length - 1) {
			current = -1;
		}
		slideRight();
	});
	// 	**********************************************

	startSlide();
};

// *****************************************************
// Initial Image Gallery

// Example of ES6 Destructuring. This can be used instead of line 41 and 42. Saves 1 line of code.
var [current, imgs] = [
	document.querySelector("#current"),
	document.querySelectorAll(".imgs img")
];

// const current = document.querySelector('#current');
// const imgs = document.querySelectorAll('.imgs img');

imgs.forEach(img =>
	img.addEventListener("click", e => (current.src = e.target.src))
);

// *****************************************************
