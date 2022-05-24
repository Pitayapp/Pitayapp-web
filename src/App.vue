<script setup>
/* import { RouterLink, RouterView } from 'vue-router' */
/* import SideBar from '@/components/SideBar.vue'
import HeaderApp from '@/components/HeaderApp.vue' */
</script>

<template>

  <SideBar />
  <header>
    <HeaderApp />
  </header>
  <main>
    <RouterView class="router-view" />
  </main>

</template>

<style lang="scss">
@import url('https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Vollkorn:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap');

:root {
  --primary: #F9458E;
  --secondary: #FFF;
  --cursor-color: rgb(221, 220, 220, 0.2);
  --sidebar-width: 310px;
}

* {
  font-family: 'Nunito', sans-serif;
  background-color: transparent;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  body {
    width: 100vw;
    height: 100vh;

    #app {
      width: 100vw;
      height: 100vh;

      @media (max-width: 800px) {
        height: 140vh; //This allows to do vertical scroll in mobile version
      }

      main {
        width: 100vw;
        height: 100vh;

        @media (max-width: 800px) {
          height: 100vh;
        }

        .router-view {
          /* padding: 1.5rem 0 0 10rem; */
          box-sizing: border-box;
          width: 100vw;
          height: 100%;

          @media (max-width: 800px) {
            padding: 0;
          }
        }
      }
    }
  }
}
</style>
