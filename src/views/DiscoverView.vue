<script setup>
import { RouterLink } from "vue-router";
import SearcherBar from "@/components/SearcherBar.vue";
</script>

<template>
  <main class="discover-view">
    <div class="container">
      <div class="top-discover">
        <div class="section-title">
          <h1>Descubre</h1>

          <SearcherBar class="searcher-comp" />
        </div>
      </div>
      <div class="grid-discover">
        <RouterLink to="/discover/smoothies" class="cattegories one"
          ><img src="../assets/img/smoothies.png" alt="" class="discover-img" />
          Smoothies
        </RouterLink>
        <RouterLink to="/discover/postres" class="cattegories two"
          ><img
            src="../assets/img/bowl-de-frutas.png"
            alt=""
            class="discover-img"
          />
          Postres
        </RouterLink>
        <RouterLink to="/discover/cremas-y-sopas" class="cattegories three"
          ><img
            src="../assets/img/sopa-veg.png"
            alt=""
            class="discover-img"
          />Cremas y sopas
        </RouterLink>
        <RouterLink to="/discover/pastas" class="cattegories four"
          ><img
            src="../assets/img/al-horno-pitayapp.png"
            alt=""
            class="discover-img"
          />Pastas
        </RouterLink>
        <RouterLink to="/discover/veganas" class="cattegories2 five"
          ><img
            src="../assets/img/salad-pitayapp.png"
            alt=""
            class="discover-img2"
          />Veganas
        </RouterLink>
        <RouterLink to="/discover/vegan-fast-food" class="cattegories3 six"
          ><img
            src="../assets/img/vegan-burger.png"
            alt=""
            class="discover-img3"
          />
          <div class="fastfood-text">
            <h3>Vegan Fast Food</h3>
            <p>
              ¡Prepara tus recetas favoritas y disfruta los viernes por la
              noche!
            </p>
          </div>
        </RouterLink>
        <RouterLink to="/discover/vegetarianas" class="cattegories2 seven"
          ><img
            src="../assets/img/pasta-pitayapp.png"
            alt=""
            class="discover-img2"
          />
          Vegetarianas
        </RouterLink>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
@media (min-width: 300px) {
  body {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    width: 100vw;
    height: 100vh;
    transition: 0.5s ease-in-out;

    .discover-view {
      width: 100vw;
      height: 100vh;
      box-sizing: border-box;

      & .container {
        display: flex;
        flex-direction: column;
        height: 90vh;
        width: 100vw;

        .top-discover {
          background-color: #f9458e;
          color: white;
          width: 100%;
          height: 15%;
          border-radius: 0 0 15px 15px;
          display: flex;
          flex-direction: column;
          padding: 5% 12% 5% 12%;
          box-sizing: border-box;
          justify-content: space-evenly;

          & .section-title {
            height: 80%;
            width: 100%;
            margin-top: 0.8rem;
            display: flex;
            flex-direction: column;
            align-items: flex-start;
            justify-content: space-between;

            h1 {
              background-color: transparent;
              height: auto;
              width: auto;
              font-weight: bold;
              font-size: 1.2rem;
              margin-bottom: 0.5rem;
            }

            & .searcher-comp {
              width: 100%;
              height: 100%;

              & .searcher {
                & button {
                  background-color: var(--primary);
                }
              }
            }
          }
        }

        .grid-discover {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          grid-template-rows: repeat(4, 1fr);
          grid-column-gap: 20px;
          grid-row-gap: 20px;
          box-sizing: border-box;
          padding: 1rem;
          width: 100%;
          height: 80%;

          .cattegories {
            align-self: center;
            background-color: var(--secondary);
            border-radius: 20px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;
            height: 80%;
            font-size: 1rem;
            font-weight: 700;
            text-decoration: none;
            color: #282828;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);

            .discover-img {
              width: 3rem;
              height: 3rem;
            }
          }

          .cattegories2 {
            background-color: var(--secondary);
            border-radius: 20px;
            height: 120%;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            font-size: 1rem;
            font-weight: 700;
            text-decoration: none;
            color: #282828;
            cursor: pointer;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);

            .discover-img2 {
              width: 8rem;
              height: 8rem;
            }
          }

          .cattegories3 {
            background-color: var(--secondary);
            border-radius: 20px;
            height: 100%;
            display: flex;
            align-items: center;
            justify-content: space-around;
            cursor: pointer;
            text-decoration: none;
            color: #282828;
            padding: 10%;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);

            .discover-img3 {
              width: 8rem;
              height: 8rem;
            }

            .fastfood-text {
              display: flex;
              flex-direction: column;
              margin-left: 30px;

              h3 {
                font-size: 1rem;
                font-weight: 700;
              }

              p {
                font-size: 0.7rem;
                font-weight: 300;
                color: #656565;
                margin-top: 10px;
              }
            }
          }
        }

        .one {
          grid-area: 1 / 1 / 2 / 2;
        }

        .two {
          grid-area: 1 / 2 / 2 / 3;
        }

        .three {
          grid-area: 2 / 1 / 3 / 2;
        }

        .four {
          grid-area: 2 / 2 / 3 / 3;
        }

        .five {
          grid-area: 5 / 1 / 7 / 2;
        }

        .six {
          grid-area: 3 / 1 / 5 / 3;
        }

        .seven {
          grid-area: 5 / 2 / 7 / 3;
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
    width: 100%;
    height: 100%;
    transition: 0.5s ease-in-out;

    .discover-view {
      padding: 0;
      margin: 0;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      & .container {
        display: flex;
        flex-direction: column;
        height: 90%;
        width: 94%;
        /* align-items: flex-start;
        justify-content: center; */
        margin: 0;
        position: absolute;
        top: 5.5rem;
        left: 6.5rem;
        padding: 2rem;
        box-sizing: border-box;

        .top-discover {
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-direction: row;
          padding: 0;
          color: #282828;
          width: 100%;
          height: 2rem;
          background-color: transparent;

          & .section-title {
            height: 3rem;
            width: 100%;
            margin-top: 0;
            display: flex;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            background-color: transparent;

            h1 {
              background-color: transparent;
              height: 80%;
              width: 100%;
              font-weight: bold;
              font-size: 2rem;
              margin-bottom: 0.5rem;
              display: flex;
              align-items: center;
              margin-bottom: 0;
            }

            & .searcher-comp {
              width: 100%;
              height: 70%;

              & .searcher {
                & button {
                  background-color: var(--primary);
                }
              }
            }
          }
        }

        .grid-discover {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          grid-template-rows: repeat(4, 1fr);
          grid-column-gap: 30px;
          grid-row-gap: 30px;
          margin-top: 1rem;
          width: 100%;
          height: 95%;

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

            .discover-img {
              width: 7rem;
              height: 7rem;
            }
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
              width: 12rem;
              height: 12rem;
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
            padding: 10%;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);

            .discover-img3 {
              width: 12rem;
              height: 12rem;
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
                font-size: 1.4rem;
                font-weight: 300;
                color: #656565;
                margin-top: 10px;
              }
            }
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
