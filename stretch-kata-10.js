const ingredientCheck = function(bakery, recipe) {
  let matchCheck = [];
  let recipeMatch = [];
  for (let i = 0; i < recipe.length; i++) {
    for (let j = 0; j < recipe[i].ingredients.length; j++) {
      matchCheck.push(recipe[i].ingredients[j]);
    }
  }
  for (let i = 0; i < bakery.length; i++) {
    for (let j = 0; j < matchCheck.length; j++) {
      if (bakery[i] === matchCheck[j]) {
        recipeMatch.push(bakery[i]);
        
      }
    }
  }
  return recipeMatch;
}

const chooseRecipe = function(bakeryA, bakeryB, recipes) {
  let output = "";
  let recipesA = [];
  let recipesB = [];
  const pass1 = ingredientCheck(bakeryA, recipes);
  const pass2 = ingredientCheck(bakeryB, recipes);
  
  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes[i].ingredients.length; j++) {
      for (let k = 0; k < pass1.length; k++){
        if (pass1[k] === recipes[i].ingredients[j]) {
          recipesA.push(recipes[i].name);
        }
      }
    }
  }
  
  for (let i = 0; i < recipes.length; i++) {
    for (let j = 0; j < recipes[i].ingredients.length; j++) {
      for (let k = 0; k < pass2.length; k++) {
        if (pass2[k] === recipes[i].ingredients[j]) {
          recipesB.push(recipes[i].name);
        }
      }
    }
  }

  for (let i = 0; i < recipesA.length; i++) {
    for (let j = 0; j < recipesB.length; j++) {
      if (recipesA[i] === recipesB[j]) {
        output += recipesA[i];
      }
    }
  }
  return output;
}

let bakeryA = ['saffron', 'eggs', 'tomato paste', 'coconut', 'custard'];
let bakeryB = ['milk', 'butter', 'cream cheese'];
let recipes = [
    {
        name: 'Coconut Sponge Cake',
        ingredients: ['coconut', 'cake base']
    },
    {
        name: 'Persian Cheesecake',
        ingredients: ['saffron', 'cream cheese']
    },
    {
        name: 'Custard Surprise',
        ingredients: ['custard', 'ground beef']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

bakeryA = ['potatoes', 'bay leaf', 'raisins'];
bakeryB = ['red bean', 'dijon mustard', 'apples'];
recipes = [
    {
        name: 'Potato Ganache',
        ingredients: ['potatoes', 'chocolate']
    },
    {
        name: 'Sweet Fish',
        ingredients: ['anchovies', 'honey']
    },
    {
        name: "Nima's Famous Dijon Raisins",
        ingredients: ['dijon mustard', 'raisins']
    }
];

console.log(chooseRecipe(bakeryA, bakeryB, recipes));

// should evaluate to Persian Cheesecake & Nima's Famous Dijon Raisins









