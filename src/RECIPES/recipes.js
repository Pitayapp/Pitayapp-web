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


//noe


let salad = [
    {
      id: "xxxx",
      title: "Ensalada de cuscús",
      image: "",
      readyInMinutes: "15",
      steps: "1 Para preparar el cuscús, ponga a hervir la leche con 250 ml de agua, sal y 1 pizca de nuez moscada. Retire la cazuela del fuego, eche la sémola y deje que repose unos 15 minutos. Deje que se enfríey remuévalo bien. 2 Lave los tomates, límpielos y córtelos en rodajas. Lave el pepino, pártalo por la mitad, quítele las semillas con una cuchara y córtelo también en rodajas. Prepare un aliño mezclando el vinagre con el aceite, sal, pimienta y azúcar al gusto. 3 En una fuente, mezcle el cuscús con el tomate, el pepino y el aderezo Sirva la ensalada adornada con la menta.",
      vegan: true,
      vegetarian: true,
      healthy: true,
      summer: false,
      winter: true,
      fall: false,
      spring: true,
      category: [entrant, lunch, dinner],
      ingredients : [
        {
          measures: {
            metric: {
              amount: ,
              unitLong: "",
            },
          },
          name: "Leche de soja"
        },{
          measures: {
            metric: {
              amount: 0,
              unitLong: "",
            },
          },
          name: "Sal"
        },{
          measures: {
            metric: {
              amount: 0,
              unitLong: "",
            },
          },
          name: "Nuez moscada rallada"
        },{
          measures: {
            metric: {
              amount: 0,
              unitLong: "",
            },
          },
          name: "Sémola"
        },{
          measures: {
            metric: {
              amount: 0,
              unitLong: "",
            },
          },
          name: "tomates carnosos"
        },{
          measures: {
            metric: {
              amount: 0,
              unitLong: "",
            },
          },
          name: "pepino"
        },{
          measures: {
            metric: {
              amount: 0,
              unitLong: "",
            },
          },
          name: "cucharadas de vinagre de vino blanco"
        },{
          measures: {
            metric: {
              amount: 0,
              unitLong: "",
            },
          },
          name: "cucharadas de aceite de oliva"
        },{
          measures: {
            metric: {
              amount: 0,
              unitLong: "",
            },
          },
          name: "Pimienta"
        },{
          measures: {
            metric: {
              amount: 0,
              unitLong: "",
            },
          },
          name: "Azúcar, al gusto"
        },
      ]
    },
    {
      id: "xxxx",
      title: "Ensalada de pomelo con aguacate",
      image: "",
      readyInMinutes: "30",
      steps: "1 . Tueste los pistachos en una sartén y piquelos. Pele los pomelos y córtelos en gajos finos, recogiendo el jugo que suelten. Parta los aguacates por la mitad, pélelos, deshuéselos y trocéelos. 2 . Lave la guindilla, pártala por la mitad, despepítela y piquela. Pele el chalote y píquelo también. 3 . Prepare un aliño mezclando el vinagre con el jugo del pomelo, sal, pimienta y el aceite. Incorpore la guindilla y el chalote. Lave los brotes de alfalfa y sacúdalos para secarlos. Mezcle todos los ingredientes de la ensalada, excepto el pistacho, con el aliño. Repártala en cuencos individuales y sírvala con los pistachos por encima.",
      vegan: true,
      vegetarian: true,
      healthy: true,
      summer: false,
      winter: true,
      fall: false,
      spring: true,
      category: [entrant, lunch, dinner],
      ingredients : [
        {
          measures: {
            metric: {
              amount: 0,
              unitLong: "",
            },
          },
          name: "Pistachos"
        },
        {
          measures: {
            metric: {
              amount: 0,
              unitLong: "",
            },
          },
          name: "Pomelos rosas"
        },
        {
          measures: {
            metric: {
              amount: 0,
              unitLong: "",
            },
          },
          name: "Aguacates"
        },
        {
          measures: {
            metric: {
              amount: 0,
              unitLong: "",
            },
          },
          name: "Guindilla roja fresca"
        },
        {
          measures: {
            metric: {
              amount: 0,
              unitLong: "",
            },
          },
          name: "Chalote"
        },
        {
          measures: {
            metric: {
              amount: 0,
              unitLong: "",
            },
          },
          name: "Cucharadas de vinagre de vino blanco"
        },
        {
          measures: {
            metric: {
              amount: 0,
              unitLong: "",
            },
          },
          name: "Sal"
        },
        {
          measures: {
            metric: {
              amount: 0,
              unitLong: "",
            },
          },
          name: "Pimienta"
        },
        {
          measures: {
            metric: {
              amount: 0,
              unitLong: "",
            },
          },
          name: "Cucharadas de aceite de girasol"
        },
        {
          measures: {
            metric: {
              amount: 0,
              unitLong: "",
            },
          },
          name: "Brotes de alfalfa"
        }
      ]
    },
  {
    id: "xxxx",
    title: "Ensalada de hortalizas con limones a la sal",
    image: "",
    readyInMinutes: "40",
    steps: "1 . Si prepara usted mismo los limones a la sal, lave los limones. Hágales cinco cortes longitudinales acada uno y rellénelos con sal. Ponga los limones en una fuente de cristal refractaria honda y rocíelos con agua hirviendo. Cúbralos con aceite y déjelos reposar 3 semanas. 2 . Precaliente el gratinador del horno. Limpie los pimientos, pártalos por la mitad, quíteles las semillas, lávelos y séquelos. Áselos bajo el gratinador hasta que la piel empiece a quemarse y le salgan ampollas. Métalos en una bolsa para congelar y déjelos enfriar dentro. Después, pélelos y trocéelos. Limpie las berenjenas, lávelas y córtelas en dados de 1 cm. 3 . Mezcle el vinagre con 1/2 cucharadita de sal.Pase la berenjena por esta mezcla y fríala en el aceite vegetal bien caliente. Retírela de la sartén y déjela escurrir sobre papel de cocina. Pele el medio limón confitado, lave la piel, séquela y píquela.",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: false,
    winter: true,
    fall: false,
    spring: true,
    category: [entrant, lunch, dinner],
    ingredients : [
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Pimientos verdes"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Berenjenas"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Cucharada de vinagre de fruta"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Sal"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Aceite vegetal"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Limón confitado a la sal"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Aceitunas verdes deshuesadas"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Cucharadas de aceite de oliva"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "El zumo de 1 limón"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Pimienta"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Cucharada de perejil recién picado"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Para los limones confitados a la sal"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Limones de cultivo biológico"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Sal marina gorda"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Aceite, para cubrir"
      }

    ]
  },
  {
    id: "xxxx",
    title: "Ensalada de pepino con cacahuetes",
    image: "",
    readyInMinutes: "25",
    steps: "1 . Pele los pepinos, quíteles las semillas y rállelos. Maje los cacahuetes en el mortero y mézclelos con el pepino. Pele la cebolla, píquela bien y agréguela a la ensalada de pepino y cacahuete. 2 . Pele el ajo, píquelo bien y sofríalo en el aceite de cacahuete hasta que esté bien dorado. Espárzalo por encima de la ensalada y termine de aderezarla con salsa de soja, sal y pimienta.",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: false,
    winter: true,
    fall: false,
    spring: true,
    category: [entrant, lunch, dinner],
    ingredients : [
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Pepinos"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Cacahuetes con sal"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Cebolla"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Dientes de ajo"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Cucharadas de aceite de cacahuete"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Salsa de soja"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Sal"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Pimienta"
      }
    ]
  }  ,
  {
    id: "xxxx",
    title: "Ensalada de calabacín con anacardos",
    image: "",
    readyInMinutes: "30",
    steps: "1 . Lave los calabacines, séquelos, limpielos y córtelos en rodajas finas. Salpimiéntelas y sofríalas en 3 cucharadas del aceite bien caliente. Retírelas de la sartén y déjelas escurrir sobre papel de cocina. 2 . Lave los tomates, quíteles la parte central dura, escáldelos, pélelos, pártalos en cuartos, despepítelos y píquelos. Lave las cebolletas, séquelas, límpielas y trocéelas. Lave el tomillo, séquelo, arránquele las hojitas, reserve algunas y pique el resto. 3 . Tueste los anacardos en una sartén. Lave la achicoria, limpiela, centrifúguela y reparta las hojas entre los platos. Ponga encima el calabacín, el tomate y la cebolleta. Prepare una vinagreta con el tomillo picado, el resto del aceite, el vinagre, sal y pimienta, y repártala sobre la ensalada. Esparza los anacardos por encima y sírvala adornada con las hojitas de tomillo reservadas. Puede acompañar la ensalada con pan de ajo.",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: false,
    winter: true,
    fall: false,
    spring: true,
    category: [entrant, lunch, dinner],
    ingredients : [
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Calabacines (unos 800 g)"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Sal"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Pimienta"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Cucharadas de aceite de oliva"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Tomates"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Cebolletas"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Manojo de tomillo fresco"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Anacardos"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Achicoria"
      }
    ]
  }
  ,
  {
    id: "xxxx",
    title: "Ensalada de arroz salvaje con albaricoques",
    image: "",
    readyInMinutes: "20",
    steps: "1 . Cueza el arroz siguiendo las instrucciones del envase. A continuación, páselo a un plato grande y déjelo enfriar unos 12 minutos, removiéndolo de vez en cuando. 2 . Mientras tanto, lave la manzana, el pimiento y el apio, séquelos con papel de cocina y córtelos en daditos. Corte los orejones también en dados. Pase las hortalizas y la fruta a una fuente. 3 . En un cuenco, elabore un aliño con la salsa de soja, el azúcar y el vinagre. Añada 2 cucharadas de agua y remuévalo hasta que el azúcar se disuelva. 4 . Mezcle el arroz y el aliño con la verdura y la fruta de la fuente, y remuévalo todo bien. Por último, esparza los cacahuetes tostados por encima de la ensalada y sírvala.",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: false,
    winter: true,
    fall: false,
    spring: true,
    category: [entrant, lunch, dinner],
    ingredients : [
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Arroz salvaje"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Manzana mediana"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Pimiento verde"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Rama de apio"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Orejones de albaricoque"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Cucharadas de salsa de soja"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Cucharaditas de azúcar"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Cucharaditas de vinagre de fruta"
      }
    ]
  }
];


