<!--
<script>

//import { userInfo } from 'os'

export default {
  //name: "CollectionsView",

data() {
   //Tantos elementos como recetas guardadas por el usuario
    let collectionRecipes  = document.createElement("div");
    collectionRecipes.classList.add("collection");
    //collectionRecipes.textContent = imgRecipe;

    return {
      //username: userInfo,
      //collectionRecipes :
      }
    }
  }

</script> -->


<script setup>
  import SearcherBar from '../components/SearcherBar.vue';

</script>

<template>
  <main class="collections-view">
    <div class="container">
      <div class="top-container">
        <h1 class="title">Recetas guardadas</h1>
        <SearcherBar class="searcher mobile"/>
      </div>
      <div class="bottom-container">
        <div class="collections">
          <div class="collection 1"></div>
          <div class="collection 2"></div>
          <div class="collection 3"></div>
          <div class="collection 4"></div>
          <div class="collection 5"></div>
          <div class="collection 6"></div>
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

  & .collections-view {
    width: 100vw;
    height: 100vh;
    margin-bottom: 6rem;

    & .container {
      height: 100vh;
      width: 100%;
      display: flex;
      flex-direction: column;
      & .top-container {
        background-color: #F9458E;
        color: white;
        width: 100%;
        height: 13.2%;
        border-radius: 0 0 15px 15px;
        display: flex;
        flex-direction: column;
        padding: 5% 12% 5% 12%;
        box-sizing: border-box;
        justify-content: space-around;

        & .title {
          height: auto;
          width: auto;
          font-weight: bold;
          font-size: 1.2rem;
        }
        & .searcher {
          height: 1.5rem;
        }
      }

      & .bottom-container {
        width: 100%;
        height: 80%;
        display: grid;
      & .collections {
        display: grid;
        grid-template-columns: 50% 50%;
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

body {
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
      padding: 6rem 0 0 6rem;
      box-sizing: border-box;

      .top-container {
        width: 100%;
        height: 100%;
        background-color: transparent;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        margin-left: 2rem;
        padding: 0;
        align-items: center;
        padding: 0 6rem 0 0;
        box-sizing: border-box;

        & .title {
          height: auto;
          width: auto;
          font-weight: bold;
          font-size: 2.2rem;
          margin-bottom: none;
          display: flex;
          align-items: center;
          justify-content: center;
          color: black;
        }
        & .searcher {
          width: 40rem;
          height: 2.5rem;
        }
      }

      & .bottom-container {
        width: 100%;
        height: 80%;
        display: grid;

        & .collections {

          grid-template-columns: 25% 25% 25% 25%;
          transition: 0.3 ease-in-out;
          box-sizing: border-box;
          //grid-row-gap: 2rem;
          //grid-column-gap: 2rem;
          //grid-gap: 20px;
          place-items: center;

          .collection {
            background-color:#F9458E;
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
}


</style>



