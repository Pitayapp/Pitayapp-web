<script setup>
import { RouterLink, RouterView } from 'vue-router'
import SideBar from '@/components/SideBar.vue'
</script>

<template>

  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/discover">Discover</router-link>
    <router-link to="/upload">Upload</router-link>
    <router-link to="/collections">Collections</router-link>
  </div>
  <router-view />

  <SideBar />
  <RouterView />
</template>

<style lang="scss">
:root {
  --primary: #F9458E;
  --secondary: #FFF;
  --cursor-color: rgb(221, 220, 220, 0.5);
  --sidebar-width: 300px;
}

* {
  font-family: 'Inter', sans-serif;
  background-color: #fff;
  box-sizing: border-box;
  margin: 0;
  padding: 0;

  .app {
    display: flex;

    main {
      flex: 1 1 0;
      padding: 2rem;
    }

  }
}
</style>
