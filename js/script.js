function menuOn() {
document.getElementById("men").style.display="block";
}
function menuOff() {
	document.getElementById("men").style.display="none";
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


// Back to top button
var btn = $('#to-top');
// $('#to-top').addClass('show');

// $(window).scroll(function() {
// 	  if ($(window).scrollTop() > 300) {
	    // btn.addClass('show');
	//   } else {
	//     btn.removeClass('show');
	//   }
	// });

	btn.on('click', function(e) {
	  e.preventDefault();
	  $('html, body').animate({scrollTop:0}, '300');
	});
