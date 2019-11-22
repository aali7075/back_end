/*script practice file */
var mockApi = [
	recipe1 = {

	ingredients: [
	'butter',
 	'ground pepper',
  	'horseradish',
  	'parsley',
  	'potatoes',
  	'sour cream'],

	instructions: "'Bring a large pot of salted water to a boil."+
	"Add potatoes and cook until tender but still firm, about 15 minutes."+
	" Drain, and mash with 1 tablespoon butter and black pepper.  Stir in sour cream, horseradish and parsley."+
	"Whip potatoes and place in medium serving bowl. Melt remaining 1 tablespoon butter and pour over potatoes. Serve immediately.",

	image: 'https://spoonacular.com/recipeImages/294674-556x370.jpg',

	name:'Mashed Potatoes with Horseradish'
}//recipe1

,recipe2 = {

	ingredients: [
	'breadcrumbs',
  	'cauliflower',
  	'fresh parsley',
  	'fresh rosemary',
  	'golden raisins',
  	'olive oil',
  	'pine nuts',
  	'sea salt',
  	'sumac'],

	instructions: "Cut the florets off the stems and and then chop them into tiny florets."+
  "You can also chop up the stems into tiny pieces if you want. You should have about 6"+
   "cups of chopped cauliflower. In a large skillet heat 2 tablespoons of olive oil over"+
   "medium-high heat. Add the cauliflower, 1 teaspoon of salt, rosemary, and sumac. Sauté"+
    "until cauliflower is tender and starts to brown a bit, stirring as necessary, about 15 minutes."+
    "You can also add a bit of olive oil if the pan starts to get too dry or the cauliflower is starting to stick."+
    "Meanwhile, in a small skillet, toast the pinenuts over medium heat until golden brown. Set aside. Heat the "+
    "remaining 2 tablespoons of olive oil in the same pan. Once oil is shimmering, toss in the breadcrumbs and stir,"+
    "toasting the breadcrumbs. Season with a pinch of kosher salt and a few turns of freshly ground black pepper."+
    "Remove from the heat and toss in half of the chopped parsley. When cauliflower is done, remove from the heat and"+
    "season to taste with freshly ground black pepper and a pinch or so of salt if necessary. Toss in the toasted pine nuts,"+
    "the chopped raisins, and the remaining parsley. When ready to serve, sprinkle the top with the toasted breadcrumbs and some pecorino.",

	image: 'https://spoonacular.com/recipeImages/479101-556x370.jpg',

	name: "Pan Roasted Cauliflower From Food52"
}//recipe2

, recipe3 = {

	ingredients: [
	'butter',
  	'cooking oil',
  	'food coloring',
  	'water',
  	'white sugar'],

	instructions: "Place sugar and 3 tablespoons butter into a large heavy-bottomed pot over medium heat.\
	Pour the boiling water over, and stir to dissolve. Allow the mixture to come to a rolling boil. It\
	will boil up in the pot as if it is going to boil over, but it will settle down. Use some of the remaining butter\
	to butter a marble slab. When the sugar mixture reaches the soft crack stage of 270 to 280 degrees\
	F (132 to 140 degrees C), remove from the heat immediately. Pour onto the buttered marble slab. Add peppermint oil and food\
	coloring if desired. Butter your hands, and start pulling up pieces of the sugar blob. Keep  stretching so that it will not set\
	up. Continue to stretch until it has lost it's shine and is stringier. Pull the candy out into one long\
	 string, and cut into 1 inch segments using scissors. Store candies in an airtight tin.",

	image: 'https://spoonacular.com/recipeImages/294685-556x370.png',

	name: "Grandmama Pampas' Old-Fashion Pull Mints"
}//recipe3

, recipe4 = {

	ingredients: [
 	'butter',
  	'chicken broth',
  	'fresh cilantro',
  	'garlic powder',
  	'ground cumin',
  	'ground pepper',
  	'onion',
  	'onion powder',
  	'orange juice',
  	'salt',
  	'white rice'],

	instructions: "Melt the butter in a saucepan over medium-high heat. Stir in onion, and cook until tender.\
	 Mix in rice, and season with cumin, garlic powder, onion powder, pepper, cayenne pepper, and salt. Cook \
	 and stir until rice is golden brown. Pour in orange juice and broth, and bring to a boil. Reduce heat to\
	  low, cover and simmer 20 minutes. Remove cooked rice from heat, and gently mix\
	   in cilantro to serve.",

	image: 'https://spoonacular.com/recipeImages/343465-556x370.jpg',

	name: 'Orange Cilantro Rice'
}//recipe4
]





function api(){
	console.log(recipe4.instructions);
}









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

function hoverControl(overlay){
	var overlay =document.getElementById(overlay);



	var text = document.getElementById(overlay.id+"Text");

	var healthScore = overlay.getAttribute("health");

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

		text.innerHTML = text.getAttribute("name");

	

}

//used to remove color over image effect
function hoverControlStop(overlay){
	var overlay =document.getElementById(overlay);
	overlay.style.opacity=0;
	overlay.style.backgroundColor="blue";
}



function changeColor(id){
	document.getElementById(id).style.backgroundColor = "green";
	document.getElementById(id).style.opacity = .5;
	console.log(id);

}

