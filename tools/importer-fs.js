/**
 * @see https://firebase.google.com/docs/reference/js/firestore_lite
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, setDoc, doc} from 'firebase/firestore/lite';
import 'dotenv/config'
import * as fs from 'fs'; //file system -movies json-


const firebaseConfig = {
  apiKey: process.env['API_KEY'] || 'API_KEY_VACIA',
  authDomain: process.env['AUTH_DOMAIN'] || 'AUTH_DOMAIN_VACIO',
  projectId: process.env['PROJECT_ID'] || 'PROJECT_ID_VACIO'
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
let data = null;

fs.readFile("./tools/recipes.json", "utf8", (err, response) => {

  if (err) {
    console.error(err);
    return;
  }

  // En data tenemos los objetos del JSON de películas
  data = JSON.parse(response);
  data = data.recipes;

  /**
   * Los parámetros de doc pueden ser multi nivel (ej "movies", "2020", ... , objecto (o { atributos: valores })) STRING!
   * El último parámetro, antes de los valores del objeto, es la referencia del objeto (el id)
   *for(let movie of data){
    const title = movie.title;
    delete movie.title;
    setDoc(doc(db, "movies", title), movie);
  }
   */
  for(let recipe of data){
    const title = recipe.title;
    delete recipe.title;
    setDoc(doc(db, "recipes", title), recipe);
  }

});
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCoQsUSujAxn2wZbrj812d8LRMuPvqKD9A",
  authDomain: "test-pitayapp.firebaseapp.com",
  projectId: "test-pitayapp",
  storageBucket: "test-pitayapp.appspot.com",
  messagingSenderId: "899191902557",
  appId: "1:899191902557:web:9cdf268e2ee25c6f4358b4"
};

// Initialize Firebase
firebase.initializeApp(config);
const db = firebase.firestore();
const selection = db.collection('usuarios');

new Vue({
  el: '#main',
  data: {
    name: null,
    age: null,
    users: []
  },
  mounted(){
    this.users=[]
    collection.get()
    .then( (r)) => r.docs.map( (item)) => this.users.push({id:item.id, data:item.data()});
  }
})
