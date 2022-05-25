<script>
export default {
  name: "HomeView",

  data() {
    return {
      username: "Antonio",
      /* Las recetas más populares hay que meterlas en un componente aparte */
      mostPopular: [{
        title: "Receta 1",
        author: "Autor 1"
      }, {
        title: "Receta 2",
        author: "Autor 2"
      }, {
        title: "Receta 3",
        author: "Autor 3"
      }
      ],
    }
  },
}
</script>

<script setup>
import SearcherBar from '@/components/SearcherBar.vue'
</script>

<template>
  <main class="home-view">
    <div class="container">
      <div class="top-container">
        <div class="hello">
          <p>👋 Hola {{ username }}!</p>
          <img src="../assets/svg/bell.svg" alt="">
        </div>
        <SearcherBar class="searcher-comp" />
        <!-- <div class="searcher">
          <input type="text" placeholder="  Busca una receta" class="searcher-bar">
          <button>Buscar</button>
        </div> -->
      </div>
      <div class="content">
        <div class="left-container">
          <div class="most-popular">
            <div class="most-popular-text">
              <h2>Más populares</h2>
              <a href="">Ver más</a>
            </div>
            <!-- Esto hay que meterlo en un componente aparte. Crear un componente con la imagen
        el título y el autor de la receta y llamarlo 3 veces en HomeView -->
            <div class="recipe-list">
              <div v-for="(recipe, i) in mostPopular" :key="i" class="popular-recipes">
                <h4 class="title">{{ recipe.title }}</h4>
                <p>{{ recipe.author }}</p>
              </div>
            </div>
          </div>
          <div class="bottom-container">
            <div class="categories">
              <div class="categorie-container week">
                <div class="transparent">
                  <h3 class="title">Recetas de la semana</h3>
                </div>
              </div>
            </div>
            <div class="categories">
              <div class="categorie-container family">
                <div class="transparent">
                  <h3 class="title">Para cenar en familia</h3>
                </div>
              </div>
            </div>
            <div class="categories">
              <div class="categorie-container diet">
                <div class="transparent">
                  <h3 class="title">Comenzando la dieta</h3>
                </div>
              </div>
            </div>
            <div class="categories">
              <div class="categorie-container children">
                <div class="transparent">
                  <h3 class="title">Para los más peques</h3>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="right-container">
          <!-- <div class="desktop-searcher">Aquí va el buscador</div> -->
          <SearcherBar class="searcher-comp" />
          <div class="your-recipes">
            <p>Tus Recetas</p>
            <div v-for="(recipe, i) in mostPopular" :key="i" class="popular-recipes">
              <h4 class="title">{{ recipe.title }}</h4>
            </div>
          </div>
          <div class="buttons">
            <button>Mis colecciones</button>
            <button>Crear nueva receta</button>

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

  .home-view {
    width: 100vw;
    height: 100vh;
    margin-bottom: 6rem;

    & .container {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;

      & .top-container {
        background-color: #F9458E;
        color: white;
        width: 100%;
        height: 20%;
        border-radius: 0 0 15px 15px;
        display: flex;
        flex-direction: column;
        padding: 5% 12% 5% 12%;
        box-sizing: border-box;
        justify-content: space-evenly;

        & .hello {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: transparent;
          height: 3rem;

          & p {
            background-color: transparent;
            height: auto;
            width: auto;
            font-weight: bold;
            font-size: 1.2rem;
          }

          & img {
            background-color: transparent;
            cursor: pointer;
          }
        }

        /* .searcher {
          display: flex;
          justify-content: space-between;
          align-items: center;
          background-color: transparent;

          .searcher-bar {
            width: 12rem;
            height: 1.5rem;
            border-radius: 15px;
            border: 0;
            background-color: white;
          }

          & input::placeholder {
            font-size: 0.8rem;

          }

          & button {
            width: 3.5rem;
            height: 1.5rem;
            background: #FFFFFF;
            border: 0;
            border-radius: 15px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 0.8rem;
            color: #F9458E;
            cursor: pointer;
          }
        } */
      }

      & .right-container {
        display: none;
      }

      .most-popular {
        width: 100%;
        height: 33%;

        & .most-popular-text {
          margin-top: 1rem;
          padding: 0 1.5rem 0 1.2rem;
          box-sizing: border-box;
          width: 100%;
          height: 20%;
          display: flex;
          justify-content: space-between;
          align-items: center;

          & a {
            color: gray;
            font-size: 0.8rem;
            text-decoration: none;
            font-weight: bold;
          }

          &p {
            cursor: pointer;
          }
        }

        & .recipe-list {
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;

          & .popular-recipes {

            margin: 1rem 0.5rem;
            height: 9rem;
            width: 7rem;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: end;
            cursor: pointer;

          }
        }
      }

      .bottom-container {
        height: 47%;
        margin: 1rem 0 2rem 0;

        .categories {
          width: 100%;
          height: 8rem;
          display: flex;
          justify-content: center;
          align-items: center;
          cursor: pointer;

          & .categorie-container {
            width: 80%;
            height: 7rem;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
            border-radius: 15px;
            /* background: rgba(151, 151, 151, 0.57); */
            background-position: center;
            background-size: 100%;

            & .transparent {
              width: 100%;
              height: 100%;
              background: rgba(151, 151, 151, 0.57);
              display: flex;
              align-items: center;
              justify-content: center;
              border-radius: 15px;
            }
          }

          & .week {
            background-image: url("../assets/img/recetasdelasemana.jpg");
          }

          & .family {
            background-image: url("../assets/img/paracenarenfamilia.jpg");
          }

          & .diet {
            background-image: url("../assets/img/comenzandoladieta.jpg");
          }

          & .children {
            background-image: url("../assets/img/paralospeques.jpg");
          }

          & h3 {
            background: transparent;
            color: white;
          }

        }
      }
    }
  }
}

