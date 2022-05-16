<template>
  <main class="discover-view">
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
      <div class="cattegories one">Smoothies</div>
      <div class="cattegories two">Postres</div>
      <div class="cattegories three">cremas y sopas</div>
      <div class="cattegories four">pastas</div>
      <div class="cattegories2 five">veganas</div>
      <div class="cattegories2 six">vegan fast food</div>
      <div class="cattegories2 seven">vegetarianas</div>
    </div>


  </main>
</template>

<style lang="scss" scoped>
@media (min-width: 300px) {
  main {
    height: 100%;
    width: 100%;

    .grid-discover {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(3, 1fr);
      grid-column-gap: 0px;
      grid-row-gap: 0px;
      background-color: blue;
      height: 100%;
      width: 100%;

      .cattegories {
        background-color: var(--secondary);
        border-radius: 20px;
        height: 5rem;
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
        grid-area: 3 / 1 / 4 / 2;
      }

      .six {
        grid-area: 3 / 2 / 4 / 4;
      }

      .seven {
        grid-area: 3 / 4 / 4 / 5;
      }
    }

  }
}

@media (min-width: 800px) {
  main {
    background-color: blue;
    box-sizing: border-box;
    width: 100vw;
    height: 100%;


    .grid-discover {
      display: grid;
      grid-template-columns: repeat(4, 1fr);
      grid-template-rows: repeat(4, 1fr);
      grid-column-gap: 30px;
      grid-row-gap: 30px;
      height: 100%;
      background-color: green;
      padding: 4rem;


      .cattegories {
        align-self: center;
        background-color: var(--secondary);
        border-radius: 20px;
        height: 8rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;


      }

      .cattegories2 {
        background-color: var(--secondary);
        border-radius: 20px;
        height: 20rem;
        display: flex;
        align-items: center;
        justify-content: center;
        cursor: pointer;
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
