import router from '../router';
import { defineStore } from "pinia";
import { auth } from "../services/firebase";
import { addUpdUser, obtainUser } from '../services/crudUser';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, signOut } from 'firebase/auth';
import { bigAlerts, littleAlerts } from '../libraries/alert';


export const useUserStore = defineStore("userStore", {

    state: () => ({
        user: null,
    }),

    /* getters: {

    }, */

    actions: {

        setUser(user) {
            this.user = user;
        },

        resetUser() { //CleanUser
            this.user = null;
        },

        async createNewUser(user) {
            const newUser = {
                uid: user.uid,
                name: user.displayName,
                email: user.email,
                image: user.photoURL,
                //recipes: []
            }
            try {
                await addUpdUser(newUser);
            } catch (error) {
                console.error(error);
            }
        },

        async registerUser(data) {
            const { email, password } = data;
            try {
                await createUserWithEmailAndPassword(auth, email, password)
            } catch (error) {
                switch (error.code) {
                    case "auth/invalid-email":
                        bigAlerts("wrong", "El email que ha insertado es incorrecto", "Introduzca un email válido.");
                        break;

                    case "auth/email-already-in-use":
                        bigAlerts("wrong", "Email en uso", "Pruebe a usar uno distinto.");
                        break;

                    case "auth/weak-password":
                        bigAlerts("wrong", "Contraseña debil", "Debe contener al menos 6 carácteres");
                        break;
                    default:
                        console.error(error);
                        break;
                }
                return
            }
            bigAlerts("success", "Registrado correctamente", "Disfruta de nuestra web :)");
            this.createNewUser(auth.currentUser);
            router.push("/home");
        },

        async enterWithGoogle() {
            let userG = null;
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider)
            userG = await obtainUser(auth.currentUser);

            if (!userG) {
                this.createNewUser(auth.currentUser); //Acordarme que ya hace el Add del User
                userG = await obtainUser(auth.currentUser);
            }
            this.setUser(userG);
            router.push("/home");
        },

        async loginUser(data) {
            const { email, password } = data;
            try {
                await signInWithEmailAndPassword(auth, email, password)
            } catch (error) {
                switch (error.code) {
                    case "auth/user-not-found":
                        bigAlerts("wrong", "Usuario no encontrado", "El usuario que ha introducido no existe.");
                        break;
                    case "auth/wrong-password":
                        bigAlerts("wrong", "Contraseña incorrecta", "La contraseña introducida no es correcta. Pruebe a poner una distinta. :)")
                        break;
                    default:
                        console.error(error);
                        break;
                }
                return
            }
            try {
                const user = await obtainUser(auth.currentUser);
                this.setUser(user);
                router.push("/home");
                littleAlerts("opened");
            } catch (error) {
                return bigAlerts("wrong", "El usuario no existe", "Pruebe a poner un correo y contraseña correctos.");
            }
        },

        async logOut() {
            await signOut(auth);
            this.resetUser();
            router.push("/");
            littleAlerts("closed");
        }

    },
});