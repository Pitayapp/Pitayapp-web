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
              <Router-Link to="/discover" class="h1-link">Descubre</Router-Link> > Smoothies
            </h1>
            <SearcherBar class="searcher-comp" />
          </div>
        </div>
        <div class="grid-recipe-list">
          <div class="item">
            <img src="" alt="">

            <div></div>
          </div>
          <div class="item"></div>

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
        grid-template-columns: repeat(auto-fill, minmax(min(1, 1fr), 100%));
        grid-column-gap: 25px;
        grid-row-gap: 25px;
        box-sizing: border-box;
        padding: 1rem;
        width: 100%;
        height: 80%;

        .item {
          background-color: var(--secondary);
          width: 100%;
          height: 100%;
          box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
          border-radius: 15px;
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
    width: 100%;
    height: 100%;
    transition: 0.5s ease-in-out;

    .recipe-list {
      padding: 0;
      margin: 0;
      height: 100%;
      width: 100%;
      box-sizing: border-box;
      flex-direction: column;
      justify-content: center;
      align-items: flex-start;

      .container {
        display: flex;
        flex-direction: column;
        height: 90%;
        width: 94%;
        align-items: flex-start;
        justify-content: center;
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
              height: 70%;

              & .searcher {
                & button {
                  background-color: var(--primary);
                }
              }
            }
          }
        }
      }
    }
  }
}
</style>
