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
      <RouterLink class="router-link" to="/"><button><img class="view-icon" src="../assets/svg/home-iconn.svg"
            alt=""></button>
        <h2>Home</h2>
      </RouterLink>
      <RouterLink class="router-link" to="/discover"><button><img class="view-icon"
            src="../assets/svg/discover-iconn.svg" alt="">
          <div class="svg"></div>
        </button>
        <h2>Discover</h2>
      </RouterLink>
      <RouterLink class="router-link" to="/upload"><button><img class="view-icon" src="../assets/svg/upload-iconn.svg"
            alt="">
        </button>
        <h2>Upload</h2>
      </RouterLink>
      <RouterLink class="router-link" to="/collections"><button><img class="view-icon"
            src="../assets/svg/collections-iconn.svg" alt=""></button>
        <h2>Collections</h2>
      </RouterLink>
      <RouterLink class="profile-link" to="/profile"><button><svg width="60" height="49" viewBox="0 0 23 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.25 0C10.0139 0 8.80549 0.366556 7.77769 1.05331C6.74988 1.74007 5.9488 2.71619 5.47575 3.85823C5.00271 5.00027 4.87893 6.25693 5.12009 7.46931C5.36125 8.6817 5.9565 9.79534 6.83058 10.6694C7.70466 11.5435 8.8183 12.1388 10.0307 12.3799C11.2431 12.6211 12.4997 12.4973 13.6418 12.0242C14.7838 11.5512 15.7599 10.7501 16.4467 9.72231C17.1334 8.69451 17.5 7.48613 17.5 6.25C17.5 4.5924 16.8415 3.00269 15.6694 1.83058C14.4973 0.65848 12.9076 0 11.25 0ZM11.25 10C10.5083 10 9.7833 9.78007 9.16661 9.36801C8.54993 8.95596 8.06928 8.37029 7.78545 7.68506C7.50162 6.99984 7.42736 6.24584 7.57205 5.51841C7.71675 4.79098 8.0739 4.1228 8.59835 3.59835C9.1228 3.0739 9.79098 2.71675 10.5184 2.57206C11.2458 2.42736 11.9998 2.50162 12.6851 2.78545C13.3703 3.06928 13.956 3.54993 14.368 4.16661C14.7801 4.7833 15 5.50832 15 6.25C15 7.24456 14.6049 8.19839 13.9017 8.90165C13.1984 9.60491 12.2446 10 11.25 10ZM22.5 23.75V22.5C22.5 20.1794 21.5781 17.9538 19.9372 16.3128C18.2962 14.6719 16.0706 13.75 13.75 13.75H8.75C6.42936 13.75 4.20376 14.6719 2.56282 16.3128C0.921872 17.9538 0 20.1794 0 22.5V23.75H2.5V22.5C2.5 20.8424 3.15848 19.2527 4.33058 18.0806C5.50269 16.9085 7.0924 16.25 8.75 16.25H13.75C15.4076 16.25 16.9973 16.9085 18.1694 18.0806C19.3415 19.2527 20 20.8424 20 22.5V23.75H22.5Z"
              fill="#282828" />
          </svg></button>
      </RouterLink>
      <div class="pitayapp-logo"><img src="../assets/img/pitayapp-white-iso.png" alt="" class="loguito"></div>
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
    height: 12%;
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

          .view-icon {
            background-color: transparent;
            width: 3rem;
            height: 3rem;
            transition: 0.2s ease-out;
            margin-top: 0.5rem;
            filter: brightness(0) saturate(100%) invert(13%) sepia(61%) saturate(20%) hue-rotate(38deg) brightness(102%) contrast(96%);
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

            .view-icon {
              background-color: transparent;
              width: 3rem;
              transition: 0.2s ease-out;
              filter: none;
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
