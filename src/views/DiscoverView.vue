<template>
  <div class="discover-view">
    <div class="top-discover">
      <div class="section-title">
        <h1>Descubre</h1>
      </div>
      <div class="discover-browser">
        <input type="input">
        <button class="search-button">Buscar</button>
      </div>
    </div>
    <div class="grid-discover">
      <div class="cattegories one"><img src="../assets/img/smoothies.png" alt="" class="discover-img"> Smoothies</div>
      <div class="cattegories two"><img src="../assets/img/bowl-de-frutas.png" alt="" class="discover-img"> Postres
      </div>
      <div class="cattegories three"><img src="../assets/img/sopa-veg.png" alt="" class="discover-img">Cremas y sopas
      </div>
      <div class="cattegories four"><img src="../assets/img/al-horno-pitayapp.png" alt="" class="discover-img">Pastas
      </div>
      <div class="cattegories2 five"><img src="../assets/img/salad-pitayapp.png" alt="" class="discover-img2">Veganas
      </div>
      <div class="cattegories3 six"><img src="../assets/img/vegan-burger.png" alt="" class="discover-img3">
        <div class="fastfood-text">
          <h3>Vegan Fast Food</h3>
          <p>¡Prepara tus recetas favoritas y disfruta los viernes por la noche!</p>
        </div>
      </div>
      <div class="cattegories2 seven"><img src="../assets/img/pasta-pitayapp.png" alt="" class="discover-img2">
        vegetarianas</div>
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
  .discover-view {
    padding: 0;
    margin: 0;
    height: 55rem;

    .top-discover {
      display: flex;
      justify-content: space-between;
      align-items: center;

      .discover-browser {
        border-radius: 10px;
        margin-right: 5%;

        input {
          width: 6rem;
        }
      }
    }

    .grid-discover {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-column-gap: 30px;
      grid-row-gap: 30px;
      margin: 2rem;
      width: 93%;
      height: 90%;

      .discover-img {
        width: 8rem;
        height: 8rem;
      }



      .cattegories {
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

      .cattegories2 {
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

        .discover-img2 {
          width: 14rem;
          height: 14rem;
        }
      }

      .cattegories3 {
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

        .discover-img3 {
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

      .cattegories3 {
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
