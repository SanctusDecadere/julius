

	function myFunction() {
		
	    var x = document.getElementById("myNavitem");
	    if (x.className === "navbar-links") {
	        x.className += " responsive";
	        // x.slideDown(3000);
	    } else {
	        x.className = "navbar-links";
	    }
	   

	}



// $('document').ready(function() {
// 	console.log('work bitch');

// 	document.querySelector('navbar-links').slideDown(3000);
// })