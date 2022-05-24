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
      <RouterLink to="/"><button><img class="view-icon" src="../assets/svg/home-iconn.svg" alt=""></button>
        <h2>Home</h2>
      </RouterLink>
      <RouterLink to="/discover"><button><img class="view-icon" src="../assets/svg/discover-iconn.svg" alt="">
          <div class="svg"></div>
        </button>
        <h2>Discover</h2>
      </RouterLink>
      <RouterLink to="/upload"><button><img class="view-icon" src="../assets/svg/upload-iconn.svg" alt="">
        </button>
        <h2>Upload</h2>
      </RouterLink>
      <RouterLink to="/collections"><button><img class="view-icon" src="../assets/svg/collections-iconn.svg"
            alt=""></button>
        <h2>Collections</h2>
      </RouterLink>
      <RouterLink to="/profile"><button><img class="view-icon not-desktop" src="../assets/svg/user-icon2.svg"
            alt=""></button>
      </RouterLink>
    </div>

    <div class="pitayapp-logo"><img src="../assets/img/pitayapp-white-iso.png" alt="" class="loguito"></div>
  </aside>

</template>

<style lang="scss" scoped>
@media (min-width: 300px) {
  aside {
    position: fixed;
    bottom: 0;
    width: 100%;
    height: 8%;
    background-color: var(--secondary);
    -webkit-box-shadow: 1px -4px 16px 8px rgba(0, 0, 0, 0.28);
    box-shadow: 1px -4px 16px 8px rgba(0, 0, 0, 0.28);
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
      justify-content: space-between;
      margin-top: 0;
      width: 100%;
      height: 100%;
      transition: 0.3s ease-in-out;

      a {
        background-color: transparent;
        text-decoration: none;
        display: flex;
        align-items: center;
        justify-content: center;
        width: 100%;
        transition: 0.3s ease-in-out;


        .active {
          filter: brightness(0) saturate(100%) invert(43%) sepia(64%) saturate(2217%) hue-rotate(308deg) brightness(95%) contrast(105%);
          background-color: red;
        }

        /*         &:hover {
          background-color: var(--cursor-color);
          transition: 0.3s all;
          z-index: 1;
          width: 100%
        } */

        h2 {
          display: none;
        }

        button {
          background-color: transparent;
          outline: none;
          border: none;
          justify-content: center;



          .view-icon {
            background-color: transparent;
            width: 2rem;
            height: 2rem;
            transition: 0.2s ease-out;
            margin-top: 0.5rem;
            filter: brightness(0) saturate(100%) invert(13%) sepia(61%) saturate(20%) hue-rotate(38deg) brightness(102%) contrast(96%);

          }
        }
      }
    }

    .pitayapp-logo {
      .loguito {
        display: none;
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
      justify-content: space-between;
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
        transition: 0.3s ease-in-out;

        .menu-icon {
          background-color: var(--primary);
          display: flex;
          justify-content: center;
          padding: 1rem;
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
        margin-top: 1rem;
        width: 100%;
        transition: 0.3s ease-in-out;

        a {
          background-color: transparent;
          text-decoration: none;
          display: flex;
          align-items: center;
          justify-content: center;
          width: 100%;
          transition: 0.3s ease-in-out;

          .active {
            filter: brightness(0) saturate(100%) invert(48%) sepia(29%) saturate(7317%) hue-rotate(310deg) brightness(98%) contrast(99%);
            background-color: red;
          }

          /*           &:hover {
            background-color: var(--cursor-color);
            transition: 0.3s all;
            z-index: 1;
            width: 100%
          } */

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

            .view-icon {
              background-color: transparent;
              width: 3rem;
              transition: 0.2s ease-out;
              filter: none;


            }

            & .not-desktop {
              display: none;
            }

          }

        }

        .pitayapp-logo {
          display: none;
        }

        .profile-link {
          display: none;
        }

        .pitayapp-logo {
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
            display: block;
          }
        }
      }
    }
  }
}
</style>
