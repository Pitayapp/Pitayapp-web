/**
 * @see https://firebase.google.com/docs/reference/js/firestore_lite
 */

import { initializeApp } from 'firebase/app';
import { getFirestore, collection, getDocs, setDoc, doc} from 'firebase/firestore/lite';
import 'dotenv/config'
import * as fs from 'fs'; //file system -movies json-
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_API_KEY,
  authDomain: import.meta.env.VITE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_APP_ID
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
