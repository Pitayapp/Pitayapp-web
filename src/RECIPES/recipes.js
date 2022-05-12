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
      "smoothie"
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
    "smoothie"
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
    "smoothie"
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
    "entrant",
    "soup",
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
    "entrant",
    "soup",
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
    "entrant",
    "soup",
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
    "entrant",
    "soup",
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
    "entrant",
    "soup",
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

let veganas = [
  {
    id: "xxxx",
    title: "Croquetas de tofu ahumado",
    image: "src/croquetas_tofu.jpg",
    readyInMinutes: "45",
    steps: "Cortar las cebollas a cuadraditos. Lavar y escurrir el mijo. Saltear las cebollas con aceite durante 12 minutos, sin tapar y a fuego lento. Añadir el mijo y rehogarlo con las cebollas durante 2-3 mimutos. Añadir tres partes de agua, laurel y sal y cocer 20 minutos a fuego lento, con tapa. Retirar el laurel y hacer puré. Añadir leche de arroz hasta obtener una consistencia como de puré de patatas. Añadir el tofu y el pereji y mezclar hasta obtener una masa compacta. Dejar enfriar unos minutos, hacer las croquetas y rebozarlas con harina blanca. Calentar el aceite y freírlas hasta que se doren por ambos lados. Secarlas con papel de cocina absorbente y servir inmediatamente. ",
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
            quantity:"1/2 bloque",
            name: "Tofu ahumado triturado"
        },
        {
            quantity:"2",
            name: "Cebollas"
        },
        {
            quantity:"1/3 de taza",
            name: "Mijo"
        },
        {
            quantity:"1/2 bloque",
            name: "Tofu ahumado triturado"
        },
        {
            quantity:"",
            name: "Laurel"
        },
        {
            quantity:"",
            name: "Perejil crudo"
        },
        {
            quantity:"",
            name: "Aceite de oliva"
        },
        {
            quantity:"",
            name: "Leche de arroz"
        },
        {
            quantity:"",
            name: "Harina blanca"
        }
  },
  {
    id: "xxxx",
    title: "Revuelto de tofu y setas",
    image: "src/revuelto_tofu_setas.jpg",
    readyInMinutes: "20",
    steps: "Laminamos los ajos y picamos las setas que vayamos a utilizar. En una sartén, salteamos los ajos y las setas con un poco de aceite de oliva hasta que se queden bien cocinados. Evita pasarte de la cocción para que las verduras te queden al dente. Mientras se saltean las verduras, en un cuenco, desmigamos el bloque de tofu con ayuda de un tenedor. Añadimos el tofu desmigado a la sartén junto a la cúrcuma y la salsa tamari. Salteamos un par de minutos más para que los sabores se integren. Servimos el revuelto con un poco de perejil fresco",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: true,
    winter: true,
    fall: true,
    spring: true,

    category: [
      lunch,
      dinner
      ],
    ingredients : [
        {
          quantity:"400 gr",
          name: "Tofu ahumado triturado"
        },
        {
          quantity:"300 gr",
          name: "Setas variadas"
        },
        {
          quantity:"1 cucharada",
          name: "Cúrcuma en polvo"
        },
        {
          quantity:"2 dientes",
          name: "Ajo"
        },
        {
          quantity:"2 cucharadas",
          name: "Salsa tamari"
        },
        {
          quantity:"Una pizca",
          name: "Sal"
        }
      ]
  },
  {
    id: "xxxx",
    title: "Tortilla de patata sin huevo con veganesa",
    image: "src/tortilla_vegana.jpg",
    readyInMinutes: "20",
    steps: "De la tortilla\n Pela, corta y frie las patatas añadiendo, si lo deseas, los pimientos, cebollas y al final el maíz hasta que esté todo dorado y blando. Haz la mezcla de harina de garbanzos y el agua, poniendo en un vaso un 60% de harina y un 40% de agua. Bátelo bien con un tenedor hasta obtener una mezcla sin grumos y algo más espesa que el huevo batido. Añade las verduras a la masa de la harina, remueve para distribuir bien, sazona con sal y un poco de pimienta. Echa todo ello en una sartén bien caliente con un chorrito de aceite. Hazla como una tortilla normal hasta que esté dorada por ambos lados. De la veganesa \n En un vaso de batidora se pone el aceite, la leche de soja y la sal. Ponemos la batidora en el fondo del vaso y sin moverla, se bate a velocidad baja. Una vez se ha ligado la mezcla en el fondo, se mueve la batidora poco a poco de arriba a abajo para que ligue el aceite en la superficie del vaso. Cuando esté todo ligado, se añade el zumo de limón y el ajo, y se bate para espese más.",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: false,
    winter: true,
    fall: false,
    spring: true,

    category: [
      lunch,
      dinner
      ],
    ingredients : [
        {
          quantity:"4",
          name: "Patatas medianas"
        },
        {
          quantity:"1",
          name: "Cebolla mediana"
        },
        {
          quantity:"1/2 vaso",
          name: "Harina de garbanzos"
        },
        {
          quantity:"",
          name: "Agua"
        },
        {
          quantity:"",
          name: "Sal"
        },
        {
          quantity:"",
          name: "Aceite de oliva"
        },
        {
          quantity:"1/2",
          name: "Pimiento verde"
        },
        {
          quantity:"1/2",
          name: "Pimiento rojo"
        },
        {
          quantity:"",
          name: "Maiz"
        },
        {
          quantity:"1 vaso",
          name: "Aceite de girasol"
        },
        {
          quantity:"1/4 vaso",
          name: "Leche de soja sin endulzar"
        },
        {
          quantity:"2 cucharadas",
          name: "Zumo de limón"
        },
      ]  
  },
  {
    id: "xxxx",
    title: "Domoda (Estofado de cacahuetes de Gambia)",
    image: "src/domoda.jpg",
    readyInMinutes: "90",
    steps:"Trocear la cebolla. Cortar el chile en trozos muy pequeños asi como la calabaza. Calentar el aceite en una olla grande. Saltear las cebollas hasta que estén doradas. Añade la soja texturizada sin hidratar. Continúa moviendo un minuto más. Añade los tomates y cocina durante 3 minutos. Añade el tomate natural triturado, chile, mantequilla de cacahuete y mueve bien. Añade agua y un cubo de concentrado de verduras. Lleva a ebullición, baja el fuego, y tápalo durante 15 minutos, removiendo ocasionalmente. Añade los trozos de calabaza, cubre y cocina a fuego lento durante 40 minutos aproximadamente. Una vez que la calabaza esté tierna, echar sal y pimienta. Sírvelo con arroz. Aconsejo hacerlo el día de antes, ya que una vez más asentado, se mezclan mejor los sabores",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: true,
    winter: true,
    fall: true,
    spring: true,

    category: [
      "lunch",
      "dinner",
      "main dish"
      ],
    ingredients : [
        {
          quantity:"1/2 paquete",
          name: "Soja texturizada"
        },
        {
          quantity:"1",
          name: "Cebolla grande"
        },
        {
          quantity:"2 cucharadas soperas",
          name: "Aceite de oliva"
        },
        {
          quantity:"1/2 lata",
          name: "Tomate natural triturado"
        },
        {
          quantity:"1/2 bote",
          name: "Mantequilla de cacahuete sin sal"
        },
        {
          quantity:"4 cubitos",
          name: "Concentrado de verduras"
        },
        {
          quantity:"3 tazas",
          name: "Agua"
        },
        {
          quantity:"1",
          name: "Chile rojo"
        },
        {
          quantity:"1/2",
          name: "Calabaza"
        },
        {
          quantity:"",
          name: "Sal"
        },
        {
          quantity:"",
          name: "Pimienta"
        },
      ]
  },
    {
    id: "xxxx",
    title: "Maghmour - Mussaka o estofado de berenenjas",
    image: "src/maghmour.jpg",
    readyInMinutes: "90",
    steps:"Lo primero es preparar las berenjenas. Las pelamos parcialmente, dejando la piel a rayas, y luego las cortamos en rodajas longitudinales (también podemos cortarlas en cuartos). Las podemos asar o freír. Disponemos las rodajas sobre una fuente de horno y las pincelamos con aceite por las dos caras. No pasa nada porque se superpongan. Salpimentamos al gusto y horneamos unos 20 minutos a 200 - 220º C, hasta que estén tiernas y doradas. Reservamos. Pasamos los garbanzos por el chorro de agua fría para quitarles el líquido de la conserva y los escurrimos muy bien. Si decidís usar los secos, los tendréis que cocer (unos 20 minutos). En una cacerola ponemos a calentar un poquito de aceite y ponemos a pochar la cebolla previamente picada. Cuando la cebolla esté tierna y algo dorada, añadimos el ajo (6 dientes picados y 2 machacados) y los garbanzos. Removemos bien. Echamos el tomate, los copos de cayena y la sal al gusto. Mezclamos y dejamos cocer a fuego medio unos 20 minutos con la tapa puesta (totalmente cerrada o ligeramente abierta). Removemos de vez en cuando para que no se pegue. Por último, añadimos la menta y las berenjenas asadas. Mezclamos bien y dejamos cocer a fuego un poco más bajo otros 20 minutos más o menos. Si vemos que queda bastante líquido, destapamos los últimos 10 minutos. Por el contrario, si vemos que hace falta agua, la echamos ahora. Cuando esté listo, retiramos del fuego y dejamos reposar unos minutos. Para servir, caliente o a temperatura ambiente, acompañamos de yogur tipo griego (denso) y pan árabe o de pita",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: false,
    winter: true,
    fall: true,
    spring: true,

    category: [
      "lunch",
      "dinner",
      "main dish"
      ],
    ingredients : [
        {
          quantity:"1 kg",
          name: "Berejena"
        },
        {
          quantity:"2 latas grandes",
          name: "Tomate natural pelado"
        },
        {
          quantity:"3",
          name: "Cebollas medianas"
        },
        {
          quantity:"8",
          name: "Dientes de ajo"
        },
        {
          quantity:"240 gr",
          name: "Garbanzos cocidos"
        },
        {
          quantity:"1 cucharada",
          name: "Menta seca"
        },
        {
          quantity:"",
          name: "Pimienta negra molida"
        },
        {
          quantity:"",
          name: "Aceite de oliva"
        },
        {
          quantity:"",
          name: "Menta fresca"
        }
      ]
  },
    {
    id: "xxxx",
    title: "Hummus de edamame",
    image: "src/hummus_edamame.jpg",
    readyInMinutes: "25",
    steps:"Poner 500 ml de agua a hervir con una pizca de sal. Sacar las habas de edamame de las vainas. Cocer durante 4 minutos las habas de edamame y escurrir.Exprimir el limón y reservar.Pelar el ajo, eliminar el germen del centro y rallarlo. Reservar.Poner las habas de edamame en un robot de cocina, añadir una pizca de sal, el zumo de limón, el ajo rallado y el tahini. Moler todo durante 3 minutos a velocidad media alta. Servir el tahini a temperatura fresca en un bol, rociar con un poco de aceite de oliva y añadir pipas de calabaza. Acompañar con obleas de pan, limón cortado y hierbabuena.",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: false,
    winter: true,
    fall: true,
    spring: true,

    category: [
      "entrant",
      ],
    ingredients : [
        {
          quantity:"300 gr",
          name: "Edamame"
        },
        {
          quantity:"2 cucharadas",
          name: "Tahini"
        },
        {
          quantity:"1",
          name: "Limón"
        },
        {
          quantity:"",
          name: "Hierbabuena fresca"
        },
        {
          quantity:"",
          name: "Sal"
        },
        {
          quantity:"",
          name: "Aceite de oliva"
        },
        {
          quantity:"1",
          name: "Diente de ajo"
        },
        {
          quantity:"",
          name: "Obleas finas de pan"
        },
        {
          quantity:"",
          name: "Pipas de calabaza"
        }
      ]
  },  
]

  // Pasta y pizzas
