function menuOn() {
document.getElementById("men").style.display="block";
}
function menuOff() {
	document.getElementById("men").style.display="none";
}



// When the user scrolls down 800px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
		//Get the button:
		mybutton = document.getElementById('myBtn');
	if (document.body.scrollTop > 800 || document.documentElement.scrollTop > 800) {
		mybutton.style.display = "block";
    } else {
        mybutton.style.display = "none";
    }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
//   document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}


tns({
	container: ".slider",
	// mode: gallery,
	// axis: vertical,
	gutter: 10,
	speed: 15000,
	autoplayTimeout: 15000,
	items: 1,
	autoplayHoverPause: true,
	autoplayButtonOutput: false,
	autoHeight: true,
	mouseDrag: true,
	slideBy: "page",
	autoplay: true,
	controls: false,
	nav: false,
	gutter: 5,
	edgePadding: 400,
	fixedWidth: 265,
	autoWidth: true,
	items: 1,
	responsive: {
		640: {
			edgePadding: 20,
			gutter: 20,
			items: 2,
			fixedWidth: 265,
		},
		700: {
			gutter: 30,
			fixedWidth: 265,
		},
		900: {
			items: 3,
			fixedWidth: 265,
		},
	},

	// disable: true,
});
