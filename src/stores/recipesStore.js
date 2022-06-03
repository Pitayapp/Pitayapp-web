/* import router from '../router'; */
import { defineStore } from 'pinia';
import { addRecipe } from '../services/crudRecipes';
/* import { auth } from "../services/firebase"; */
/* import { addUpdRecipe, obtainRecipe } from '../services/crudRecipes'; */
/* import { bigAlerts } from '../libraries/alert'; */

export const useRecipeStore = defineStore("recipeStore", {

    state: () => ({
        recipe: null,
    }),

    actions: {
        async createNewRecipe(recipe) {
            const newRecipe = {
                uid: recipe.uid,
                name: recipe.title,
                ingredients: recipe.ingredients,
                timer: recipe.time,
                desc: recipe.description,
                image: recipe.photoURL,
            }
            try {
                await addRecipe(newRecipe);
            } catch (error) {
                console.error(error);
            }
        }
    },
});