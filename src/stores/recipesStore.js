import router from '../router';
import { defineStore } from "pinia";
import { auth } from "../services/firebase";


export const useRecipeStore = defineStore("recipeStore", {

    state: () => ({
        recipe: null,
    }),

    /* getters: {

    }, */

    actions: {

        setRecipe(recipe) {
            this.recipe = recipe;
        },

        async createNewRecipe(recipe) {
            const newUser = {
                name: recipe.uid,
                category: recipe.category,
                image: recipe.photoURL,
                ingredients: recipe.ingredients
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
                        hugeAlerts("wrong", "Usuario no encontrado", "El usuario que ha introducido no existe.");
                        break;
                    case "auth/wrong-password":
                        hugeAlerts("wrong", "Contraseña incorrecta", "La contraseña introducida no es correcta. Pruebe a poner una distinta. :)")

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