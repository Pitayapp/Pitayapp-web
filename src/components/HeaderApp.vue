<script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";
import { useUserStore } from "../stores/userStore";

const best_dropdown = ref(localStorage.getItem("best_dropwdown") === "true");
const isOpen = () => {
  best_dropdown.value = !best_dropdown.value;
  localStorage.setItem("best_dropdown", best_dropdown.value);
};

const userStore = useUserStore();

const goOut = async () => {
  userStore.logOut();
};
</script>

<template>
  <header>
    <div class="container">
      <div class="logo">
        <img
          src="../assets/img/pitayapp-rosa.png"
          alt=""
          class="pitayapp-img-logo"
        />
        <h2 class="logo-name">Pitayapp</h2>
      </div>
      <div class="header-icons">
        <div class="left-svgs">
          <RouterLink to="/upload"
            ><svg
              width="70"
              height="70"
              viewBox="0 0 70 70"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M34.5181 34.5181H21.9108M34.5181 21.9109V34.5181V21.9109ZM34.5181 34.5181V47.1254V34.5181ZM34.5181 34.5181H47.1253H34.5181Z"
                stroke="#F9458E"
                stroke-width="6"
                stroke-linecap="round"
              />
              <path
                d="M34.5181 66.0362C51.925 66.0362 66.0362 51.925 66.0362 34.5181C66.0362 17.1111 51.925 3 34.5181 3C17.1111 3 3 17.1111 3 34.5181C3 51.925 17.1111 66.0362 34.5181 66.0362Z"
                stroke="#F9458E"
                stroke-width="6"
              />
            </svg>
          </RouterLink>
          <svg
            width="50"
            height="55"
            viewBox="0 0 50 55"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M49.4365 34.6931L44.2308 29.5592V22.7583C44.2248 18.0584 42.452 13.5276 39.2551 10.0421C36.0582 6.5565 31.6643 4.36377 26.9231 3.88787V0H23.0769V3.88787C18.3357 4.36377 13.9418 6.5565 10.7449 10.0421C7.54803 13.5276 5.77519 18.0584 5.76923 22.7583V29.5592L0.563461 34.6931C0.20279 35.0487 0.000108918 35.531 0 36.0339V41.7235C0 42.2265 0.202609 42.7089 0.563256 43.0646C0.923903 43.4202 1.41305 43.62 1.92308 43.62H15.3846V45.0936C15.3428 47.4996 16.2027 49.8362 17.7996 51.6557C19.3965 53.4751 21.618 54.6495 24.0385 54.9537C25.3753 55.0844 26.7252 54.9378 28.0011 54.5231C29.2771 54.1085 30.4509 53.4351 31.4472 52.5463C32.4434 51.6574 33.2399 50.5727 33.7856 49.362C34.3312 48.1514 34.6139 46.8414 34.6154 45.5166V43.62H48.0769C48.587 43.62 49.0761 43.4202 49.4367 43.0646C49.7974 42.7089 50 42.2265 50 41.7235V36.0339C49.9999 35.531 49.7972 35.0487 49.4365 34.6931ZM30.7692 45.5166C30.7692 47.0255 30.1614 48.4727 29.0795 49.5397C27.9975 50.6067 26.5301 51.2061 25 51.2061C23.4699 51.2061 22.0025 50.6067 20.9205 49.5397C19.8386 48.4727 19.2308 47.0255 19.2308 45.5166V43.62H30.7692V45.5166ZM46.1538 39.827H3.84615V36.8191L9.05192 31.6852C9.41259 31.3296 9.61528 30.8473 9.61538 30.3444V22.7583C9.61538 18.7344 11.2363 14.8753 14.1214 12.0299C17.0066 9.18459 20.9197 7.58609 25 7.58609C29.0803 7.58609 32.9934 9.18459 35.8786 12.0299C38.7637 14.8753 40.3846 18.7344 40.3846 22.7583V30.3444C40.3847 30.8473 40.5874 31.3296 40.9481 31.6852L46.1538 36.8191V39.827Z"
              fill="#F9458E"
              stroke-width="6"
            />
          </svg>
        </div>
        <div :class="`${best_dropdown ? 'best-dropdown' : ''}`">
          <button class="toggle-prof" v-on:click="isOpen">
            <img
              src="../assets/img/user-image.png"
              alt=""
              class="pitayapp-user"
            />
          </button>
          <div class="dropdown-content" id="myDropdown">
            <RouterLink class="router-link" to="/profile"
              ><img
                src="../assets/svg/config-icon.svg"
                alt=""
                class="icon-dd"
              />Configuración
            </RouterLink>
            <RouterLink class="router-link" to="/collections"
              ><img
                src="../assets/svg/bcollection-icon.svg"
                alt=""
                class="icon-dd"
              />Mis Colecciones
            </RouterLink>
            <a @click="goOut" class="router-link"
              ><img
                src="../assets/svg/logout-icon.svg"
                alt=""
                class="icon-dd"
              />Cerrar Sesión</a
            >
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<!-- <script setup>
import { RouterLink } from "vue-router";
import { ref } from "vue";

