
// *****************************************************
// Initial Image Gallery
// Example of ES6 Destructuring. This can be used instead of line 41 and 42. Saves 1 line of code.
var [current, imgs] = [
	document.querySelector("#current"),
	document.querySelectorAll(".imgs img")
];


imgs.forEach(img =>
	img.addEventListener("click", e => (current.src = e.target.src))
);
// *****************************************************