let dessert = [
{
    id: "xxxx",
    title: "Manzanas caramelizadas",
    image: "",
    readyInMinutes: "20 minutes",
    steps: "1 Precaliente el horno a 220°C. Forre la bandeja con papel vegetal. Pique bien los orejones y méz- clelos con la mantequilla, el mazapán y la avellana. 2 Pele las manzanas y frótelas enseguida con el zumo de limón. Quíteles el corazón con un des- corazonador. Agrande un poco los agujeros y relléne- los con la mezcla de mazapán y avellana. Mezcle el azúcar moreno con la canela y reboce las manzanas con esta mezcla. 3 Ponga las manzanas en la bandeja y hornéelas unos 20 minutos, hasta que estén tiernas y ca- ramelizadas. Monte la nata con el azúcar avainillado y repártala en cuencos de postre. Ponga las manza- nas encima y sírvalas enseguida.
",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: false,
    winter: true,
    fall: true,
    spring: false,

    category: [
      desserts
      ],

      ingredients : [
        {
            quantity:"50 gr",
            name: "orejones de albaricoque"
        },
        {
          quantity:"50 gr",
          name: "mantequilla vegana"
      },

        {
            quantity:"50 gr",
            name: "mazapan"
        },

        {
          quantity:"50 gr",
          name: "avellana molida"
      },

      {
        quantity:"4 unidades",
        name: "manzanas ácidas"
      },

      {
        quantity:"1 cucharada",
        name: "zumo de limón"
      },

      {
         quantity:"6 cucharadas",
         name: "azúcar moreno"
      },

       {
      quantity:"1/2 cucharada",
      name: "canela"
      },

      {
      quantity:"200 ml",
      name: "nata vegana"
      },

      {
      quantity:"1 sobre",
      name: "azúcar avainillado"
      },
      ]
},
  {
    id: "xxxx",
    title: "Panna cotta de cacahuete con salsa de chocolate",
    image: "",
    readyInMinutes: "35",
    steps: "1 . Ponga la leche de almendra en una cazuela y mézclela con el mus de cacahuete, el jarabe de agave y el agar-agar. Corte la vaina de vainilla por la mitad a lo largo y raspe la pulpa. Eche las semillas y la vaina en la cazuela y deje que hierva. Deje cocer la leche a fuego lento 1 minuto para que el agar-agar haga cuajar la mezcla. 2 . Enjuaque moldes individuales con agua fría. Saque la vaina de vainilla de la panna cotta, re- parta la mezcla en los moldes y déjelos en el frigori- fico, tapados, unas 4 horas. 3 . Para preparar la salsa de chocolate, pique el chocolate. Ponga a hervir 100 ml de agua, eche el cacao y el azúcar y deje que vuelva a hervir. A con- tinuación, eche el chocolate, deje que se funda y dé- jelo enfriar un poco. Trocee los cacahuetes. 4 . Disponga la salsa de chocolate en los platos de forma decorativa, vuelque la panna cotta en el centro y esparza los cacahuetes por encima.",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: false,
    winter: true,
    fall: false,
    spring: true,
    category: [entrant, lunch, dinner],
    ingredients : [
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Leche de almendra"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Cucharadas de mus de cacahuetes salados"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Jarabe de agave"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Cucharadita de agar-agar"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Vaina de vainilla"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Chocolate de cobertura negro vegano"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Cucharaditas de cacao en polvo (unos 30 g)"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Azúcar"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Cacahuetes con sal"
      }
    ]
  }  ,
  {
    id: "xxxx",
    title: "Sorbete de limón",
    image: "",
    readyInMinutes: "25 minutos, más 1 hora de enfriado en el congelador",
    steps: "1 . En un cazo. disuelva el azúcar en 400 ml de agua, llévelo a ebullición sin dejar de remover y luego deje que se enfríe. Lave la menta, sacúdala para se- carla y arranque las hojitas. 2 . Cubra el jarabe de azúcar completamente con las hojas de menta. Déjelo reposar 24 horas, luego páselo por un chino e incorpore el zumo de limón. 3 . Deje la mezcla en el congelador 4 o 5 horas, re- moviéndola de vez en cuando. Distribuya el sor- bete en cuencos de postre con un sacabolas.",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: false,
    winter: true,
    fall: false,
    spring: true,
    category: [entrant, lunch, dinner],
    ingredients : [
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Azúcar"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Manojos de menta"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "El zumo de 1/2 limón"
      }
    ]
  }
  ,
  {
    id: "xxxx",
    title: "Clafoutis de frambuesa",
    image: "",
    readyInMinutes: "1 hora",
    steps: "1 .Precaliente el horno a 180°C. Bata la mantequilla con el azúcar, el almidón de arruruz y la sémola hasta que esté espumosa. Vierta la leche de almendra y remueva bien. Mezcle la harina con la levadura e in- corpórela. 2 . Unte con mantequilla una fuente refractaria , llana. Disponga en ella las frambuesas, vierta la mezcla por encima y alise la superficie. Hornee el cla- foutis unos 45 minutos.",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: false,
    winter: true,
    fall: false,
    spring: true,
    category: [entrant, lunch, dinner],
    ingredients : [
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Mantequilla vegana"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Azúcar de caña"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Cucharadas de almidón de arruruz"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Sémola"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Leche de almendra"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Harina"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Cucharaditas de levadura en polvo"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Frambuesas"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Mantequilla vegana, para untar."
      }
    ]
  }
  ,
  {
    id: "xxxx",
    title: "Helado de plátano y chocolate",
    image: "",
    readyInMinutes: "4 horas y 30 min",
    steps: "1 . Pele los plátanos y tritúrelos con el zumo de limón, el mus de anacardos, el jarabe de agave y la leche de coco. Abra la vaina de vainilla por la mitad a lo largo, raspe la pulpa e incorpore las semillas. 2 . Deje reposar la mezcla en el congelador. Re- muévala con un tenedor cada media hora para que los cristales de hielo se mantengan pequeños. Cuando empiece a espesarse, sáquela del congela- dor y divídala en dos partes; en una de ellas agregue el cacao. Vuelva a juntar las dos partes, mezclándolas ligeramente con un tenedor con un movimiento en- volvente para obtener el efecto veteado del mármol. Vuelva a dejar el helado en el congelador. Para ser- virlo, deje que se descongele un poco y haga bolas con un sacabolas.",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: false,
    winter: true,
    fall: false,
    spring: true,
    category: [entrant, lunch, dinner],
    ingredients : [
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Plátanos maduros grandes (unos 800 g)"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Cucharada de zumo de limón"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Mus de anacardos"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Jarabe de agave de aceite de oliva"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Leche de coco"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Vaina de vainilla"
      },
      {
        measures: {
          metric: {
            amount: 0,
            unitLong: "",
          },
        },
        name: "Cacao en polvo orgánico de tomillo fresco"
      }
    ]
  }
]