@media (min-width: 800px) {
  body {
    width: 100vw;
    height: 100vh;

    & .home-view {
      margin-bottom: 0;
      box-sizing: border-box;

      & .container {
        height: 100%;
        width: 100%;

        & .top-container {
          background-color: transparent;
          color: black;
          height: 5%;
          border-radius: 0;
          display: flex;
          flex-direction: column;
          padding: 0;
          justify-content: center;

          & .hello {

            & p {
              font-size: 1.6rem;
            }

            & img {
              display: none;
            }
          }

          & .searcher {
            display: none;
          }
        }

        & .content {
          height: 100%;
          width: 100%;
          margin-top: 0;
          display: grid;
          grid-template-columns: 50% 50%;

          & .left-container {
            height: 100%;
            width: 100%;

            .most-popular {
              width: 100%;
              height: 40%;
              display: flex;
              flex-direction: column;
              align-items: center;
              margin-top: 2.5%;

              & .most-popular-text {
                margin-top: 0;
                font-size: 0.8rem;
              }

              & .recipe-list {
                width: 100%;
                display: grid;
                grid-template-columns: 33% 33% 33%;


                & .popular-recipes {
                  height: 90%;
                  width: 80%;
                }
              }
            }

            .bottom-container {
              height: 50%;
              width: 100%;
              margin-top: 2.5%;
              display: grid;
              grid-template-columns: 50% 50%;
              grid-template-rows: 50% 50%;

              .categories {
                width: 100%;
                height: 100%;

                & .categorie-container {
                  width: 95%;
                  height: 75%;
                  display: flex;
                  align-items: center;
                  justify-content: center;
                  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
                  border-radius: 15px;
                  /* background: rgba(151, 151, 151, 0.57); */
                  background-position: center;
                  background-size: 100%;
                }
              }
            }
          }

          & .right-container {
            width: 100%;
            height: 90%;
            display: grid;
            grid-template-rows: 5% 70% 7%;
            grid-row-gap: 3%;
            align-content: end;
            justify-items: center;
            /* display: flex;
            flex-direction: column;
            justify-content: end;
            align-items: center; */

            & .desktop-searcher {
              width: 60%;
              background-color: blue;
              color: white;
              font-weight: bold;
              text-align: center;
            }

            & .your-recipes {
              width: 60%;
              box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
              border-radius: 15px;
              padding: 2rem;
              box-sizing: border-box;

              & p {
                font-size: 2rem;
                font-weight: bold;
              }

              & .popular-recipes {
                margin: 2rem;
                height: 20%;
                width: 90%;
                box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
                border-radius: 15px;
                display: flex;
                align-items: center;
                justify-content: center;
                cursor: pointer;

              }
            }

            & .buttons {
              width: 60%;
              display: flex;
              justify-content: space-around;

              & button {
                width: 40%;
                height: 100%;
                background: #F9458E;
                border: 0;
                box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
                border-radius: 10px;
                font-family: 'Inter';
                font-style: normal;
                font-weight: 700;
                font-size: 1rem;
                color: white;
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
