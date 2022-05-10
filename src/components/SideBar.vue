<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'

const is_expanded = ref(false)
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
}
</script>

<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">

    <div class="top-elements">
      <button class="menu-icon" @click="ToggleMenu">
        <img src="../assets/menu-icon.svg" alt="" class="menu">
      </button>
      /*
      <!--  <div class="logo">
          <img src="../assets/pitayapp-white-iso.png" alt="">
        </div> --> */
    </div>
    <div class="nav-icons">
      <RouterLink to="/"><button><img class="nav-icon" src="../assets/home-iconn.svg" alt=""></button>Home</RouterLink>
      <RouterLink to="/discover"><button><img class="nav-icon" src="../assets/discover-iconn.svg"
            alt=""></button>Discover
      </RouterLink>
      <RouterLink to="/upload"><button><img class="nav-icon" src="../assets/upload-iconn.svg" alt=""></button>Upload
      </RouterLink>
      <RouterLink to="/collections"><button><img class="nav-icon" src="../assets/collections-iconn.svg"
            alt=""></button>Collections
      </RouterLink>
    </div>
  </aside>
  <RouterView />

</template>

<style lang="scss" scoped>
aside {
  display: flex;
  flex-direction: column;
  background-color: var(--primary);
  width: calc(5rem + 32px);
  min-height: 100vh;
  overflow: hidden;
  padding: 1rem;
  transition: 0.5s ease-out;

  &.is-expanded {
    width: var(--sidebar-width);
  }

  @media (max-width: 780px) {
    position: fixed;
    z-index: 99;
    display: none;
  }

  .top-elements {
    display: flex;
    flex-direction: column;
    background-color: var(--primary);
    ;


    .menu-icon {
      background-color: var(--primary);
      display: flex;
      justify-content: center;
      padding: 1rem;
      margin-bottom: 2rem;
      outline: none;
      border: none;

      .menu {
        background-color: var(--primary);
        width: 2.5rem;
        cursor: pointer;
      }
    }

    .logo {
      background-color: var(--primary);
      display: flex;
      justify-content: center;
      display: none;

      img {
        background-color: var(--primary);
        width: 70%;

      }
    }
  }

  .nav-icons {
    background-color: var(--primary);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    margin-top: 6rem;


    button {
      background-color: var(--primary);
      outline: none;
      border: none;
      display: flex;
      cursor: pointer;
      justify-content: center;
      margin-top: 2rem;
      margin-bottom: 2rem;

      .nav-icon {
        background-color: var(--primary);
        width: 3rem;

      }
    }

  }

}
</style>
