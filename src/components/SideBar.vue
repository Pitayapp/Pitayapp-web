<script setup>
import { RouterLink, RouterView } from 'vue-router'
import { ref } from 'vue'


const is_expanded = ref(localStorage.getItem("is_expanded") === "true")
const ToggleMenu = () => {
  is_expanded.value = !is_expanded.value
  localStorage.setItem("is_expanded", is_expanded.value)
}
</script>

<template>
  <aside :class="`${is_expanded ? 'is-expanded' : ''}`">

    <div class="top-elements">
      <button class="menu-icon" @click="ToggleMenu">
        <img src="../assets/svg/menu-icon.svg" alt="" class="menu">
      </button>


    </div>
    <div class="nav-icons">
      <RouterLink class="router-link" to="/"><button><img class="nav-icon" src="../assets/svg/home-iconn.svg"
            alt=""></button>
        <h2>Home</h2>
      </RouterLink>
      <RouterLink class="router-link" to="/discover"><button><img class="nav-icon"
            src="../assets/svg/discover-iconn.svg" alt=""></button>
        <h2>Discover</h2>
      </RouterLink>
      <RouterLink class="router-link" to="/upload"><button><img class="nav-icon" src="../assets/svg/upload-iconn.svg"
            alt=""></button>
        <h2>Upload</h2>
      </RouterLink>
      <RouterLink class="router-link" to="/collections"><button><img class="nav-icon"
            src="../assets/svg/collections-iconn.svg" alt=""></button>
        <h2>Collections</h2>
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
  color: var(--secondary);


  .top-elements {
    display: flex;
    flex-direction: column;
    background-color: var(--primary);



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
      display: flex;
      justify-content: center;
      visibility: hidden;
      margin-top: 1.2rem;

      img {
        background-color: transparent;
        width: 70px;
        visibility: hidden;
      }
    }
  }

  .nav-icons {
    background-color: transparent;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-top: 4rem;
    width: 100%;
    transition: 0.3s ease-in-out;


    .router-link {
      background-color: transparent;
      text-decoration: none;
      display: flex;
      align-items: center;
      justify-content: flex-start;
      width: 100%;

      &:hover {
        background-color: var(--cursor-color);
        transition: 0.5s all;
        z-index: 1;
        width: 100%
      }

      h2 {
        background-color: transparent;
        text-decoration: none;
        visibility: hidden;
      }


      button {
        background-color: transparent;
        outline: none;
        border: none;
        justify-content: center;
        margin-top: 1.5rem;
        margin-bottom: 1.5rem;
        margin-left: 1rem;

        .nav-icon {
          background-color: transparent;
          width: 3rem;
          transition: 0.2s ease-out;

        }
      }


    }

  }

  &.is-expanded {
    width: var(--sidebar-width);

    .router-link {
      width: 100%;

      .nav-icons {
        background-color: transparent;
        margin-right: 1rem;
      }

      h2 {
        background-color: transparent;
        color: var(--secondary);
        font-size: 1.5rem;
        font-weight: 700;
        text-decoration: none;
        margin-left: 20px;
        transition: 0.3s ease-in-out;
        visibility: visible;
      }
    }

  }
}
</style>
