<script setup>
import SearcherBar from '@/components/SearcherBar.vue'
</script>
<template>
  <main class="recipe-list-view">
    <div class="recipe-list">
      <div class="container">
        <div class="top-discover">
          <div class="section-title">
            <h1>
              <Router-Link to="/discover" class="h1-link">Descubre</Router-Link> > Cremas y Sopas
            </h1>
            <SearcherBar class="searcher-comp" />
          </div>
        </div>
        <div class="grid-recipe-list">
          <div class="item">
            <div class="item-container">
              <img src="../assets/img/paralospeques.jpg" alt="" class="recipe-img">
              <div class="text-box">
                <div class="prep-time">15'</div>
                <div class="box-title">NOMBRE DE RECETA</div>
                <div class="box-content">Una descripción genérica o adelanto de la receta.</div>
                <div class="upload-date">13-06-2022</div>
                <div class="list-icons">
                  <img src="../assets/svg/heart-like.svg" alt="" class="reaction-icons">
                  <img src="../assets/svg/save-recipe.svg" alt="" class="reaction-icons">
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-container">
              <img src="../assets/img/paralospeques.jpg" alt="" class="recipe-img">
              <div class="text-box">
                <div class="prep-time">15'</div>
                <div class="box-title">NOMBRE DE RECETA</div>
                <div class="box-content">Una descripción genérica o adelanto de la receta.</div>
                <div class="upload-date">13-06-2022</div>
                <div class="list-icons">
                  <img src="../assets/svg/heart-like.svg" alt="" class="reaction-icons">
                  <img src="../assets/svg/save-recipe.svg" alt="" class="reaction-icons">
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-container">
              <img src="../assets/img/paralospeques.jpg" alt="" class="recipe-img">
              <div class="text-box">
                <div class="prep-time">15'</div>
                <div class="box-title">NOMBRE DE RECETA</div>
                <div class="box-content">Una descripción genérica o adelanto de la receta.</div>
                <div class="upload-date">13-06-2022</div>
                <div class="list-icons">
                  <img src="../assets/svg/heart-like.svg" alt="" class="reaction-icons">
                  <img src="../assets/svg/save-recipe.svg" alt="" class="reaction-icons">
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-container">
              <img src="../assets/img/paralospeques.jpg" alt="" class="recipe-img">
              <div class="text-box">
                <div class="prep-time">15'</div>
                <div class="box-title">NOMBRE DE RECETA</div>
                <div class="box-content">Una descripción genérica o adelanto de la receta.</div>
                <div class="upload-date">13-06-2022</div>
                <div class="list-icons">
                  <img src="../assets/svg/heart-like.svg" alt="" class="reaction-icons">
                  <img src="../assets/svg/save-recipe.svg" alt="" class="reaction-icons">
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-container">
              <img src="../assets/img/paralospeques.jpg" alt="" class="recipe-img">
              <div class="text-box">
                <div class="prep-time">15'</div>
                <div class="box-title">NOMBRE DE RECETA</div>
                <div class="box-content">Una descripción genérica o adelanto de la receta.</div>
                <div class="upload-date">13-06-2022</div>
                <div class="list-icons">
                  <img src="../assets/svg/heart-like.svg" alt="" class="reaction-icons">
                  <img src="../assets/svg/save-recipe.svg" alt="" class="reaction-icons">
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-container">
              <img src="../assets/img/paralospeques.jpg" alt="" class="recipe-img">
              <div class="text-box">
                <div class="prep-time">15'</div>
                <div class="box-title">NOMBRE DE RECETA</div>
                <div class="box-content">Una descripción genérica o adelanto de la receta.</div>
                <div class="upload-date">13-06-2022</div>
                <div class="list-icons">
                  <img src="../assets/svg/heart-like.svg" alt="" class="reaction-icons">
                  <img src="../assets/svg/save-recipe.svg" alt="" class="reaction-icons">
                </div>
              </div>
            </div>
          </div>
          <div class="item">
            <div class="item-container">
              <img src="../assets/img/paralospeques.jpg" alt="" class="recipe-img">
              <div class="text-box">
                <div class="prep-time">15'</div>
                <div class="box-title">NOMBRE DE RECETA</div>
                <div class="box-content">Una descripción genérica o adelanto de la receta.</div>
                <div class="upload-date">13-06-2022</div>
                <div class="list-icons">
                  <img src="../assets/svg/heart-like.svg" alt="" class="reaction-icons">
                  <img src="../assets/svg/save-recipe.svg" alt="" class="reaction-icons">
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </main>
</template>
<style lang="scss" scoped>
main {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  width: 100vw;
  height: 100vh;
  transition: 0.5s ease-in-out;

  .recipe-list {
    width: 100vw;
    height: 100vh;
    box-sizing: border-box;

    .container {
      display: flex;
      flex-direction: column;
      height: 90vh;
      width: 100vw;

      .top-discover {
        background-color: #F9458E;
        color: white;
        width: 100%;
        height: 15%;
        border-radius: 0 0 15px 15px;
        display: flex;
        flex-direction: column;
        padding: 5% 12% 5% 12%;
        box-sizing: border-box;
        justify-content: space-evenly;
        margin-bottom: 15px;

        .section-title {
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

            .h1-link {
              text-decoration: none;
              color: #282828;
              cursor: pointer;
            }
          }

          .searcher-comp {
            width: 100%;
            height: 100%;
          }
        }
      }

      .grid-recipe-list {
        display: grid;
        grid-template-columns: repeat(auto-fill, minmax(min(100%, 100%), 1fr));
        grid-column-gap: 25px;
        grid-row-gap: 25px;
        box-sizing: border-box;
        padding: 1rem;
        width: 100%;
        height: auto;

        .item {
          background-color: var(--secondary);
          width: 100%;
          height: 100%;
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
          border-radius: 15px;
          display: flex;
          align-items: center;
          justify-content: center;
          cursor: pointer;

          .item-container {
            height: 90%;
            width: 90%;
            display: flex;
            align-items: center;
            justify-content: space-around;

            .recipe-img {
              height: 80%;
              width: 9rem;
              border-radius: 15%;
            }

            .text-box {
              display: flex;
              flex-direction: column;
              justify-content: center;
              margin-left: 6%;


              .prep-time {
                font-weight: 500;
                font-size: 0.8rem;
                margin-bottom: 5px;
                position: relative;
                left: 90%;
                top: 0;
              }

              .box-title {
                font-weight: 700;
                margin-bottom: 6px;
              }

              .box-content {
                font-weight: 400;
              }

              .upload-date {
                font-weight: 500;
                display: none;
              }

              .list-icons {
                display: none;
              }
            }
          }
        }
      }
    }
  }

}