let pasta_pizzas = [
  {
    id: "xxxx",
    title: "Minipizza con base de patatas",
    image: "src/croquetas_tofu.jpg",
    readyInMinutes: "35",
    steps: "Cortamos las patatas en rodajas y untamos la sartén con aceite, solo lo necesario para que no se pegue la base de patatas. Distribuimos las patatas en la sartén formando una base circular piramidal, y rociamos el queso parmesano; tapamos la sartén y dejemos freír durante 5 minutos a fuego lento. Aplicamos la salsa de tomate por toda la base. Rociamos una cucharadita de orégano y colocamos las champiñones alrededor formando un círculo. Con 5 ó 6 lonchas de mozzarella sobre los champiñones formando un círculo y el centro abrimos un huevo. Dejamos durante 8 minutos a fuego lento. Sacamos de la sartén y  ponemos pizca de pimienta al gusto.",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: false,
    winter: true,
    fall: false,
    spring: true,

    category: [
      "entrant",
      "lunch",
      "dinner"
      ],

      ingredients : [
        {quantity:"2",
          name: "Patatas"
        },
        {
          quantity:"2 cucharadas",
          name: "Queso parmesano"
        },
        {
          quantity:"1 cucharadita",
          name: "Orégano"
        },
        {
          quantity:"2",
          name: "Champiñones laminados"
        },
        {
          quantity:"1",
          name: "Huevo"
        },
        {
          quantity:"150 gr",
          name: "Mozzarella"
        },
        {
          quantity:"",
          name: "Aceite de oliva extra"
        }
      ]    
  },
  {
    id: "xxxx",
    title: "Lasaña vegetal",
    image: "src/lasana_vegetal.jpg",
    readyInMinutes: "45",
    steps:"Poner a hervir una cantidad de agua igual a la cantidad de soja texturizada con una pizca de sal. Echar la soja texturizada, removar para que se empape bien de agua, apagar el fuego, tapar y dejar que se hinche. Reservar. Pelar y cortar finamente las verduras, excepto unos 25 gr de cebolla y la mitad del ajo. Freírlas en una sartén con un poco de aceite de oliva hasta que queden blandas. Reservar. Cuando la soja texturizada esté blanda, retirar el agua sobrante y freirla en otra sartén con aceite, el resto del ajo y la cebolla bien picados. Añadir el perejil y cuando esté bien dorado, echar la salsa de soja, remover y dejar un par de minutos a fuego lento. Añadir el tomillo, el orégano y el tomate frito. Añadir el pisto de verduras de la otra sartén, removerlo todo bien y sazonar con sal a gusto. Reservar. Para la salsa bechamel, derretir los 100 gr de margarina, añadir la harina removiendo bien y luego, poco a poco, la leche de avena o soja enérgicamente para que no se formen grumos. Condimental con sal y un poco de pimienta. Cocer las láminas de lasaña en abundante agua hirviendo con sal y aceite. Engrasar la fuente para hornear y colocar la lasaña en capas. 1º: un poco de salsa de tomate. 2º: una capa de placas de lasaña. 3º: mezcla de verduras, otra capa de placas y así hasta utilizarlas todas y toda la bechamel. Cubrir con queso vegano y/o anacardos molidos. Gratinar en el horno a 180º unos 20 minutos. Hoy en dia existen diferentes tipos de quesos hechos con base vegetal que sirven para gratinar.",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: false,
    winter: true,
    fall: true,
    spring: false,

    category: [
      "main dish",
      "lunch",
      "dinner"
      ],

      ingredients : [
        {quantity:"1 paquete",
          name: "Placas para lasaña o canelones"
        },
        {
          quantity:"150 gr",
          name: "Soja texturizada fina"
        },
        {
          quantity:"150 gr",
          name: "Pimiento rojo"
        },
        {
          quantity:"150 gr",
          name: "Calabacín"
        },
        {
          quantity:"175 gr",
          name: "Cebolla"
        },
        {
          quantity:"50 gr",
          name: "Zanahoria"
        },
        {
          quantity:"500 ml",
          name: "Salsa de tomate frito"
        },
        {
          quantity:"2",
          name: "Ajo"
        },
        {
          quantity:"",
          name: "Queso vegano para gratinar"
        },
        {
          quantity:"1 puñado",
          name: "Anacardos"
        },
        {
          quantity:"1 cucharadita",
          name: "Orégano"
        },    
        {
          quantity:"1 cucharadita",
          name: "Perejil"
        },    
        {
          quantity:"1 cucharadita",
          name: "Tomillo"
        },
        {
          quantity:"2 cucharadas",
          name: "Salsa de soja"
        },
        {
          quantity:"100 gr",
          name: "Margarina"
        },
        {
          quantity:"50 gr",
          name: "Harina"
        },
        {
          quantity:"500 ml",
          name: "Leche de avena o soja sin endulzar"
        },
        {
          quantity:"",
          name: "Sal"
        },
        {
          quantity:"",
          name: "Pimienta"
        }             
      ]
  }
]


