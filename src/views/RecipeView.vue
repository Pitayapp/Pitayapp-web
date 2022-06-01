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
        <div>
          <h1 class="title">{{ recipe.title }}</h1>
          <span v-if="recipe.author"> por {{ recipe.author }}</span
          ><span v-else />
        </div>
        <img class="image" v-bind:src="recipe.image" :alt="[recipe.title]" />
        <h2>Tags</h2>
        <div class="tags">
          <label v-for="item in recipe.tags" :key="item">
            {{ item }}
          </label>
        </div>
        <h2>Ingredientes</h2>
        <div class="ingredients">
          <label v-for="item in recipe.ingredients" :key="item.name">
            {{ item.name }}
          </label>
        </div>
        <h2>Preparación</h2>
        <p>{{ recipe.steps }}</p>
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
        padding: 6rem 0 0 6rem;
        box-sizing: border-box;

        .left-container {
          width: 100%;
          height: 100%;
          display: flex;
          row-gap: 10px;
          flex-direction: column;
          margin: 2rem 0 0 4rem;
          padding: 0 6rem 0 0;
          box-sizing: border-box;

          & div {
            display: flex;
            align-items: center;

            & span {
              color: #979797;
              font-weight: 700;
              font-size: 1.2rem;
              margin-left: 20px;
              margin-top: 5px;
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
          height: 80%;
          display: flex;
          row-gap: 10px;
          flex-direction: column;
          margin: 2rem 0 0 1rem;
          padding: 0 6rem 0 0;
          box-sizing: border-box;

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

              &:hover {
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
