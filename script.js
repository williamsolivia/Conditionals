$(document).ready(function(){ 
	console.log("Ready!");

$("button").click(function() {
	// this function is triggered when the Generate madlib button is clicked

		// get the values from each input
		var fish = $("#fish").val();
		
		// determine what fish was inputted
		if (fish == "salmon") {
			var image_source = "http://produce.myriadprint.com/resources/image/18/7d/3.png";
			$("#error_message").html("");
		} 
		else if (fish == "tuna") {
			image_source = "http://pluspng.com/img-png/png-tuna-tuna-500.png";	
			$("#error_message").html("");
		}
		else if (fish == "goldfish") {
			image_source = "https://media.giphy.com/media/jOG4Q5z4xhOc8/source.gif";	
			$("#error_message").html("");
		}
			else if (fish == "flounder") {
			image_source = "https://wildlife.state.nh.us/fishing/images/flounder-summer.png";	
			$("#error_message").html("");
		}
			else if (fish == "hogfish") {
			image_source = "https://salinitynow.com/wp-content/uploads/Hogfish.png";	
			$("#error_message").html("");
		}
		else {
			$("#error_message").html("This in not salmon, tuna, goldfish, flounder, nor hogfish!");
			console.log("hiiii");
		}

			console.log("print something");

		// display the image in the img element 
		$("#fish_image").attr('src', image_source);

//salmon, tuna, goldfish, flounder, hogfish
	});

});