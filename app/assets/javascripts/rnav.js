function myFunction() {
	
    var x = document.getElementById("myNavitem");
    if (x.className === "navbar-links") {
        x.className += " responsive";
    } else {
        x.className = "navbar-links";
    }


}

