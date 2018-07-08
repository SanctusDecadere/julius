// 	// First we delcare the variables. In strict mode we would be required to declare them. If strict mode is off then we can get away with not declaring them. 

// 	var i = 0; // Start point

// 	var images = [];

// 	var time = 2000; // The time in milliseconds between each image switch. Set to 3 seconds. 


// 	// Image List. These will be Array values with image paths.

// 	images[0] = "https://lh3.googleusercontent.com/CPEe4CS9Qvbyn8hd4UnCD0IxLSJglu5TE7kMYSr8YZt-D9CkzRWkNM3Y02ZaEoUxE0nojAU3yVzv5RQKfLslhlJk4WWQpyLK81I0LimwTk3JP2M20betnp27kyqdSrYcf2lqlO2Guw=w2400";

// 	images[1] = "https://lh3.googleusercontent.com/agJNVyc_WO3aAra3qS3XpuHm1T2pmhZDtEFZQ_VW4mvktv_EUFR_VWrQHuidPws6dMtY3zFe_rufSuQK5tw1rlgBfEgFFo8RF7AD8z_uekreAbl5UK_y6Ry2F03WM3Y9suE726bANg";
	
// 	images[2] = '/assets/a.jpg';

// 	// Change Image
// 		function changeImg() {
// // We grab the img tag via the name="slide" attribute we placed in it. Then we grab the src so we can set it. We didnt place a src attribute in the img tag yet. 

// 			document.slide.src = images[i];

// 			if(i < images.length - 1) {
// 				i++;
// 			} else {
// 				i = 0;
// 			}

// 			// setTimeout("changeImg()", time);
			
// 		}

// window.onload = changeImg;







// // Second gallery

// // 	var j = 0; 

// // 	var images1 = [];

// // 	var time1 = 2000; 


// // 	images1[0] = "/assets/c.jpg"

// // 	images1[1] = "/assets/d.jpg"
	
// // 	images1[2] = "/assets/e.jpg"

	
// // 		function changeImg1() {

// // 			document.slide1.src = images1[j];

// // 			if(j < images1.length - 1) {
// // 				j++;
// // 			} else {
// // 				j = 0;
// // 			}

// // 			setTimeout("changeImg1()", time1);
			
// // 		}

// // window.onload = changeImg1;







