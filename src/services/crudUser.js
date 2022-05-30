import { collection, addDoc, setDoc, getDoc, doc } from "firebase/firestore";
import { bbdd } from "./firebase";


/* import { useRouter } from "vue-router"; */

/* const router = useRouter(); */
/* console.log(router); */

export const addUpdUser = async (pitayuser) => {

    const { uid } = pitayuser;
    console.log(uid);
    console.log("Creando Pitayero");
    try {
        await setDoc(doc(bbdd, "Users", uid), pitayuser);
    }
    catch (error) {
        console.error("No se ha podido añadir el documento de usuario", error);
    }
}

export const obtainUser = async (pitayuser) => {
    const docRef = doc(bbdd, "Users", pitayuser.uid);
    const docSnap = await getDoc(docRef);

    if (docSnap.exists()) {
        return docSnap.data();
    }
}