"use strict"

let form = document.querySelector('formRecipes');


// Se guardan los datos que iran dentro del local storage
localStorage.setItem("id", "title", "image", "readyInMinutes", "steps", "vegan",
    "vegetarian", "healthy", "summer", "winter", "fall", "spring",
    // "category": [
    //     "entrant",
    //     "lunch",
    //     "main dish",
    //     "dinner",
    //     "dessert"
    // ],
    // "extendedIngredients": [
    //   {
    //     "aisle",
    //         "amount",
    //         "id",
    //         "measures": {
    //             "metric": {
    //                 "amount",
    //                 "unitLong",
    //                 "unitShort"
    //             },
    //   }
    // ]
    );



//objeto local Storage, clave que va a tener y valor. Se guarda.
localStorage.setItem("receta", JSON.stringify(title));


//Se recuperan con localStorage.getItem("title");
document.querySelector('#recipes').innerHTML = localStorage.getItem("title");


// Guardar objetos desde aqui

let recipe = {
  id: "0001",
  title: "Salmorejo",
  image: "src/salmorejo.jpg",
  readyInMinutes: "30",
  steps: "Blabla",
  vegan: true,
  vegetarian: true,
  healthy: true,
  summer: true,
  winter: false,
  fall: false,
  spring: true,
  category: [
        entrant,
        lunch,
    ],
}

let titleRecipe = JSON.parse(localStorage.getItem("receta"));

console.log(titleRecipe);
document.querySelector('')

form.addEventListener('submit', function(){
  let title = document.querySelector('#addRecipe').value;
  if(title.lenght >=1){
    localStorage.setItem(title, title);
  }

});

let ul = document.querySelector('#recipesList');

for (let i in localStorage){
  if(typeof localStorage[i] == 'string'){
  let li = document.createElement('li');
  li.append(localStorage[i]);
  ul.append(li);
  }
}
