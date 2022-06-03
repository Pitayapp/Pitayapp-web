<script>
import RecipeCard from "@/components/RecipeCard.vue";
import sourceData from "@/assets/db/recipes.json";

export default {
  data() {
    return {
      recipe: null,
      moreRecipes: [],
    };
  },
  components: {
    RecipeCard,
  },
  methods: {
    initData() {
      this.recipe = sourceData.recipes[parseInt(this.$route.params.id - 1)];
      this.recipe["tags"] = this.getTags(this.recipe);
      this.addMoreRecipes();
    },
    addMoreRecipes() {
      this.moreRecipes.push(this.getRandomRecipe());
      this.moreRecipes.push(this.getRandomRecipe());
    },
    getTags(field) {
      if (field === null) {
        return;
      }
      let tags = [];
      field["vegan"] ? tags.push("vegan") : false;
      field["vegetarian"] ? tags.push("vegetarian") : false;
      field["healthy"] ? tags.push("healthy") : false;
      field["summer"] ? tags.push("summer") : false;
      field["winter"] ? tags.push("winter") : false;
      field["fall"] ? tags.push("fall") : false;
      field["spring"] ? tags.push("spring") : false;
      return tags;
    },
    getRandomRecipe() {
      const count = Object.keys(sourceData.recipes).length;
      const random = Math.round(Math.random() * count);
      const recipe = sourceData.recipes[parseInt(random - 1)];
      const recipeToPush = {};
      recipeToPush["title"] = recipe.title;
      recipeToPush["filename"] = recipe.image;
      recipeToPush["readyInMinutes"] = parseInt(recipe.readyInMinutes);
      recipeToPush["tags"] = this.getTags(recipe);
      recipeToPush["message"] =
        "Prepara tus recetas favoritas y disfruta los viernes por la noche";
      return recipeToPush;
    },
  },
  created() {
    this.initData();
  },
};
</script>

<template>
  <main v-if="recipe" class="recipe-view">
    <div class="container">
      <div class="left-container">
        <div class="title">
          <h1>{{ recipe.title }}</h1>
          <span v-if="recipe.author"> por {{ recipe.author }}</span
          ><span v-else />
        </div>
        <img class="image" v-bind:src="recipe.image" :alt="[recipe.title]" />
        <h2>Tags</h2>
        <div class="tags">
          <label class="tags_label" v-for="item in recipe.tags" :key="item">
            {{ item }}
          </label>
        </div>
        <h2>Ingredientes</h2>
        <div class="ingredients">
          <label
            class="ingredients_label"
            v-for="item in recipe.ingredients"
            :key="item.name"
          >
            {{ item.name }}
          </label>
        </div>
        <h2>Preparación</h2>
        <div class="pasos">
          <p>{{ recipe.steps }}</p>
        </div>
      </div>
      <div class="right-container">
        <h1>Más recetas</h1>
        <RecipeCard
          v-for="recipe in moreRecipes"
          :key="recipe.title"
          :title="recipe.title"
          :filename="recipe.filename"
          :readyInMinutes="recipe.readyInMinutes"
          :tags="recipe.tags"
          :message="recipe.message"
        />
        <div class="buttons-submit">
          <RouterLink class="router-link" to="/upload">
            <button>+ Subir nueva receta</button>
          </RouterLink>
        </div>
      </div>
    </div>
  </main>
</template>

<style scoped>
.route-center-from {
  opacity: 0;
  transform: translateX(50px);
}

