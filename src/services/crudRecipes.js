import { collection, addDoc, setDoc, getDoc, doc } from "firebase/firestore";
import { bbdd } from "./firebase";


export const addRecipe = async (recipeyapp) => {

    const { uid } = recipeyapp;
    console.log(uid);
    console.log("Creando Pitayero");
    try {
        await setDoc(doc(bbdd, "Users", uid), recipeyapp);
    }
    catch (error) {
        console.error("No se ha podido añadir el documento de usuario", error);
    }
}

export const obtainRecipes = async (pitayuser) => {
    const docRef = doc(bbdd, "recipes", pitayuser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    }
}
