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


//Regy


let recipes = [

{
    id: "xxxx",
    title: "Smoothie Verde",
    image: "src/smoothie_verde.jpg",
    readyInMinutes: "10",
    steps: "Colocar todos los ingredientes en una batidora que sea potente y batir hasta que se hayan integrado perfectamente, si nos parece que el batido está demasiado espeso podemos añadir más agua. Servir y beber inmediatamente.",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: true,
    winter: false,
    fall: true,
    spring: true,

    category: [
      smoothie
      ],

      ingredients : [
        {
            quantity:"1 hoja",
            name: "Kale"
        },
        {
          quantity:"1 manojo",
          name: "Espinacas"
      },

        {
            quantity:"1/2",
            name: "Plátano"
        },

        {
          quantity:"1/2",
          name: "Manzana"
      },

      {
        quantity:"1 cucharadita",
        name: "Semillas de lino"
      },

      {
        quantity:"1 vaso",
        name: "Agua"
      },
      ]
},

{
  id: "xxxx",
  title: "Smoothie de crema de cacahuete y mermelada de fresa",
  image: "src/smoothie_cacahuete_mermelada.jpg",
  readyInMinutes: "10",
  steps: "Lavar y desinfectar las fresas. Cortar en trozos muy pequeños y con la ayuda de un tenedor intentar formar un puré con las mismas. En un recipiente pequeño, colocar las semillas de chía y el agua, mezclar repetidas veces hasta que tenga una consistencia como de gel por aproximadamente 10 minutos. Al gel de chía agregar el puré de fresas y mezclar bien. Reservar. En un robot de cocina de alta potencia colocar la leche de almendra, la avena, la crema de cacahuete, los dátiles, la vainilla y el plátano. Triturar hasta obtener una consistencia homogénea y cremosa. Servir en un vaso colocando una capa de la mezcla de crema de cacahuete, mermelada de fresa y termina con crema de cacahuete.",
  vegan: true,
  vegetarian: true,
  healthy: true,
  summer: true,
  winter: false,
  fall: false,
  spring: true,

  category: [
    smoothie
    ],

    ingredients : [
      {
          quantity:"5",
          name: "Fresas"
      },

      {
        quantity:"1 cucharada",
        name: "Semillas de chía"
    },

      {
          quantity:"1/4 taza",
          name: "Agua"
      },

      {
        quantity:"1 cucharadita",
        name: "Miel de arce pura"
    },

    {
      quantity:"1 taza",
      name: "Leche de almendra sin azúcar"
    },

    {
      quantity:"1/2 taza",
      name: "Avena"
    },

    {
      quantity:"2 cucharadas",
      name: "Crema de cacahuete"
    },

    {
      quantity:"2 cucharadas",
      name: "Agua"
    },

    {
      quantity:"2",
      name: "Dátiles sin semilla"
    },

    {
      quantity:"2 cucharadas",
      name: "Agua"
    },

    {
      quantity:"1 cucharadita",
      name: "Extracto de vainilla"
    },

    {
      quantity:"1/2",
      name: "Plátano congelado"
    },
    ]
},

{
  id: "xxxx",
  title: "Smoothie de piña, mango y lima",
  image: "src/smoothie_piña_mango_lima.jpg",
  readyInMinutes: "10",
  steps: "Pelar el mango y cortarlo en trozos pequeños. Colocar en un recipiente apto para el congelador y congelar la fruta durante un mínimo de dos horas. Una vez pasado el tiempo, echar los trozos de mango congelados en el vaso de una batidora o robot de cocina, añadir el zumo de piña, el zumo de lima y la ralladura, reservando una pequeña cantidad para decorar. Triturar todo con la batidora hasta que espese y no queden trozos de fruta. Poner el smoothie en vasos, decorar con la ralladura de lima y unas hojas de hierbabuena.",
  vegan: true,
  vegetarian: true,
  healthy: true,
  summer: true,
  winter: false,
  fall: false,
  spring: true,

  category: [
    smoothie
    ],

    ingredients : [
      {
          quantity:"200 g",
          name: "Mango pelado"
      },
      {
        quantity:"300 ml",
        name: "Zumo de piña"
    },

      {
          quantity:"1 Lima",
          name: "Zumo y ralladura"
      },

    ]
},


{
  id: "xxxx",
  title: "Crema de patatas y rúcula con chips",
  image: "src/crema_patatas_rúcula.jpg",
  readyInMinutes: "60",
  steps: "Lave 1 patata, pélela y córtela en láminas longitudinales de 1 o 2 cm de grosor. Póngalas en un cuenco cubiertas de agua y déjelas en remojo 20 minutos. Mezcle 2 cucharadas del aceite y 1 cucharadita de sal y precaliente el horno a 180°C. Escurra las rodajas de patata, séquelas con papel de cocina y úntelas por ambos lados con la mezcla de sal y aceite. Dispóngalas en la bandeja del horno forrada con papel vegetal y cuézalas en el horno entre 25 y 40 minutos hasta que estén crujientes; abra la puerta del horno de vez en cuando para dejar salir la humedad, y no deje que se doren demasiado. A continuación, deje enfriar las rodajas de patata en una rejilla. Pele el resto de las patatas y córtelas en dados. Pele los ajos y píquelos. Lave la rúcula, sacúdala para secarla y córtela en juliana. Caliente el caldo y cueza las patatas con el ajo unos 15 minutos. Añada la rúcula y prolongue la cocción otros 2 minutos. Triture la sopa con el aceite restante y salpimiéntela. Trocee las rodajas de patata con las manos y sirva la crema con los chips.",
  vegan: true,
  vegetarian: true,
  healthy: true,
  summer: true,
  winter: true,
  fall: true,
  spring: true,

  category: [
    entrant,
    soup,
    ],

    ingredients : [
      {
          quantity:"900gr",
          name: "Patatas"
      },

      {
        quantity:"4 cucharadas",
        name: "Aceite de oliva"
    },

      {
          quantity:"2 dientes",
          name: "Ajo"
      },

      {
        quantity:"150gr",
        name: "Rúcula"
    },

    {
      quantity:"1,5l",
      name: "Caldo de verduras"
    },

    {
      quantity:"1 pizca",
      name: "Pimienta"
    },
    ]
},

{
  id: "xxxx",
  title: "Capuchino de guisantes con menta",
  image: "src/capuchino_guisantes_menta.jpg",
  readyInMinutes: "45",
  steps: "Ponga los guisantes en una cazuela. Lave las patatas, pélelas y córtelas en trocitos. Eche las patatas y el caldo en la cazuela, y déjelo hervir a fuego lento de 15 a 20 minutos. Aparte la cazuela del fuego y triture la sopa. Sazónela con sal, pimienta y el tabasco. Mezcle el yogur con 2 cucharadas de la leche de soja, e incorpore la mezcla a la sopa. Rectifique la sazón y añada la menta picada y el licor de menta. Bata el resto de la leche de soja con un espumador de leche. Adorne cada taza de sopa con una nube de espuma de leche y 1 hojita de menta.",
  vegan: true,
  vegetarian: true,
  healthy: true,
  summer: true,
  winter: true,
  fall: true,
  spring: true,

  category: [
    entrant,
    soup,
    ],

    ingredients : [
      {
          quantity:"400gr",
          name: "Guisantes congelados"
      },

      {
        quantity:"2",
        name: "Patatas"
    },

      {
          quantity:"450ml",
          name: "Caldo de verduras"
      },

      {
        quantity:"Una pizca",
        name: "Sal"
    },

    {
      quantity:"Una pizca",
      name: "Pimienta"
  },

    {
      quantity:"Un chorrito",
      name: "Tabasco"
    },

    {
      quantity:"100gr",
      name: "Yogur de leche de soja"
    },

    {
      quantity:"4 cucharadas",
      name: "Menta picada"
    },

    {
      quantity:"1 buen chorrito",
      name: "Licor de menta"
    },

    {
      quantity:"4 hojas",
      name: "Menta"
    },

    ]
},

{
  id: "xxxx",
  title: "Sopa de almendras con picatostes",
  image: "src/sopa_almendras_picatostes.jpg",
  readyInMinutes: "50",
  steps: "Si las almendras tienen piel, póngalas en un cuenco, rocíelas con agua hirviendo, déjelas reposar un poco y luego escúrralas. A continuación, pélelas bien. Pele los ajos y córtelos en láminas. Caliente el aceite en una sartén, eche el ajo y las almendras, y rehóguelas unos 5 minutos a temperatura moderada hasta que se doren un poco. Lave el perejil, sacúdalo para secarlo, arranque las hojitas y piquelas. Eche la mitad del perejil en la sartén y siga rehogando unos 3 minutos más. Ponga el contenido de la sartén en el robot de cocina, tritúrelo y páselo a una cazuela. Condiméntelo con sal, pimienta, el comino y el azafrán. Vierta el caldo, llévelo a ebullición, tápelo y deje que hierva a fuego lento de 15 a 20 minutos. Para elaborar los picatostes, retire la corteza del pan y córtelo en daditos. Caliente el aceite de oliva en una sartén y sofría el pan hasta que esté crujiente. Sáquelo de la sartén y resérvelo. Eche la mitad de los picatostes en la sopa, remueva y rectifique la sazón. Sirva la sopa adornada con el perejil y los picatostes restantes.",
  vegan: true,
  vegetarian: true,
  healthy: true,
  summer: true,
  winter: true,
  fall: true,
  spring: true,

  category: [
    entrant,
    soup,
    ],

    ingredients : [
      {
          quantity:"200gr",
          name: "Almendras"
      },

      {
        quantity:"3 cucharadas",
        name: "Aceite de oliva"
    },

      {
          quantity:"5 dientes",
          name: "Ajo"
      },

      {
        quantity:"1 manojo",
        name: "Perejil"
    },

    {
      quantity:"Una pizca",
      name: "Comino molido"
    },

    {
      quantity:"Una pizca",
      name: "Sal"
    },

    {
      quantity:"750ml",
      name: "Caldo de verduras"
    },

    {
      quantity:"1 pizca",
      name: "Pimienta"
    },

    {
      quantity:"8 Rebanadas",
      name: "Pan blanco del día anterior"
    },

    {
    quantity:"2 cucharadas",
    name: "Aceite de oliva"
    },

    ]
},

{
  id: "xxxx",
  title: "Sopa de col con brotes de bambú",
  image: "src/sopa_col_bambú.jpg",
  readyInMinutes: "60",
  steps: "La noche anterior, ponga en remojo las setas. Al día siguiente, escúrralas bien y córtelas en tiras finas. Escurra bien los brotes de bambú. Limpie la col y el puerro, lávelos bien y córtelos en tiras finas junto con los brotes de bambú. Prepare los fideos siguiendo las instrucciones del envase. Vierta el caldo en una olla, eche el puerro, los brotes de bambú y las setas, llévelo a ebullición y deje que hierva a fuego lento unos 20 minutos. Eche la col y prolonque la cocción 5 minutos más. Aderece la sopa con la salsa de soja. Reparta los fideos en cuencos individuales, vierta la sopa por encima y sírvala enseguida.",
  vegan: true,
  vegetarian: true,
  healthy: true,
  summer: true,
  winter: true,
  fall: true,
  spring: true,

  category: [
    entrant,
    soup,
    ],

    ingredients : [
      {
          quantity:"250gr",
          name: "Col china"
      },

      {
        quantity:"1 cucharada",
        name: "Salsa de soja"
    },

      {
          quantity:"1",
          name: "Puerro"
      },

    {
      quantity:"Una pizca",
      name: "Sal"
    },

    {
      quantity:"1125ml",
      name: "Caldo de verduras"
    },

    {
      quantity:"1 pizca",
      name: "Pimienta"
    },

    {
      quantity:"100gr",
      name: "Fideos de arroz finos"
    },

    ]
},


{
  id: "xxxx",
  title: "Crema de espárragos con mus de almendra:",
  image: "src/crema_espárragos_almendra.jpg",
  readyInMinutes: "45",
  steps: "Pele el tercio inferior de los espárragos, córteles la parte dura y lávelos. Córteles las puntas, resérvelas y trocee el resto. Pele los ajos y lave el tomillo. Caliente 2 cucharadas del aceite, y fría el ajo y los trozos de espárrago unos minutos. Añada 1 cucharada del mus de almendra, el vino, el caldo y el tomillo, deje que hierva y cuézalo a fuego lento 15 minutos. Retire la ramita de tomillo. Tritúrelo todo y salpimiéntelo. Eche las puntas de espárrago y caliéntelas. Mezcle el mus de almendra y el aceite restantes, tueste el pan y úntelo con esta mezcla. Rocíe la crema con aceite de oliva y adórnela con hojitas de tomillo. Sírvala acompañada del pan.",
  vegan: true,
  vegetarian: true,
  healthy: true,
  summer: true,
  winter: true,
  fall: true,
  spring: true,

  category: [
    entrant,
    soup,
    ],

    ingredients : [
      {
          quantity:"500gr",
          name: "Espárragos verdes"
      },

      {
        quantity:"4 cucharadas",
        name: "Aceite de oliva"
    },

      {
          quantity:"1-2 dientes",
          name: "Ajo"
      },

      {
        quantity:"2 cucharadas",
        name: "Mus de almendra"
    },

    {
      quantity:"1 ramita",
      name: "Tomillo"
    },

    {
      quantity:"Una pizca",
      name: "Sal"
    },

    {
      quantity:"500ml",
      name: "Caldo de verduras"
    },

    {
      quantity:"1 pizca",
      name: "Pimienta"
    },

    {
      quantity:"125ml",
      name: "Vino blanco"
    },

    ]
},

]






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
