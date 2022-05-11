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
    <RouterView class="router-view" />
  </main>
  <!-- <div id="nav">
    <RouterLink to="/">Home</RouterLink> |
    <RouterLink to="/discover">Discover</RouterLink>
    <RouterLink to="/upload">Upload</RouterLink>
    <RouterLink to="/collections">Collections</RouterLink>
  </div> -->


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



  #app {
    width: 100%;
    height: 100%;

    /*  main {
      flex: 1 1 0;
      padding: 2rem;
    } */

    .router-view {
      margin-top: 2.5rem;
      margin-left: 10rem;

      @media (max-width: 800px) {
        margin-top: 0;
        margin-left: 0;
      }
    }
  }

}
</style>
