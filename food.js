"use strict";

var ingredients = [new Ingredient("milk", 4.99, "gal"), new Ingredient("ground beef", 122, "lb")];
var meals = [new Meal("Phil's Tasty Cheeseburger", ["cheese", "ground beef", "bun"], 1, "Phil's quality meal")];
var plan = [];

function addIngredient(name, cost, scale) {
  let found = 0;
  for(let i = 0; i < ingredients.length; i++) {
    if(ingredients[i].name == name.toLowerCase()) found++;
  }
  if(name && cost && scale && found === 0) ingredients.push(new Ingredient(name.toLowerCase(), cost, scale));
  else {
    if(found !== 0) alert("item " + name + " already added");
    else alert("Fill out all fields");
  }
}

function addMeal(name, ingred, bio, serves = "unknown") {
  bio = !bio ? "" : bio;
  let found = 0;
  let noexist = [];
  for(let i = 0; i < meals.length; i++) {
    if(meals[i].name == name.toLowerCase()) found++;
  }
  
  for(let j = 0; j < ingred.length; j++) {
    let isfound = false;
    for(let k = 0; k < ingredients.length; k++) {
      if(ingredients[k].name !== ingred[j]) {if(k == (ingredients.length - 1) && !isfound) noexist.push(ingred[j])}
      else isfound = true;

    }
  }
  
  if(ingredients && noexist.length === 0 && found === 0) return (new Meal(name, ingred.join(", "), serves, bio));
  else {
    if(found !== 0) alert("meal " + name + " already added");
    else if(noexist.length > 0) {
      alert("ingredient(s) " + noexist.join(", ") + " must be added first!");
    } else alert("Fill out all fields");
  }
}

function Ingredient(name, cost, scale) {
  this.name = name;
  this.cost = cost;
  this.scale = scale;
}

Ingredient.prototype = {
  constructor: Ingredient,
  
};

function Meal(name, ingre, serves, bio) {
  this.name = name;
  this.ingredients = ingre;
  this.serves = serves;
  this.bio = bio;
}

Meal.prototype = {
  constructor: Meal,
};
