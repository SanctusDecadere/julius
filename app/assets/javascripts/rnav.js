function myFunction() {
	
    var x = document.getElementById("myNavitem");
    if (x.className === "nav-item") {
        x.className += " responsive";
    } else {
        x.className = "nav-item";
    }


}