.route-enter-active {
  transition: all 0.4s ease-in;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

.route-leave-active {
  transition: all 0.4s ease-out;
}
</style>

<style lang="scss" scoped>
// TODO: Falta añadir la vista para el móvil
@media (max-width: 800px) {
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;

    .recipe-view {
      width: 100vw;
      height: 100%;
    }

    & .container {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      padding: 8% 5% 8% 5%;
      justify-content: flex-start;
      gap: 1.5rem;

      .left-container {
        margin: 1rem 0 6rem 0;
        width: 100%;
        height: 50%;
        display: flex;
        flex-direction: column;
        box-sizing: border-box;

        & .title {
          display: flex;
          justify-content: center;

          & h1 {
            font-size: 2rem;
            text-align: center;
          }

          & span {
            display: none;
          }
        }
        & h2 {
          margin-top: 0.8rem;
          margin-bottom: 0.5rem;

          & .image {
            width: 95%;
            display: flex;
            justify-content: center;
            margin-left: 0.5rem;
            margin-top: 0.5rem;
            object-fit: cover;
            height: 90%;
            border-radius: 20px;
          }
        }
        & .tags {
          display: flex;
          flex-wrap: wrap;
          justify-content: center;

          & label {
            font-size: 1rem;
            background: #f9458e;
            color: #ffffff;
          }

          & .tags_label {
            margin: 2px;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 20px;
            padding: 0.8rem 1.2rem;
            width: fit-content;
            height: 1.2rem;
            font-weight: 500;
            font-size: 0.8rem;
          }
        }

        & .ingredients {
          display: flex;
          flex-wrap: wrap;
          justify-content: space-between;

          & .ingredients_label {
            margin: 2px;
            display: flex;
            align-items: center;
            justify-content: center;
            border-radius: 20px;
            padding: 0.8rem 1.2rem;
            width: fit-content;
            height: 1.2rem;
            font-weight: 500;
            font-size: 0.8rem;
          }

          & label {
            background: #ffffff;
            color: gray;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
          }
        }

        & .pasos {
          margin-bottom: 10rem;
          box-sizing: content-box;
          text-align: justify;
        }
      }
      & .right-container {
        display: none;
      }
    }
  }
}

@media (min-width: 800px) {
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;

    .recipe-view {
      width: 100vw;
      height: 100vh;

      .container {
        height: 100%;
        width: 100%;
        display: grid;
        grid-template-columns: 60% 40%;
        row-gap: 50px;
        /* padding: 6rem 0 0 6rem; */
        position: absolute;
        top: 5.5rem;
        left: 6.5rem;
        width: 94%;
        height: 90%;
        box-sizing: border-box;

        .left-container {
          width: 100%;
          height: 100%;
          display: flex;
          row-gap: 10px;
          flex-direction: column;
          /* margin: 2rem 0 0 4rem; */
          padding: 2rem;
          justify-content: space-between;
          box-sizing: border-box;

          & div {
            display: flex;
            align-items: center;

            & span {
              display: none;
            }
          }

          & .image {
            width: 100%;
            object-fit: cover;
            height: 250px;
            border-radius: 20px;
            overflow: hidden;
            background-position-y: center;
          }

          & label {
            margin: 5px;
            display: flex;
            justify-content: start;
            align-items: center;
            border-radius: 30px;
            padding: 10px 20px;
            width: fit-content;
            height: 30px;
            font-weight: 500;
            font-size: 0.8rem;
          }

          & .tags {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;

            & label {
              background: #f9458e;
              color: #ffffff;
              font-weight: 800;
            }
          }

          & .ingredients {
            display: flex;
            flex-wrap: wrap;
            justify-content: flex-start;

            & label {
              background: #ffffff;
              color: gray;
              box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
            }
          }

          & p {
            text-align: justify;
          }
        }

        & .right-container {
          width: 100%;
          height: 100%;
          display: flex;
          row-gap: 10px;
          flex-direction: column;
          /* margin: 2rem 0 0 1rem;
          padding: 0 6rem 0 0; */
          justify-content: center;
          align-items: center;
          box-sizing: border-box;

          .card-container{
            margin: 1rem;
          }

          .buttons-submit {
            display: flex;
            align-items: center;
            gap: 20px;
            margin: 20px auto;

            button {
              background: var(--primary);
              border-radius: 10px;
              border-color: transparent;
              font-size: 1rem;
              font-weight: bold;
              color: var(--secondary);
              width: 200px;
              height: 40px;
              transition: all 1s;

              &:hover {
                transition: all 1s;
                background: #b83268;
                cursor: pointer;
              }
            }
          }
        }
      }
    }
  }
}
</style>