const best_dropdown = ref(localStorage.getItem("best_dropwdown") === "true");
const isOpen = () => {
  best_dropdown.value = !best_dropdown.value;
  localStorage.setItem("best_dropdown", best_dropdown.value);
};
</script> -->

<style lang="scss" scoped>
@media (min-width: 300px) {
  header {
    display: none;
  }
}

@media (min-width: 800px) {
  header {
    display: block;

    .container {
      background-color: var(--secondary);
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 2px 10px 15px 1px rgba(0, 0, 0, 0.2);
      -webkit-box-shadow: 2px 10px 15px 1px rgba(0, 0, 0, 0.2);
      width: 100%;
      height: 5.5rem;
      position: fixed;
      z-index: 1;

      .logo {
        display: flex;
        background-color: transparent;
        margin-left: 7%;

        .pitayapp-img-logo {
          background-color: transparent;
          width: 3.5rem;
          height: 3.5rem;
        }

        .logo-name {
          color: var(--primary);
          display: flex;
          align-items: center;
          margin-left: 8px;
          background-color: transparent;
        }
      }

      .header-icons {
        display: flex;
        background-color: transparent;
        margin-right: 3%;

        .left-svgs {
          background-color: transparent;
          display: flex;
          align-items: center;
          background-color: transparent;
          width: 8rem;
          height: 4rem;
          margin-right: 1.2rem;

          svg {
            width: 2.5rem;
            height: 2.5rem;
            cursor: pointer;
            margin-right: 20px;
            display: flex;
            justify-content: center;
            align-items: center;
          }
        }

        .toggle-prof {
          display: flex;
          align-items: center;
          justify-content: center;
          width: 4rem;
          height: 4rem;
          outline: none;
          border: none;

          .pitayapp-user {
            width: 3.5rem;
            height: 3.5rem;
            cursor: pointer;
          }
        }

        .dropdown-content {
          display: none;
          position: fixed;
          right: 5rem;
          margin-top: 0.5rem;
          display: flex;
          flex-direction: column;
          justify-content: space-around;
          align-items: flex-start;
          background-color: white;
          box-shadow: 2px 2px 15px 5px rgba(0, 0, 0, 0.2);
          -webkit-box-shadow: 2px 2px 15px 5px rgba(0, 0, 0, 0.2);
          min-width: 0rem;
          transition: 0.2s ease-out;

          .router-link {
            display: none;
            color: #282828;
            text-decoration: none;
            font-weight: 500;
          }
        }

        & .best-dropdown {
          background-color: transparent;
          transition: 0.3s ease-out;

          .toggle-prof {
            display: flex;
            align-items: center;
            justify-content: center;
            width: 4rem;
            height: 4rem;
            outline: none;
            border: none;

            .pitayapp-user {
              width: 3.5rem;
              height: 3.5rem;
              cursor: pointer;
            }
          }

          .dropdown-content {
            display: block;
            position: fixed;
            right: 5rem;
            margin-top: 0.5rem;
            display: flex;
            flex-direction: column;
            justify-content: space-around;
            align-items: flex-start;
            background-color: white;
            box-shadow: 2px 2px 15px 5px rgba(0, 0, 0, 0.2);
            -webkit-box-shadow: 2px 2px 15px 5px rgba(0, 0, 0, 0.2);
            width: 14rem;
            height: 12rem;
            padding: 1rem;
            transition: 0.3s ease-out;

            .router-link {
              display: block;
              color: #282828;
              text-decoration: none;
              font-weight: 500;
              margin-left: 1rem;
              display: flex;
              align-items: center;
              flex-direction: row;
              cursor: pointer;

              .icon-dd {
                width: 1.5rem;
                height: 1.5rem;
                margin-right: 0.6rem;
              }
            }

            .router-link:hover {
              color: var(--primary);
              transition: 0.1s ease-out;

              .icon-dd {
                filter: brightness(0) saturate(100%) invert(48%) sepia(29%)
                  saturate(7317%) hue-rotate(310deg) brightness(98%)
                  contrast(99%);
                transition: 0.1s ease-out;
              }
            }
          }
        }
      }
    }
  }
}
</style>
