import { collection, addDoc } from "firebase/firestore";
import { bbdd } from "./firebase";
/* import { useRouter } from "vue-router"; */

/* const router = useRouter(); */
/* console.log(router); */

export const createUser = async (email, pass) => {
    console.log("Creando Usuario");
    const addUser = await addDoc(collection(bbdd, "Users"), {
        email: email,
        pass: pass
    });
    /* router.push("/home"); */
    console.log("Usuario escrito con ID automático: ", addUser.id)
}

/* export const deleteUser = async() => {
    const deleteUser = await deleteDoc(doc(bbdd, ""));
} */