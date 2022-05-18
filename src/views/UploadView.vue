<script>
export default {
  name: "UploadView",

  data() {
    return {
      username: "Antonio",
      /* Las recetas más populares hay que meterlas en un componente aparte */
      mostPopular: [
        {
          title: "Receta 1",
          author: "Autor 1",
        },
        {
          title: "Receta 2",
          author: "Autor 2",
        },
        {
          title: "Receta 3",
          author: "Autor 3",
        },
      ],
    };
  },
};
</script>



<template>
  <main class="upload-view">
    <div class="top-container">
      <div class="title">
        <h1>Sube tu receta</h1>
      </div>
      <div class="input-recipe-textbox">
        <input
          type="text"
          placeholder="    Nombre de tu receta"
          class="name-input-bar"
        />
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

  .upload-view {
    width: 100vw;
    height: 100vh;
    margin-bottom: 6rem;

    & .top-container {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
      padding: 8% 12% 8% 12%;
      justify-content: flex-start;
      gap: 1.5rem;
    }
    & .input-recipe-textbox {
      width: 18.5rem;
      height: 2.5rem;
      display: flex;
      justify-content: flex;
      align-items: center;
      background-color: white;
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
      border-radius: 30px;

      .name-input-bar {
        width: 100%;
        height: 1.5rem;
        border-radius: 15px;
        border: 0;
        background-color: white;
      }

      & input::placeholder {
        font-size: 0.8rem;
      }
    }
  }
}
</style>
