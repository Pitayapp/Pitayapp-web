
<template>
  <div class="collections-view">
    <div class="top-collections">
      <div class="section-title">
        <h1>Recetas guardadas</h1>
      </div>
      <div class="collections-browser">
        <input type="input">
        <button class="search-button">Buscar</button>
      </div>
    </div>

    <div class="grid-collections">
      <div class="categories one"><img src="../assets/img/smoothies.png" alt="" class="collections-img"> Smoothies</div>
      <div class="categories two"><img src="../assets/img/bowl-de-frutas.png" alt="" class="collections-img"> Postres
      </div>
      <div class="categories three"><img src="../assets/img/sopa-veg.png" alt="" class="collections-img">Cremas y sopas
      </div>
      <div class="categories four"><img src="../assets/img/al-horno-pitayapp.png" alt="" class="collections-img">Pastas
      </div>
      <div class="categories2 five"><img src="../assets/img/salad-pitayapp.png" alt="" class="collections-img2">Veganas
      </div>
      <div class="categories3 six"><img src="../assets/img/vegan-burger.png" alt="" class="collections-img3">
      </div>
    </div>
  </div>
</template>




<style lang="scss" scoped>
@media (min-width: 300px) {
  main {
    background-color: none;
  }
}

@media (min-width: 800px) {
  .collections-view {
    padding: 0;
    margin: 0;
    height: 55rem;

    .top-collections {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .collections-browser {
        border-radius: 10px;
        margin-right: 5%;

        input {
          width: 6rem;
        }
      }
    }

    .grid-collections {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-column-gap: 30px;
      grid-row-gap: 30px;
      margin: 2rem;
      width: 93%;
      height: 90%;

      .collections-img {
        width: 8rem;
        height: 8rem;
      }



      .categories {
        align-self: center;
        background-color: var(--secondary);
        border-radius: 20px;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
        height: 100%;
        font-size: 2rem;
        font-weight: 700;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
      }

      .categories2 {
        background-color: var(--secondary);
        border-radius: 20px;
        height: 100%;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);

        .collections-img2 {
          width: 14rem;
          height: 14rem;
        }
      }

      .categories3 {
        background-color: var(--secondary);
        border-radius: 20px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: space-around;
        font-size: 2rem;
        font-weight: 700;
        cursor: pointer;
        padding: 15%;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);

        .collections-img3 {
          width: 14rem;
          height: 14rem;
        }

        .fastfood-text {

          display: flex;
          flex-direction: column;
          margin-left: 30px;

          h3 {
            font-size: 2rem;
            font-weight: 700;
          }

          p {
            font-size: 1.5rem;
            font-weight: 300;
            color: #656565;
            margin-top: 10px;
          }
        }

      }

      .categories3 {
        background-color: var(--secondary);
        border-radius: 20px;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-size: 2rem;
        font-weight: 700;
        cursor: pointer;
        box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
      }

      .one {
        grid-area: 1 / 1 / 2 / 3;
      }

      .two {
        grid-area: 1 / 3 / 2 / 5;
      }

      .three {
        grid-area: 2 / 1 / 3 / 3;
      }

      .four {
        grid-area: 2 / 3 / 3 / 5;
      }

      .five {
        grid-area: 3 / 1 / 5 / 2;

      }

      .six {
        grid-area: 3 / 2 / 5 / 4;
      }

      .seven {
        grid-area: 3 / 4 / 5 / 5;
      }
    }

  }
}
</style>
