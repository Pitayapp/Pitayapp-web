"use strict"

let form = document.querySelector('formRecipes');


// Se guardan los datos que iran dentro del local storage
localStorage.setItem("id", "title", "image", "readyInMinutes", "steps", "vegan",
    "vegetarian", "healthy", "summer", "winter", "fall", "spring",
     "category": [
         "entrant",
         "lunch",
         "main dish",
         "dinner",
         "dessert",
         "smoothie",
         "soup",
         "salad",
         "fast vegan food",
     ],
     "ingredients": [
       {       
        "quantity":"",
        "name": ""
      },       
     ]
    );



//objeto local Storage, clave que va a tener y valor. Se guarda.
localStorage.setItem("receta", JSON.stringify(title));


//Se recuperan con localStorage.getItem("title");
document.querySelector('#recipes').innerHTML = localStorage.getItem("title");


// Guardar objetos desde aqui

// Update recipe object

// let recipe = {
//   id: "0001",
//   title: "Salmorejo",
//   image: "src/salmorejo.jpg",
//   readyInMinutes: "30",
//   steps: "Limpiar y triturar los tomates, colar para quitar la piel y las pepitas. Volver a triturar añadiéndole el pan, el aceite, los ajos y la sal. Opción vegetariana: Decorar con huevo duro picado.",
//   vegan: true,
//   vegetarian: true,
//   healthy: true,
//   summer: true,
//   winter: false,
//   fall: false,
//   spring: true,

//   category: [
//     entrant,
//     lunch,
//     ],

//     ingredients : [
//       {
//           measures: {
//               metric: {
//                   amount: 500,
//                   unitLong: kg,
//               },
//           },
//           name: "Tomato"
//       },

//       {
//         measures: {
//             metric: {
//                 amount: 500,
//                 unitLong: kg,
//             },
//         },
//         name: "tomato"
//     },

//       {
//           measures: {
//               metric: {
//                   amount: 200,
//                   unitShort: grs,
//               },
//           },
//           name: "bread"
//       },

//       {
//         measures: {
//             metric: {
//                 amount: 100,
//                 unitShort: grs,
//             },
//         },
//         name: "oil"
//       },

//       {
//         measures: {
//             metric: {
//                 amount: 1,
//             },
//         },
//         name: "garlic"
//       },

//       {
//         measures: {
//             metric: {
//                 amount: 10,
//                 unitShort: grs,
//             },
//         },
//         name: "salt"
//       }
//     ]
// }





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





//Veganas - IRENE

let veganas = {
  id: "xxxx",
  title: "Croquetas de tofu ahumado",
  image: "src/croquetas_tofu.jpg",
  readyInMinutes: "45",
  steps: "Saltear las cebollas con aceite durante 12 minutos, sin tapar y a fuego lento. Añadir el mijo y rehogarlo con las cebollas durante 2-3 mimutos. Añadir tres partes de agua, laurel y sal y cocer 20 minutos a fuego lento, con tapa. Retirar el laurel y hacer puré. Añadir leche de arroz hasta obtener una consistencia como de puré de patatas. Añadir el tofu y el pereji y mezclar hasta obtener una masa compacta. Dejar enfriar unos minutos, hacer las croquetas y rebozarlas con harina blanca. Calentar el aceite y freírlas hasta que se doren por ambos lados. Secarlas con papel de cocina absorbente y servir inmediatamente. ",
  vegan: true,
  vegetarian: true,
  healthy: true,
  summer: false,
  winter: true,
  fall: false,
  spring: true,

  category: [
    entrant,
    lunch,
    dinner
    ],

    ingredients : [
      {
          quantity:"",
          name: "Tofu ahumado triturado"
      },

      {
        measures: {
            metric: {
                amount: 2,
                unitLong: "",
            },
        },
        name: "Cebolla"
    },

      {
          measures: {
              metric: {
                  amount: 1/3,
                  unitShort: "taza",
              },
          },
          name: "Mijo"
      },

      {
        measures: {
            metric: {
                amount: 100,
                unitShort: grs,
            },
        },
        name: "oil"
      },

      {
        measures: {
            metric: {
                amount: 1,
            },
        },
        name: "garlic"
      },

      {
        measures: {
            metric: {
                amount: 10,
                unitShort: grs,
            },
        },
        name: "salt"
      }
    ]
}