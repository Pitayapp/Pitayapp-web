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
        <input type="text" placeholder="    Nombre de tu receta" class="name-input-bar" />
      </div>
      <div class="image">
        <h4>Imágenes</h4>
        <div class="upload-image">
          <input type="file" name="imagen" class="input-file" @change="onFileChange" />
          <div id="preview">
            <img v-if="url == null" src="../assets/svg/imageupload.svg" alt="" />
            <img v-if="url" :src="url" />
          </div>
          <p v-if="url == null">
            Pincha en el recuadro para agregar una imagen
          </p>
        </div>
      </div>
      <div class="categories">
        <div v-for="(category, i) in categories" :key="i" class="categories-recipes">
          <button class="title">{{ category.name }}</button>
        </div>
      </div>
      <div class="ingredients">
        <h4>Ingredientes</h4>
        <div class="list-ingredientes"></div>
        <div class="add-ingredient">
          <input type="text" placeholder="Introduce aquí cada ingrediente" />
          <button>Añadir</button>
        </div>
      </div>
      <div class="time">
        <h4>Tiempo de preparación</h4>
        <div class="time-set">
          <input type="number" id="number" value="10" min="10" max="120" />
        </div>
      </div>
      <div class="preparation">
        <h4>Descripción</h4>
        <div class="steps-preparation">
          <!-- Aqui falta ver como meter el {{message}} https://es.vuejs.org/v2/guide/forms.html -->
          <textarea class="boxtext" v-model="preparationSteps" placeholder="Escribe aquí tu receta" rows="10"
            columns="5"></textarea>
        </div>
      </div>
      <div class="upload">
        <button class="upload-button">Subir receta</button>
      </div>
    </div>
    <div class="desktop-container">
      <div class="image">
        <div class="upload-image">
          <input type="file" name="imagen" class="input-file" @change="onFileChange" />
          <div id="preview">
            <img v-if="url == null" src="../assets/svg/imageuploadbig.svg" alt="" />
            <img v-if="url" :src="url" />
            <p v-if="url == null">
              Pincha en el recuadro para agregar una imagen
            </p>
          </div>
        </div>
      </div>
      <div class="upload">
        <button class="upload-button">Subir receta</button>
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
    margin-bottom: 20rem;

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
      min-height: 200px;
      /* minimum height */
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      margin-top: 1rem;
      height: 8rem;
      width: 100%;

      & .input-file {
        opacity: 0;
        /* invisible but it's there! */
        width: 100%;
        height: 150px;
        position: absolute;
        cursor: pointer;
      }

      & #preview {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 150px;
        height: 150px;

        & img {
          max-width: 100%;
          max-height: 100%;
        }

        & p {
          justify-content: center;
          text-align: center;
          margin-bottom: 2rem;
          margin-left: 1rem;
          font-size: 1rem;
        }
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
        justify-content: space-between;
        margin-top: 0.5rem;
        margin-left: 0rem;

        & input {
          width: 70%;
          height: 2.5rem;
          display: flex;
          justify-content: flex;
          align-items: center;
          background-color: white;
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
          border-radius: 20px;
          border: none;
          font-size: 0.8rem;
          text-indent: 20px;
        }

        & button {
          background-color: #f9458e;
          color: white;
          width: 6rem;
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
          border-radius: 30px;
          border: none;
          height: 2rem;
        }
      }
    }

    & .time {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: space-between;

      & h4 {
        width: 70%;
      }

      & .time-set {
        width: auto;
        display: flex;
        justify-content: end;

        & input {
          text-indent: 15px;
          width: 80%;
          height: 2rem;
          display: flex;
          align-items: center;
          background-color: white;
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
          border-radius: 30px;
          border: none;
        }
      }
    }

    & .preparation {
      margin-top: 1rem;
      display: flex;
      flex-direction: column;
      justify-content: space-between;

      & .steps-preparation {
        & textarea {
          display: flex;
          flex-direction: column;
          margin-top: 1rem;
          width: 98%;
          height: 10rem;
          background-color: white;
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
          border-radius: 15px;
          border: none;
          justify-content: start;
          align-items: start;
          padding: 10px 5px 2px 10px;
          box-sizing: content-box;
        }

        & textarea::placeholder {
          font-size: 0.8rem;
          text-align: start;
          padding: 8px;
        }
      }
    }

    & .upload {
      margin-top: 1.5rem;
      display: flex;
      flex-direction: column;
      align-content: space-around;
      align-items: center;

      & button {
        background-color: #f9458e;
        color: white;
        width: 10rem;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
        border-radius: 30px;
        border: none;
        height: 3rem;
        font-size: 1.5rem;
      }
    }

    & .desktop-container {
      display: none;
    }
  }
}

