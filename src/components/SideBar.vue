<script setup>
import { RouterLink } from 'vue-router'
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
        <h2 class="toggle-title">Menú</h2>
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
      <RouterLink class="profile-link" to="/profile"><button><img class="profile-icon" src="../assets/svg/user-icon.svg"
            alt=""></button>
      </RouterLink>
      <div class="pitayapp-logo"><img src="../assets/img/pitayapp-white-iso.png" alt="" class="loguito"></div>
    </div>
  </aside>

</template>

<style lang="scss" scoped>
@media (min-width: 400px) {
  aside {
    background-color: red;
    -webkit-box-shadow: 1px -4px 16px 8px rgba(0, 0, 0, 0.28);
    box-shadow: 1px -4px 16px 8px rgba(0, 0, 0, 0.28);
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 20px 20px 0 0;

    .top-elements {

      .menu-icon {
        display: none;

        .menu {

          cursor: pointer;
        }

        .toggle-title {
          display: none;
          background-color: transparent;
        }
      }
    }

    .nav-icons {
      background-color: transparent;
      display: flex;
      justify-content: center;
      align-items: center;
      justify-content: space-around;
      margin-top: 4rem;
      width: 100%;
      transition: 0.3s ease-in-out;


      .router-link {
        background-color: transparent;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        transition: 0.3s ease-in-out;

        &:hover {
          background-color: var(--cursor-color);
          transition: 0.3s all;
          z-index: 1;
          width: 100%
        }

        h2 {
          display: none;
        }


        button {
          background-color: transparent;
          outline: none;
          border: none;
          justify-content: center;
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;


          .nav-icon {
            background-color: transparent;
            width: 3rem;
            transition: 0.2s ease-out;
            fill: black;
          }
        }
      }

      .profile-link {
        background-color: transparent;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        transition: 0.3s ease-in-out;

        .profile-icon {
          background-color: transparent;
          width: 3rem;
          transition: 0.2s ease-out;
          cursor: pointer;

        }

        button {
          background-color: transparent;
          outline: none;
          border: none;
          justify-content: center;
          margin-top: 1.5rem;
          margin-bottom: 1.5rem;

        }
      }

    }

  }
}

@media (min-width: 800px) {
  #app {
    display: flex;

    aside {
      position: absolute;
      display: flex;
      flex-direction: column;
      background-color: var(--primary);
      width: calc(5rem + 1.5rem);
      min-height: 100vh;
      overflow: hidden;
      padding: 1rem;
      transition: 0.5s ease-out;
      color: var(--secondary);
      -webkit-box-shadow: none;
      box-shadow: none;
      border-radius: 0;


      .top-elements {
        display: flex;
        flex-direction: column;
        background-color: var(--primary);
        justify-content: center;


        .menu-icon {
          background-color: var(--primary);
          display: flex;
          justify-content: center;
          padding: 1rem;
          margin-bottom: 2rem;
          outline: none;
          border: none;
          transition: 0.3s ease-out;

          .menu {
            background-color: var(--primary);
            width: 2.5rem;
            cursor: pointer;
          }

          .toggle-title {
            display: none;
            background-color: transparent;
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
          justify-content: center;
          width: 100%;
          transition: 0.3s ease-in-out;

          &:hover {
            background-color: var(--cursor-color);
            transition: 0.3s all;
            z-index: 1;
            width: 100%
          }

          h2 {
            background-color: transparent;
            text-decoration: none;
            display: none;
          }


          button {
            background-color: transparent;
            outline: none;
            border: none;
            justify-content: center;
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;


            .nav-icon {
              background-color: transparent;
              width: 3rem;
              transition: 0.2s ease-out;
              fill: black;
            }
          }


        }

        .pitayapp-logo {
          display: none;
        }

        .profile-link {
          display: none;
        }

      }

      &.is-expanded {
        width: var(--sidebar-width);

        .top-elements {
          .toggle-title {
            display: block;
            background-color: transparent;
            color: var(--secondary);
            font-size: 1.5rem;
            transition: 0.3s ease-in-out;
            margin-left: 10px;
          }
        }

        .router-link {
          width: 100%;
          justify-content: flex-start;


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
            display: block;
          }
        }

        .pitayapp-logo {
          display: flex;
          align-items: center;
          justify-content: center;

          .loguito {
            width: 5rem;
            height: 5rem;
            margin-top: 2rem;
            margin-bottom: 2rem;
          }

        }
      }
    }
  }
}
</style>
