"use strict"

let form = document.querySelector('formRecipes');


// Se guardan los datos que iran dentro del local storage


// localStorage.setItem("id", "title", "image", "readyInMinutes", "steps", "vegan",
//     "vegetarian", "healthy", "summer", "winter", "fall", "spring",
//      "category": [
//          "entrant",
//          "lunch",
//          "main dish",
//          "dinner",
//          "dessert",
//          "smoothie",
//          "soup",
//          "salad",
//          "fast vegan food",
//      ],
//      "ingredients": [
//        {
//         "quantity":"",
//         "name": ""
//       },
//      ]
//     );



//objeto local Storage, clave que va a tener y valor. Se guarda.
localStorage.setItem("receta", JSON.stringify(title));


//Se recuperan con localStorage.getItem("title");
document.querySelector('#recipes').innerHTML = localStorage.getItem("title");


// Guardar objetos desde aqui
//let recipes = plantilla

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


//Plantilla para las recetas
// let recipes = [
//   {
//       id: "xxxx",
//       title: "Manzanas caramelizadas",
//       image: "",
//       readyInMinutes: "20",
//       steps: "1 Precaliente el horno a 220°C. Forre la bandeja con papel vegetal. Pique bien los orejones y méz- clelos con la mantequilla, el mazapán y la avellana. 2 Pele las manzanas y frótelas enseguida con el zumo de limón. Quíteles el corazón con un des- corazonador. Agrande un poco los agujeros y relléne- los con la mezcla de mazapán y avellana. Mezcle el azúcar moreno con la canela y reboce las manzanas con esta mezcla. 3 Ponga las manzanas en la bandeja y hornéelas unos 20 minutos, hasta que estén tiernas y ca- ramelizadas. Monte la nata con el azúcar avainillado y repártala en cuencos de postre. Ponga las manzanas encima y sírvalas enseguida.",
//       vegan: true,
//       vegetarian: true,
//       healthy: true,
//       summer: false,
//       winter: true,
//       fall: true,
//       spring: false,
//       category: [
//         "desserts"
//         ],
//         ingredients : [
//           {
//             quantity:"50 gr",
//             name: "Orejones de albaricoque"
//           },
//           {
//           quantity:"50 gr",
//           name: "mantequilla vegana"
//           },
//           {
//             quantity:"50 gr",
//             name: "mazapan"
//           },
//           {
//             quantity:"50 gr",
//             name: "Avellana molida"
//           },
//           {
//             quantity:"4 unidades",
//             name: "Manzanas ácidas"
//           },
//           {
//             quantity:"1 cucharada",
//             name: "Zumo de limón"
//           },
//           {
//             quantity:"6 cucharadas",
//             name: "azúcar moreno"
//           },
//           {
//             quantity:"1/2 cucharada",
//             name: "Canela"
//           },
//           {
//             quantity:"200 ml",
//             name: "Nata vegana"
//           },
//           {
//           quantity:"1 sobre",
//           name: "Azúcar avainillado"
//           },
//         ]
//   },
// otra,
// ]