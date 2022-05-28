<script setup>
import { /*RouterLink,*/ RouterView /*useRoute*/ } from "vue-router";
import SideBar from "@/components/SideBar.vue";
import HeaderApp from "@/components/HeaderApp.vue";
/* const route = useRoute();
const path = route.path; */
</script>

<template>
  <!-- {{path}} -->
  <!-- {{path != `/` || path != `/login` || path != `/register`}} v-show="path == `/home` && path == `/discover` && path == `/register`" v-if="false" -->
  <SideBar v-if="$route.meta.requiresSideBar" />
  <header>
    <HeaderApp v-if="$route.meta.requiresHeader" />
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
@import url("https://fonts.googleapis.com/css2?family=Lora:ital,wght@0,400;0,500;0,600;0,700;1,400;1,500;1,600;1,700&family=Nunito:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&family=Spectral:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&family=Vollkorn:ital,wght@0,400;0,500;0,600;0,700;0,800;0,900;1,400;1,500;1,600;1,700;1,800;1,900&display=swap");

:root {
  --primary: #f9458e;
  --secondary: #fff;
  --cursor-color: rgb(221, 220, 220, 0.2);
  --sidebar-width: 310px;
  --dope: rgb(221, 220, 220, 0.1);
}

* {
  font-family: "Nunito", sans-serif;
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
      height: 100vh;
      margin: 0;
      padding: 0;

      /* @media (max-width: 800px) {
        //height: 140vh; //This allows to do vertical scroll in mobile version
      } */
      @media (max-width: 800px) {

        // height: 0vh; //This allows to do vertical scroll in mobile version
        a.active.router-link-exact-active {
          filter: brightness(0) saturate(100%) invert(48%) sepia(29%) saturate(7317%) hue-rotate(310deg) brightness(98%) contrast(99%);
        }
      }

      main {
        width: 100vw;
        height: 100%;

        @media (max-width: 800px) {
          height: 100vh;
        }

        .router-view {

          /* padding: 1.5rem 0 0 10rem; */
          /* box-sizing: border-box;
          width: 100vw;
          height: 100%; */
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