<script>
export default {
  name: "HomeView",

  data() {
    return {
      username: "Antonio",
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
      categories: [{
        title: "Recetas de la semana",
        image: "../assets/img/category1.png"
        // url: "url 1"
      }, {
        title: "Para cenar en familia",
        image: "../assets/img/category1.png"
        // url: "url 2"
      }, {
        title: "Comenzando la dieta",
        image: "../assets/img/category1.png"
        // url: "url 3"
      }, {
        title: "Para los más peques",
        image: "../assets/img/category1.png"
        // url: "url 4"
      }
      ]
    };
  }
}
</script>

<template>
  <main class="home-view">
    <div class="container">
      <div class="top-container">
        <div class="hello">
          <p>👋 Hola {{ username }}!</p>
          <div class="bell"></div>
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
        <div class="recipe-list">
          <div v-for="(recipe, i) in mostPopular" :key="i" class="popular-recipes">
            <h4 class="title">{{ recipe.title }}</h4>
            <p>{{ recipe.author }}</p>
          </div>
        </div>
      </div>
      <div class="bottom-container">
        <div v-for="(categorie, i) in categories" :key="i" class="categories">
          <div class="categorie-container">
            <!-- Hay que añadir un background-image en el v-for con la ruta de cada imagen en categories -->
            <h3 class="title">{{ categorie.title }}</h3>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>

<style lang="scss">
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

          &.bell {
            width: 2.5rem;
            height: 2.5rem;
            background-color: white;
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
            border: 1px solid black;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
            border-radius: 15px;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: end;

          }
        }
      }

      .bottom-container {
        height: 50vh;

        .categories {
          width: 100%;
          height: 8rem;
          margin-top: 1rem;
          display: flex;
          justify-content: center;

          & .categorie-container {
            width: 80%;
            height: 8rem;
            border: 1px solid black;
            display: flex;
            align-items: center;
            justify-content: center;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
            border-radius: 15px;
            background: rgba(151, 151, 151, 0.57);

            & h3 {
              background: transparent;
              color: white;
            }
          }
        }
      }
    }
  }
}
</style>