@media (min-width: 800px) {
  main {

    .recipe-list {

      .container {
        display: flex;
        flex-direction: column;
        height: 70%;
        width: 93%;
        align-items: flex-start;
        justify-content: center;
        margin: 0;
        position: absolute;
        top: 6rem;
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
          height: 8%;
          background-color: transparent;

          .section-title {
            height: 100%;
            width: 95%;
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

            .searcher-comp {
              width: 100%;
              height: 80%;

            }
          }
        }

        .grid-recipe-list {
          display: grid;
          grid-template-columns: repeat(auto-fill, minmax(min(100%, 100%), 1fr));
          grid-template-rows: repeat(auto-fill, minmax(min(8, 100%), 1fr));
          gap: 25px;
          box-sizing: border-box;
          padding: 1rem;
          width: 100%;
          height: 80%;

          .item {
            background-color: var(--secondary);
            width: 100%;
            height: 90%;
            box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
            border-radius: 15px;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            .item-container {
              height: 100%;
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-evenly;

              .recipe-img {
                height: 80%;
                width: 15%;
                border-radius: 15%;
              }

              .text-box {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                align-items: center;
                margin-left: 0;
                width: 70%;


                .prep-time {
                  font-weight: 500;
                  font-size: 1.5rem;
                  margin-bottom: 5px;
                  position: none;
                  left: 0;
                  top: 0;
                }

                .box-title {
                  font-weight: 700;
                  font-size: 1.5rem;
                  margin-bottom: 6px;
                }

                .box-content {
                  font-weight: 400;
                  display: none;
                }

                .upload-date {
                  font-weight: 500;
                  display: block;
                  font-size: 1.5rem;
                }

                .list-icons {
                  display: block;
                  display: flex;
                  justify-content: space-between;
                  align-items: center;
                  width: 15%;
                  height: 3rem;

                  .reaction-icons {
                    height: 100%;
                  }
                }
              }
            }
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
