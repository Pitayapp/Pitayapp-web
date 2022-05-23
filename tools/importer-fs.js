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
