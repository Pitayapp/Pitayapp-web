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

// Update recipe object
let recipe = []

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