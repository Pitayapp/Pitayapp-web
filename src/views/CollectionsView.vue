<script>
import { userInfo } from 'os'

export default {
  name: "CollectionsView",

data() {
  /* Tantos elementos como recetas guardadas por el usuario */
    let collectionRecipes  = document.createElement("div");
    collectionRecipes.classList.add("collection");
    //collectionRecipes.textContent = imgRecipe;

    return {
      username: userInfo,
      //collectionRecipes :

      }

    }
  }
</script>

<template>
  <main class="collections-view">
    <div class="container">
    <div class="top-container">
      <h1 class="title">Recetas guardadas</h1>
        <div class="searcher">
          <input type="text" placeholder="  Busca una receta" class="searcher-bar">
          <button>Buscar</button>
        </div>
    </div>
    </div>
      <div class="collections">

        <div class="collection">
          <a href="{{linkRecipe}}" rel="lightbox" class="k">
            <img src="{{imgRecipe}}" width="352" alt="{{}}">
            <span class="hover-text"><span>{{recipe}}</span></span>
          </a>
        </div>

    </div>
  </main>
</template>



<style lang="scss" scoped>
@media (min-width: 300px) {

main {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;

  .collections-view {
    width: 100vw;
    height: 100vh;

    .container {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-rows: 20% 80%;

      .top-container {
        width: 80%;
        height: 100%;
        background-color: transparent;
        display: flex;
        flex-direction: column;
        justify-content: center;
        margin-left: 2rem;

        & .title {
          height: auto;
          width: auto;
          font-weight: bold;
          font-size: 1.2rem;
          margin-bottom: 2rem;
        }
        & .searcher {
          display: flex;
          justify-content: flex-start;
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
            color: #FFFFFF;
            border: 0;
            border-radius: 15px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 0.8rem;
            background-color: #F9458E;
            cursor: pointer;
          }
        }
      }
      .collections {
        display: grid;
        grid-template-columns: repeat( auto-fill, minmax(min(50%,15rem), 1fr) );
        transition: 0.3 ease-in-out;
        box-sizing: border-box;
        //grid-row-gap: 2rem;
        //grid-column-gap: 2rem;
        //grid-gap: 20px;
        place-items: center;

        .collection {
          background-color: #F9458E;
          height: 80%;
          width: 80%;
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
          border-radius: 15px;
        }
      }
    }
  }
}
}

@media (min-width: 800px) {
main {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;

  .collections-view {
    width: 100vw;
    height: 100vh;

    .container {
      height: 100%;
      width: 100%;
      display: grid;
      grid-template-rows: 20% 80%;

      .top-container {
        width: 80%;
        height: 100%;
        background-color: transparent;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 2rem;

        & .title {
          height: auto;
          width: auto;
          font-weight: bold;
          font-size: 2.2rem;
          margin-bottom: none;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        & .searcher {
          display: flex;
          justify-content: space-around;
          align-items: center;
          background-color: transparent;

          .searcher-bar {
            width: 11rem;
            height: 2.5rem;
            border-radius: 15px;
            box-shadow: 1em;
            border: 0;
            background-color: white;
          }

          & input::placeholder {
            font-size: 0.8rem;
          }

          & button {
            width: 3.5rem;
            height: 1.5rem;
            color: #FFFFFF;
            border: 0;
            border-radius: 15px;
            font-family: 'Inter';
            font-style: normal;
            font-weight: 700;
            font-size: 0.8rem;
            background-color: #F9458E;
            cursor: pointer;
          }
        }
      }
      .collections {
        display: grid;
        grid-template-columns: repeat( auto-fill, minmax(min(50%,15rem), 1fr) );
        transition: 0.3 ease-in-out;
        box-sizing: border-box;
        //grid-row-gap: 2rem;
        //grid-column-gap: 2rem;
        //grid-gap: 20px;
        place-items: center;

        .collection {
          background-color: #F9458E;
          height: 80%;
          width: 80%;
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
          border-radius: 15px;
        }
        .collection:hover{
            opacity: 0.07;
        }
        }
      }
    }
  }
}
}

</style>



