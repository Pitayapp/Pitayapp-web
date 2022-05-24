<script>
export default {
  name: "UploadView",

  data() {
    return {
      url: null,
      username: "nombreusuario",
      categories: [
        {
          name: "Vegana",
        },
        {
          name: "Smoothie",
        },
        {
          name: "Cremas/sopas",
        },
        {
          name: "Pastas",
        },
        {
          name: "Postres",
        },
        {
          name: "Fast food",
        },
        {
          name: "Vegetariana",
        },
      ],
    };
  },
  methods: {
    onFileChange(e) {
      const file = e.target.files[0];
      console.log(file);
      this.url = URL.createObjectURL(file);
    },
  },
};
</script>



<template>
  <main class="upload-view">
    <div class="top-container">
      <div class="title">
        <h1>Sube tu receta</h1>
      </div>
      <div class="input-recipe-textbox">
        <input
          type="text"
          placeholder="    Nombre de tu receta"
          class="name-input-bar"
        />
      </div>
      <div class="image">
        <h4>Imágenes</h4>
        <div class="upload-image">
          <input
            type="file"
            name="imagen"
            class="input-file"
            @change="onFileChange"
          />
          <div id="preview">
            <img
              v-if="url == null"
              src="../assets/svg/imageupload.svg"
              alt=""
            />
            <img v-if="url" :src="url" />
          </div>
          <p v-if="url == null">
            Pincha en el recuadro para agregar una imagen
          </p>
        </div>
        <div class="categories">
          <div
            v-for="(category, i) in categories"
            :key="i"
            class="categories-recipes"
          >
            <button class="title">{{ category.name }}</button>
          </div>
        </div>
        <div class="ingredients">
          <h4>Ingredientes</h4>
          <div class="list-ingredientes"></div>
          <div class="add-ingredient">
            <input
              type="text"
              placeholder="  Introduce aquí cada ingrediente"
            />
            <button>Añadir</button>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>



<style lang="scss" scoped>
body {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;

  .upload-view {
    width: 100vw;
    height: 100vh;
    margin-bottom: 6rem;

    & .top-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      padding: 8% 5% 5% 5%;
      justify-content: flex-start;
      gap: 1.5rem;

      & .input-recipe-textbox {
        width: 100%;
        height: 2.5rem;
        display: flex;
        justify-content: flex;
        align-items: center;
        background-color: white;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
        border-radius: 30px;

        .name-input-bar {
          width: 100%;
          height: 1.5rem;
          border-radius: 15px;
          border: 0;
          background-color: white;
        }

        & input::placeholder {
          font-size: 0.8rem;
        }
      }
      & .categories {
        margin-top: 2rem;
        display: grid;
        grid-template-columns: 33% 33% 33%;
        grid-row-gap: 0.5rem;
        border-radius: 30px;
        font-size: 1rem;
        place-items: center;

        & button {
          background-color: #f9458e;
          color: white;
          width: 6rem;
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
          border-radius: 15px;
          border: none;
          height: 1.5rem;
        }
      }
      & .upload-image {
        background-color: white;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
        border-radius: 30px;
        color: dimgray;
        min-height: 200px; /* minimum height */
        cursor: pointer;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        margin-top: 1rem;
        height: 8rem;
        width: 100%;
        & .input-file {
          opacity: 0; /* invisible but it's there! */
          width: 100%;
          height: 200px;
          position: absolute;
          cursor: pointer;
        }
      }
      & #preview {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 200px;
        height: 200px;

        & img {
          max-width: 100%;
          max-height: 100%;
        }
      }
      & p {
        margin-bottom: 2rem;
      }
    }

    & .ingredients {
      margin-top: 1rem;
      &.list-ingredientes {
        width: 100%;
        height: 100%;
      }

      & .add-ingredient {
        display: flex;
        justify-content: space-around;
        margin-top: 0.5rem;

        & input {
          width: 60%;
          height: 2rem;
          display: flex;
          justify-content: flex;
          align-items: center;
          background-color: white;
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
          border-radius: 30px;
          border: none;
        }

        & button {
          background-color: #f9458e;
          color: white;
          width: 6rem;
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
          border-radius: 15px;
          border: none;
          height: 2rem;
        }
      }
    }
  }
}
</style>
