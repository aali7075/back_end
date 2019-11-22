function getSearch(){
	var input = document.getElementById("searchBar").value;
	console.log(input);
	if(input=="hello"){
		document.getElementById("bar").style.backgroundColor= "red";
	}
	else{
		document.getElementById("bar").style.backgroundColor= "cyan";
	}

	return input;
}

function recipeDisplay(){
	document.getElementById("recipe-1-list").style.backgroundColor="cyan";
}

function search(){
	var input = document.getElementById("searchBar").value;
}

//changes color over image when mouse moves over it
//color changes based off healthScore
function hoverControl(overlay){

	//get the overlay of the image mouse is hovering over
	var overlay =document.getElementById(overlay);

	var textDisplay = document.getElementById(overlay.id+"Text");

	var healthScore = overlay.getAttribute("health");

	var recipeName = textDisplay.getAttribute("name");


	//changes color of overlay based on health value
	if (healthScore>75){
		overlay.style.backgroundColor="green";
		overlay.style.opacity=0.75;

	}
	else if(healthScore<25){
		overlay.style.backgroundColor="red";
		overlay.style.opacity=0.75;
	}
	else{
		overlay.style.backgroundColor="yellow";
		overlay.style.opacity=0.5;
	}

		textDisplay.innerHTML = recipeName;

	

}

//used to remove color over image effect
function hoverControlStop(overlay){
	var overlay =document.getElementById(overlay);
	overlay.style.opacity=0;
}



function changeColor(id){
	document.getElementById(id).style.backgroundColor = "green";
	document.getElementById(id).style.opacity = .5;

}

