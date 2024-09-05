document.addEventListener("DOMContentLoaded", function() {

    const colorbox = document.getElementById("color-box");

    colorbox.addEventListener("click", function() {
        colorbox.style.height = "30rem"; 
		colorbox.style.width = "30rem";
    });

	colorbox.addEventListener("dblclick", function() {
        colorbox.style.height = "15rem"; 
		colorbox.style.width = "15rem";
    });

	colorbox.addEventListener("mouseover", 
		
		function() {
			let letters = '0123456789ABCDEF';
			let color = '#';
			for (let i = 0; i < 6; i++) {
			  color += letters[Math.floor(Math.random() * 16)];
			}
			console.log(color)
			colorbox.style.background = color;
			return color;
		  });
	  
});





