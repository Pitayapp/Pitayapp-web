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

<template>
  <main class="home-view">
    <div class="container">
      <div class="top-container">
        <div class="hello">
          <p>👋 Hola {{ username }}!</p>
          <img src="../assets/svg/bell.svg" alt="">
        </div>
        <div class="searcher">
          <input type="text" placeholder="  Busca una receta" class="searcher-bar">
          <button>Buscar</button>
        </div>
      </div>
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
    width: 100%;
    height: 100%;

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

        & .searcher {
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
        }
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
</style>