@media (min-width: 800px) {
  body {
    & .upload-view {
      margin-bottom: 0;
      display: grid;
      grid-template-columns: 60% 40%;
      padding: 6rem 0 0 6rem;
      box-sizing: border-box;

      & .top-container {
        padding: 2% 4% 2% 4%;
        box-sizing: border-box;
        width: 100%;

        & .input-recipe-textbox {
          border-radius: 15px;

          & input::placeholder {
            font-size: 1rem;
          }
        }

        & .categories {
          margin-top: 2rem;
          margin-bottom: 1.5rem;

          & button {
            width: 8rem;
            height: 2rem;
            font-size: 1rem;
          }
        }

        & .image {
          display: none;

          & h4 {
            font-size: 1.5rem;
          }
        }

        & .ingredients {
          margin-top: 1rem;
          font-size: 1.5rem;

          &.list-ingredientes {
            margin-top: 1rem;
            width: 100%;
            height: 100%;
          }

          & .add-ingredient {
            margin-top: 1rem;
            margin-left: 0rem;
            text-indent: 40px;

            & input {
              border-radius: 15px;
            }

            & input::placeholder {
              font-size: 1rem;
            }

            & button {
              width: 20%;
              height: 2.5rem;
              font-size: 1rem;
            }
          }
        }

        & .time {
          width: 90%;
          height: 3rem;
          margin-bottom: 1.5rem;
          margin-top: 2rem;
          font-size: 1.5rem;
          display: flex;
          justify-content: space-between;

          & .time-set {
            & input {
              height: 2rem;
              text-indent: 15px;
              width: 6rem;
              font-size: 1rem;
            }
          }
        }

        & .preparation {
          margin-top: 2.5rem;

          & h4 {
            font-size: 1.5rem;
            margin-bottom: 0.2rem;
          }

          & .steps-preparation {
            & textarea {
              padding: 15px 15px 15px 15px;
              width: 100%;
              height: 15rem;
              box-sizing: content-box;
              font-size: 1rem;
            }

            & textarea::placeholder {
              font-size: 1rem;
            }
          }
        }

        & .upload {
          display: none;
        }
      }

      & .desktop-container {
        margin-top: 6rem;
        margin-left: 1.5rem;
        width: 90%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        & .upload-image {
          background-color: white;
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
          border-radius: 5px;
          color: dimgray;
          min-height: 200px;
          /* minimum height */
          cursor: pointer;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          margin-top: 1rem;
          height: 25rem;
          width: 25rem;

          & .input-file {
            opacity: 0;
            /* invisible but it's there! */
            width: 20rem;
            height: 20rem;
            position: absolute;
            cursor: pointer;
          }

          & #preview {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 20rem;
            height: 20rem;

            & img {
              max-width: 100%;
              max-height: 100%;
              margin-bottom: 1rem;
            }

            & p {
              justify-content: center;
              margin-bottom: 1rem;
              margin-left: 1rem;
              font-size: 1rem;
              text-align: center;
            }
          }
        }

        & .upload {
          margin-top: 2rem;
          display: flex;
          flex-direction: column;
          align-content: space-around;
          align-items: center;

          & button {
            background-color: #f9458e;
            color: white;
            width: 10rem;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
            border-radius: 30px;
            border: none;
            height: 3rem;
            font-size: 1.5rem;
          }
        }
      }
    }
  }
}

@media (min-width: 801px) and (max-width: 1200px) {
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;

    .upload-view {
      width: 100vw;
      height: 100vh;
      margin-bottom: 20rem;

      & .top-container {
        width: 95%;
        padding: 5% 5% 5% 5%;
        justify-content: flex-start;
        gap: 1.5rem;
      }

      & .desktop-container {
        margin-top: 6rem;
        margin-left: 2rem;
        width: 90%;
        height: 100%;
        display: flex;
        flex-direction: column;
        justify-content: flex-start;
        align-items: center;

        & .upload-image {
          width: 20rem;
          height: 20rem;
        }
      }
    }
  }
}

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
