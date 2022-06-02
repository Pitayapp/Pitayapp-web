import { setDoc, getDoc, doc, addDoc, deleteDoc } from "firebase/firestore";
import { bbdd } from "./firebase";

export const addRecipe = async (recipe) => {
    try {
        await addDoc(doc(bbdd, "Recipes"), recipe);
    } catch (error) {
        console.error("No se ha podido añadir el documento de la receta", error);
    }
}

export const updRecipe = async (recipe) => {

    const { uid } = recipe;
    try {
        await setDoc(doc(bbdd, "Recipes", uid), recipe);
    }
    catch (error) {
        console.error("No se ha podido actualizar el documento de la receta", error);
    }
}

export const obtainRecipe = async (recipe) => {
    const docRef = doc(bbdd, "Recipes", recipe.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    }
}

export const deleteRecipe = async (recipe) => {

    const { uid } = recipe;

    try {
        await deleteDoc(doc(bbdd, "Recipes", uid));
    }
    catch (error) {
        console.error("No se ha podido borrar la receta (documento)");
    }
}
