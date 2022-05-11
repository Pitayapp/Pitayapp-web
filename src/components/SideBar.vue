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
      <RouterLink class="router-link" to="/"><button><svg width="65" height="65" viewBox="0 0 65 65" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M63.6521 31.9782L35.9487 2.66091L34.0918 0.694788C33.6687 0.249765 33.0965 0 32.5001 0C31.9037 0 31.3316 0.249765 30.9085 0.694788L1.34818 31.9782C0.914645 32.4354 0.572013 32.98 0.34051 33.5798C0.109008 34.1795 -0.00667224 34.8223 0.000297178 35.4702C0.0289756 38.1423 2.12967 40.2754 4.65337 40.2754H7.70046V65H57.2998V40.2754H60.4114C61.6374 40.2754 62.7917 39.7668 63.6592 38.8483C64.0864 38.3974 64.4249 37.8613 64.655 37.2711C64.8851 36.6808 65.0024 36.048 65 35.4094C65 34.1189 64.5196 32.8967 63.6521 31.9782ZM36.5151 59.5343H28.4851V44.0482H36.5151V59.5343ZM52.1377 34.8097V59.5343H41.1037V42.2263C41.1037 40.5487 39.8203 39.1899 38.2358 39.1899H26.7644C25.18 39.1899 23.8966 40.5487 23.8966 42.2263V59.5343H12.8626V34.8097H5.97975L32.5073 6.74499L34.1635 8.49856L59.0277 34.8097H52.1377Z"
              fill="#282828" stroke="#282828" stroke-width="1" />
          </svg></button>
        <h2>Home</h2>
      </RouterLink>
      <RouterLink class="router-link" to="/discover"><button><svg width="65" height="66" viewBox="0 0 65 66" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M64.8047 61.256L43.7042 39.8308C46.9785 35.5326 48.7498 30.2774 48.7498 24.7499C48.7498 18.1334 46.2067 11.9294 41.6079 7.25172C37.0092 2.57399 30.883 0 24.3749 0C17.8668 0 11.7406 2.58224 7.14184 7.25172C2.53499 11.9212 0 18.1334 0 24.7499C0 31.3581 2.54311 37.5786 7.14184 42.2481C11.7406 46.9258 17.8587 49.4998 24.3749 49.4998C29.8186 49.4998 34.9861 47.7013 39.2192 44.3848L60.3197 65.8017C60.3816 65.8646 60.4551 65.9144 60.5359 65.9485C60.6168 65.9825 60.7035 66 60.791 66C60.8785 66 60.9652 65.9825 61.046 65.9485C61.1269 65.9144 61.2004 65.8646 61.2622 65.8017L64.8047 62.213C64.8666 62.1502 64.9157 62.0756 64.9492 61.9935C64.9827 61.9114 65 61.8234 65 61.7345C65 61.6456 64.9827 61.5576 64.9492 61.4755C64.9157 61.3934 64.8666 61.3188 64.8047 61.256ZM37.2448 37.8178C33.7999 41.3076 29.2336 43.2298 24.3749 43.2298C19.5162 43.2298 14.9499 41.3076 11.505 37.8178C8.06809 34.3199 6.17497 29.6834 6.17497 24.7499C6.17497 19.8164 8.06809 15.1717 11.505 11.6819C14.9499 8.19221 19.5162 6.26997 24.3749 6.26997C29.2336 6.26997 33.808 8.18396 37.2448 11.6819C40.6817 15.1799 42.5748 19.8164 42.5748 24.7499C42.5748 29.6834 40.6817 34.3281 37.2448 37.8178Z"
              fill="#282828" />
          </svg></button>
        <h2>Discover</h2>
      </RouterLink>
      <RouterLink class="router-link" to="/upload"><button><svg width="70" height="70" viewBox="0 0 70 70" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M34.5181 34.5181H21.9108M34.5181 21.9109V34.5181V21.9109ZM34.5181 34.5181V47.1254V34.5181ZM34.5181 34.5181H47.1253H34.5181Z"
              stroke="#282828" stroke-width="7" stroke-linecap="round" />
            <path
              d="M34.5181 66.0362C51.925 66.0362 66.0362 51.925 66.0362 34.5181C66.0362 17.1111 51.925 3 34.5181 3C17.1111 3 3 17.1111 3 34.5181C3 51.925 17.1111 66.0362 34.5181 66.0362Z"
              stroke="#282828" stroke-width="7" />
          </svg>
        </button>
        <h2>Upload</h2>
      </RouterLink>
      <RouterLink class="router-link" to="/collections"><button><svg width="60" height="49" viewBox="0 0 60 49"
            fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M30 8.375C30 8.375 25.95 3 16.5 3C7.05 3 3 8.375 3 8.375V46C3 46 7.05 43.3125 16.5 43.3125C25.95 43.3125 30 46 30 46M30 8.375V46M30 8.375C30 8.375 34.05 3 43.5 3C52.95 3 57 8.375 57 8.375V46C57 46 52.95 43.3125 43.5 43.3125C34.05 43.3125 30 46 30 46"
              stroke="#282828" stroke-width="6" stroke-linecap="round" stroke-linejoin="round" />
          </svg></button>
        <h2>Collections</h2>
      </RouterLink>
      <RouterLink class="profile-link" to="/profile"><button><svg width="60" height="49" viewBox="0 0 23 24" fill="none"
            xmlns="http://www.w3.org/2000/svg">
            <path
              d="M11.25 0C10.0139 0 8.80549 0.366556 7.77769 1.05331C6.74988 1.74007 5.9488 2.71619 5.47575 3.85823C5.00271 5.00027 4.87893 6.25693 5.12009 7.46931C5.36125 8.6817 5.9565 9.79534 6.83058 10.6694C7.70466 11.5435 8.8183 12.1388 10.0307 12.3799C11.2431 12.6211 12.4997 12.4973 13.6418 12.0242C14.7838 11.5512 15.7599 10.7501 16.4467 9.72231C17.1334 8.69451 17.5 7.48613 17.5 6.25C17.5 4.5924 16.8415 3.00269 15.6694 1.83058C14.4973 0.65848 12.9076 0 11.25 0ZM11.25 10C10.5083 10 9.7833 9.78007 9.16661 9.36801C8.54993 8.95596 8.06928 8.37029 7.78545 7.68506C7.50162 6.99984 7.42736 6.24584 7.57205 5.51841C7.71675 4.79098 8.0739 4.1228 8.59835 3.59835C9.1228 3.0739 9.79098 2.71675 10.5184 2.57206C11.2458 2.42736 11.9998 2.50162 12.6851 2.78545C13.3703 3.06928 13.956 3.54993 14.368 4.16661C14.7801 4.7833 15 5.50832 15 6.25C15 7.24456 14.6049 8.19839 13.9017 8.90165C13.1984 9.60491 12.2446 10 11.25 10ZM22.5 23.75V22.5C22.5 20.1794 21.5781 17.9538 19.9372 16.3128C18.2962 14.6719 16.0706 13.75 13.75 13.75H8.75C6.42936 13.75 4.20376 14.6719 2.56282 16.3128C0.921872 17.9538 0 20.1794 0 22.5V23.75H2.5V22.5C2.5 20.8424 3.15848 19.2527 4.33058 18.0806C5.50269 16.9085 7.0924 16.25 8.75 16.25H13.75C15.4076 16.25 16.9973 16.9085 18.1694 18.0806C19.3415 19.2527 20 20.8424 20 22.5V23.75H22.5Z"
              fill="#282828" />
          </svg></button>
      </RouterLink>


    </div>
    <div class="pitayapp-logo"><img src="../assets/img/pitayapp-white-iso.png" alt="" class="loguito"></div>
  </aside>

</template>

<style lang="scss" scoped>
@media (min-width: 400px) {
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


          svg {
            background-color: transparent;
            width: 3rem;
            height: 3rem;
            transition: 0.2s ease-out;
            margin-top: 0.5rem;
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


            svg {
              background-color: transparent;
              width: 3rem;
              transition: 0.2s ease-out;
              stroke: var(--secondary);
              fill: white;
            }
          }


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
