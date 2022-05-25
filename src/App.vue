<script setup>
/* import { RouterLink, RouterView } from 'vue-router' */
import SideBar from '@/components/SideBar.vue'
import HeaderApp from '@/components/HeaderApp.vue'
</script>

<template>

  <SideBar />
  <header>
    <HeaderApp />
  </header>
  <main>
    <RouterView class="router-view" v-slot="{ Component }">
      <Transition name="route" mode="out-in">
        <Component :is="Component"></Component>
      </Transition>
    </RouterView>
  </main>

</template>

<style lang="scss">
:root {
  --primary: #F9458E;
  --secondary: #FFF;
  --cursor-color: rgb(221, 220, 220, 0.2);
  --sidebar-width: 310px;
}

* {
  font-family: 'Inter', sans-serif;
  background-color: transparent;
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  transition: 0.5s ease-out;

  body {
    width: 100vw;
    height: 100vh;

    #app {
      width: 100vw;
      height: 92vh;

      @media (max-width: 800px) {
        // height: 0vh; //This allows to do vertical scroll in mobile version
      }

      main {
        width: 100vw;
        height: 90%;

        .router-view {
          padding: 1.5rem 0 0 10rem;

          @media (max-width: 800px) {
            padding: 0;

          }
        }
      }
    }
  }
}

// route transitions

.route-center-from {
  opacity: 0;
  transform: translateX(50px);
}

.route-enter-active {
  transition: all 0.3s ease-in;
}

.route-leave-to {
  opacity: 0;
  transform: translateX(-50px);
}

.route-leave-active {
  transition: all 0.3s ease-out;
}
</style>