let fast_vegan_food = [
  {
    id: "xxxx",
    title: "Hamburguesa de lentejas y tofu",
    image: "src/hamb_lentejas_tofu.jpg",
    readyInMinutes: "60",
    steps:"1. Primero de todo hay que triturar el ajo, la cebolla, el orégano, el pimentón, la mostaza y la mitad de las lentejas. Lo más cómodo es usar una picadora, con la que tendréis que dar golpes secos y rápidos, para que no llegue a formarse una pasta de tipo puré. Si no disponéis de picadora, lo que podéis hacer es cortar la cebolla y los ajos bien finitos, chafar un poco las lentejas y mezclarlo todo con el resto de ingredientes. 2. A continuación, rallamos el tofu y lo añadimos  a los ingredientes que hemos picado con anterioridad, junto con el resto de las lentejas, el pan rallado y un poco de sal y pimienta. Mezclaremos bien hasta obtener una masa uniforme y compacta, con la que poder dar forma a nuestras hamburguesas.3.Una vez hemos dado forma a cada hamburguesa (cada una debería pesar entre 150 y 200 gr.), las pasaremos por la plancha con un poco de aceite hasta que estén bien doradas por cada lado. En este caso hemos acompañado la hamburguesa con pimientos del piquillo y aguacate, aunque vosotros podéis probar vuestras propias combinaciones.",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: false,
    winter: true,
    fall: false,
    spring: true,

    category: [
      "lunch",
      "dinner",
      "fast vegan food",
      ],

      ingredients : [
        {quantity:"400 gr",
          name: "Lentejas cocidas"
        },
        {
          quantity:"275 gr",
          name: "Tofu"
        },
        {
          quantity:"70 gr",
          name: "Pan rallado"
        },
        {
          quantity:"2",
          name: "Dientes de ajo"
        },
        {
          quantity:"1",
          name: "Cebolla"
        },
        {
          quantity:"1 cucharadita",
          name: "Mostaza"
        },
        {
          quantity:"1 cucharadita",
          name: "Orégano"
        },
        {
          quantity:"",
          name: "Aceite de oliva"
        },
        {
          quantity:"",
          name: "Sal"
        },
        {
          quantity:"",
          name: "Pimienta"
        }
      ]    
  },
  {
    id: "xxxx",
    title: "Hamburguesa de soja texturizada y puerros",
    image: "src/hamb_soja_puerros.jpg",
    readyInMinutes: "60",
    steps: "Mezcla en un bol todos los ingredientes secos, añade el agua, mézclalo bien, tápalo y déjalo reposar 30 minutos. Remueve la masa, forma las hamburguesas de tamaño mediano (como con 2 cucharadas de masa), prensándolas bien con las manos o con un molde y hazlas a la plancha con un poco de aceite, a fuego medio, unos 4 minutos por cada lado",
    vegan: false,
    vegetarian: true,
    healthy: true,
    summer: false,
    winter: true,
    fall: false,
    spring: true,

    category: [
      "lunch",
      "dinner",
      "fast vegan food",
      ],

      ingredients : [
        {quantity:"1 taza",
          name: "Soja texturizada fina"
        },
        {
          quantity:"1/2",
          name: "Puerro mediano"
        },
        {
          quantity:"2 cucharadas",
          name: "Salsa de soja"
        },
        {
          quantity:"4 cucharadas",
          name: "Avena en copos"
        },
        {
          quantity:"1/2 taza",
          name: "Agua"
        },
        {
          quantity:"1/4 de cucharada",
          name: "Ajo en polvo"
        },
        {
          quantity:"1/4 de cucharada",
          name: "Tomillo"
        },
        {
          quantity:"1/4 de cucharada",
          name: "Hierbabuena"
        },
        {
          quantity:"",
          name: "Aceite de oliva"
        },
        {
          quantity:"1",
          name: "Huevo"
        }
      ]    
  },
  {
    id: "xxxx",
    title: "Hamburguesa de tofu, quinoa y verduras",
    image: "src/hamb_tofu_quinoa.jpg",
    readyInMinutes: "25",
    steps: "En un bol desmenuza el tofu con las manos, añade la quinoa y machácalo todo junto con un tenedor. Pica finos los pimientos, champiñones, zanahoria y cebolla y añádelo, mezclando muy bien.Agrega el resto de ingredientes y mézclalo muy bien. Amásalo a mano y si al formar hamburguesas se desmoronan, añade un poco más de harina y mezcla muy bien de nuevo.Haz las hamburguesas un poco gruesas, con 2 cucharadas y un poco más de masa. 5. Dóralas a la plancha con una pizca de aceite, a fuego medio-bajo, unos 5 minutos por cada lado.",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: false,
    winter: true,
    fall: false,
    spring: true,

    category: [
      "lunch",
      "dinner",
      "fast vegan food",
      ],

      ingredients : [
        {quantity:"250 gr",
          name: "Tofu extra duro"
        },
        {
          quantity:"1 taza",
          name: "Quinoa"
        },
        {
          quantity:"2",
          name: "Pimientos del piquillo asados"
        },
        {
          quantity:"2",
          name: "Champiñones medianos"
        },
        {
          quantity:"1",
          name: "Zanahoria"
        },
        {
          quantity:"1/2",
          name: "Cebolla morada"
        },
        {
          quantity:"2 cucharadas",
          name: "Harina integral"
        },
        {
          quantity:"1/4 de cucharada",
          name: "Ajo en polvo"
        },
        {
          quantity:"1 cucharada",
          name: "Tahini"
        },
        {
          quantity:"2 cucharadas",
          name: "Salsa de soja"
        },
        {
          quantity:"1/4 de cucharada",
          name: "Tomillo"
        },
        {
          quantity:"1/4 de cucharada",
          name: "Perejil"
        },
        {
          quantity:"1/4 de cucharada",
          name: "Cebollino"
        },
        {
          quantity:"",
          name: "Pimienta negra molida"
        },
        {
          quantity:"",
          name: "Aceite de oliva"
        },
      ]    
  },
  {
    id: "xxxx",
    title: "Hamburguesa de seitán con arroz",
    image: "src/hamb_seitan.jpg",
    readyInMinutes: "25",
    steps:"Mezcla en un bol el gluten con la avena, harina, ajo, tomillo, romero, pimentón y pimienta. Agrega el arroz, la salsa de soja, el vinagre y el agua, mézclalo y amásalo a mano unos minutos. Tápalo y déjalo reposar al menos media hora. Forma las hamburguesas aplastando bolas de masa, sin atender demasiado a la forma (lo importante es que sean más o menos del mismo grosor por todas partes). Hazlas a la plancha a fuego medio-bajo, tapadas, 5-6 minutos por cada lado.",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: false,
    winter: true,
    fall: false,
    spring: true,

    category: [
      "lunch",
      "dinner",
      "fast vegan food",
      ],

      ingredients : [
        {quantity:"1 taza",
          name: "Gluten de trigo"
        },
        {
          quantity:"1 taza",
          name: "Arroz integral"
        },
        {
          quantity:"2 cucharadas",
          name: "Avena en copos"
        },
        {
          quantity:"2 cucharadas",
          name: "Harina de arroz"
        },
        {
          quantity:"1/4 cucharadita",
          name: "Ajo en polvo"
        },
        {
          quantity:"1/4 cucharadita",
          name: "Tomillo"
        },
        {
          quantity:"1/4 cucharadita",
          name: "Romero"
        },
        {
          quantity:"1/2 cucharadita",
          name: "Pimentón ahumado"
        },
        {
          quantity:"Una pizca",
          name: "Pimienta negra molida"
        },
        {
          quantity:"3 cucharadas",
          name: "Salsa de soja"
        },
        {
          quantity:"1 cucharada",
          name: "Vinagre de arroz o manzana"
        },
        {
          quantity:"1 taza",
          name: "Agua"
        },
      ]    
  },
  {
    id: "xxxx",
    title: "Ketchup para las hamburguesas",
    image: "src/ketchup.jpg",
    readyInMinutes: "10",
    steps:"Mezcla en un bol el gluten con la avena, harina, ajo, tomillo, romero, pimentón y pimienta. Agrega el arroz, la salsa de soja, el vinagre y el agua, mézclalo y amásalo a mano unos minutos. Tápalo y déjalo reposar al menos media hora. Forma las hamburguesas aplastando bolas de masa, sin atender demasiado a la forma (lo importante es que sean más o menos del mismo grosor por todas partes). Hazlas a la plancha a fuego medio-bajo, tapadas, 5-6 minutos por cada lado.",
    vegan: true,
    vegetarian: true,
    healthy: true,
    summer: false,
    winter: true,
    fall: false,
    spring: true,

    category: [
      "lunch",
      "dinner",
      "fast vegan food",
      ],

      ingredients : [
        {quantity:"100 gr",
          name: "Tomates secos"
        },
        {
          quantity:"300 gr",
          name: "Tomate fresco"
        },
        {
          quantity:"1",
          name: "Diente de ajo"
        },
        {
          quantity:"1 cucharada",
          name: "Vinagre de manzana"
        },
        {
          quantity:"40 gr",
          name: "Cebolla fresca"
        },
        {
          quantity:"8",
          name: "Dátiles"
        },
        {
          quantity:"1 cucharadita",
          name: "Sal"
        }
      ]    
  }
]































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
      category: [
        "entrant", 
        "lunch", 
        "dinner"
      ],
      ingredients : [
        {
          quantity:"375 ml",
          name: "Leche de soja"
        },
        {
          quantity:"",
          name: "Sal"
        },
        {
          quantity:"",
          name: "Nuez moscada rallada"
        },
        {
          quantity:"160 gr",
          name: "Sémola"
        },
        {
          quantity:"6",
          name: "Tomates carnosos"
        },
        {
          quantity:"1",
          name: "Pepino"
        },
        {
          quantity:"1-2 cucharadas",
          name: "Vinagre de vino blanco"
        },
        {
          quantity:"6 cucharadas",
          name: "Aceite de oliva"
        },
        {
          quantity:"",
          name: "Pimienta"
        },
        {
          quantity:"",
          name: "Azúcar"
        },
        {
          quantity:"3 cucharadas",
          name: "Menta picada"
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
      category: [
        "entrant", 
        "lunch", 
        "dinner"
      ],
      ingredients : [
        {
          quantity:"50 gr",
          name: "Pistachos"
        },
        {
          quantity:"2",
          name: "Pomelos rosas"
        },
        {
          quantity:"2",
          name: "Aguacates"
        },
        {
          quantity:"1",
          name: "Guindilla roja fresca"
        },
        {
          quantity:"1",
          name: "Chalote"
        },
        {
          quantity:"2 cucharadas",
          name: "Vinagre de vino blanco"
        },             
        {
          quantity:"",
          name: "Sal"
        },
        {
          quantity:"",
          name: "Pimienta"
        },
        {
          quantity:"2 cucharadas",
          name: "Aceite de girasol"
        },
        {
          quantity:"100 gr",
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
    category: [
        "entrant", 
        "lunch", 
        "dinner"
      ],
    ingredients : [
      {
        quantity:"3",
        name: "Pimientos verdes"
      },
      {
        quantity:"2",
        name: "Berenjenas"
      },
      {
        quantity:"1 cucharada",
        name: "Vinagre de fruta"
      },
      {
        quantity:"",
        name: "Sal"
      },
      {
        quantity:"150 ml",
        name: "Aceite vegetal"
      },
      {
        quantity:"1/2",
        name: "Limón confitado a la sal"
      },
      {
        quantity:"150 gr",
        name: "Aceitunas verdes deshuesadas"
      },
      {
        quantity:"2 cucharadas",
        name: "Aceite de oliva"
      },
      {
        quantity:"",
        name: "El zumo de 1 limón"
      },
      {
        quantity:"",
        name: "Pimienta"
      },
      {
        quantity:"1 cucharada",
        name: "Perejil recién picado"
      },
      {
        quantity:"2 kg",
        name: "Limones de cultivo"
      },
      {
        quantity:"500 gr",
        name: "Sal marina gorda"
      },
      {
        quantity:"",
        name: "Aceite"
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
    category: [
      "entrant", "lunch", "dinner"
    ],
    ingredients : [
      {
        quantity:"3",
        name: "Pepino"
      },
      {
        quantity:"100 gr",
        name: "Cacahuetes con sal"
      },
      {
        quantity:"1",
        name: "Cebolla"
      },
      {
        quantity:"3",
        name: "Dientes de ajo"
      },
      {
        quantity:"2 cucharadaS",
        name: "Aceite de cacahuete"
      },
      {
        quantity:"",
        name: "Salsa de soja"
      },
      {
        quantity:"",
        name: "Sal"
      },
      {
        quantity:"",
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
        quantity:"4",
        name: "Calabacines"
      },
      {
        quantity:"",
        name: "Sal"
      },
      {
        quantity:"",
        name: "Pimienta"
      },
      {
        quantity:"10 cucharadas",
        name: "Aceite de oliva"
      },
      {
        quantity:"4",
        name: "Tomates"
      },
      {
        quantity:"2",
        name: "Cebolletas"
      },
      {
        quantity:"1 manojo",
        name: "Tomillo fresco"
      },
      {
        quantity:"100 g",
        name: "Anacardos"
      },
      {
        quantity:"1",
        name: "Achicoria"
      },
      {
        quantity:"4 cucharadas",
        name: "Vinagre balsámico"
      }
    ]
  },
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
    category: [
      "entrant", 
      "lunch", 
      "dinner"
    ],
    ingredients : [
      {
        quantity:"75 g",
        name: "Arroz salvaje"
      },
      {
        quantity:"1/2",
        name: "Manzana mediana"
      },
      {
        quantity:"1/2",
        name: "Pimiento verde"
      },
      {
        quantity:"1/2",
        name: "Rama de apio"
      },
      {
        quantity:"59 g",
        name: "Orejones de albaricoque"
      },
      {
        quantity:"2 cucharadas",
        name: "Salsa de soja"
      },
      {
        quantity:"2 cucharadas",
        name: "Azúcar"
      },
      {
        quantity:"2 cucharadas",
        name: "Vinagre de fruta"
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
    steps: "1 Precaliente el horno a 220°C. Forre la bandeja con papel vegetal. Pique bien los orejones y méz- clelos con la mantequilla, el mazapán y la avellana. 2 Pele las manzanas y frótelas enseguida con el zumo de limón. Quíteles el corazón con un des- corazonador. Agrande un poco los agujeros y relléne- los con la mezcla de mazapán y avellana. Mezcle el azúcar moreno con la canela y reboce las manzanas con esta mezcla. 3 Ponga las manzanas en la bandeja y hornéelas unos 20 minutos, hasta que estén tiernas y ca- ramelizadas. Monte la nata con el azúcar avainillado y repártala en cuencos de postre. Ponga las manzanas encima y sírvalas enseguida.",
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
          name: "Orejones de albaricoque"
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
          name: "Avellana molida"
        },
        {
          quantity:"4 unidades",
          name: "Manzanas ácidas"
        },
        {
          quantity:"1 cucharada",
          name: "Zumo de limón"
        },
        {
          quantity:"6 cucharadas",
          name: "azúcar moreno"
        },
        {
          quantity:"1/2 cucharada",
          name: "Canela"
        },
        {
          quantity:"200 ml",
          name: "Nata vegana"
        },
        {
        quantity:"1 sobre",
        name: "Azúcar avainillado"
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
    summer: true,
    winter: true,
    fall: true,
    spring: true,
    category: [entrant, lunch, dinner],
    ingredients : [
    {
    quantity:"400 ml",
    name: "Leche de almendras"
    },
    {
    quantity:"4 cucharadas",
    name: "Mus de cacahuetes salados"
    },
    {
    quantity:"50 ml",
    name: "Jarabe de agave"
    },
    {
    quantity:"60 gr",
    name: "Mantequilla vegana"
    },
    {
    quantity:"1 vaina",
    name: "Vainilla"
    },
    {
    quantity:"90 gr",
    name: "Chocolate negro vegano"
    },
    {
    quantity:"3 cucharaditas",
    name: "Cacao en polvo"
    },
    {
    quantity:"13 gr",
    name: "Azúcar"
    },
    {
    quantity:"30 gr",
    name: "Cacahuetes con sal"
    },                                                     },
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
    summer: true,
    winter: false,
    fall: false,
    spring: true,
    category: [entrant, lunch, dinner],
    ingredients : [
    {
    quantity:"150 gr",
    name: "Azúcar"
    },
    {
    quantity:"2 manojos",
    name: "Menta"
    },
    {
    quantity:"1/2",
    name: "Limón"
    },
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
    quantity:"60 gr",
    name: "Mantequilla vegana"
    },
    {
    quantity:"125 gr",
    name: "Azúcar de caña"
    },
    {
    quantity:"2 cucharadas",
    name: "Almidón"
    },
    {
    quantity:"150 gr",
    name: "Sémola"
    },
    {
    quantity:"250 gr",
    name: "Leche de almendras"
    },
    {
    quantity:"150 gr",
    name: "Harina"
    },
    {
    quantity:"4 cucharadas pequeñas",
    name: "Levadura en polvo"
    },
    {
    quantity:"500 gr",
    name: "Frambuesas"
    },
    {
    quantity:"Mantequilla vegana, para untar",
    name: "Aceite de oliva"
     },
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
    summer: true,
    winter: false,
    fall: false,
    spring: true,
    category: [entrant, lunch, dinner],
    ingredients : [

       {
               quantity:"3 unidades",
               name: "plátanos maduros"
           },

       {
               quantity:"1 cucharada",
               name: "zumo de limón"
           },
        {
                quantity:"200 g",
                name: "mus de anacardos"
            },

        {
                quantity:"50 ml",
                name: "jarabe de agave"
            },
        {
                quantity:"50 ml",
                name: "leche de coco"
            },
       {
               quantity:"1 vaina",
               name: "Vainilla"
           },
           {
                   quantity:"50 gr",
                   name: "Cacao en polvo orgánico"
               },
      }

    ]
  }
]