<script>
import CustomInput from "@/components/CustomInput.vue";
import ToggleButton from "@/components/ToggleButton.vue";

export default {
  components: {
    CustomInput,
    ToggleButton,
  },
  data() {
    return {
      name: "Nombre",
      lastName: "Apellido",
      username: "Nombre de usuario",
    };
  },
  methods: {
    onFileSelected(event) {
      console.log(event);
    },
  },
};
</script>

<template>
  <main>
    <div class="all">
      <div class="configuration">
        <h1>Editar perfil</h1>
      </div>
      <div class="main-container">
        <section class="column-left">
          <div class="box">
            <img src="/src/assets/img/user-image.png" class="pitayapp-user" />
            <div>
              <div class="file-select" id="src-file1">
                <input type="file" @change="onFileSelected" />
              </div>
              <p>Sube una foto de perfil</p>
            </div>
          </div>
          <div class="information">
            <label>{{ name }} {{ lastName }}</label>
            <p>{{ username }}</p>
          </div>
          <div class="information">
            <label>Usuario desde</label>
            <p>18/05/2021</p>
          </div>
          <p class="reset-password">Cambiar contraseña</p>
          <p class="reset-password">Eliminar cuenta</p>
        </section>
        <section class="column-right">
          <div class="userInformationContainer">
            <CustomInput v-model="name" title="Nombre" text="Noelia" />
            <CustomInput v-model="lastName" title="Apellido" text="Plasencia" />
            <CustomInput v-model="username" title="Usuario" text="tastyfancy79" />
            <CustomInput title="Email" text="tastyfancy79@gmail.com" />
          </div>
          <div class="buttons-submit">
            <button>Guardar cambios</button>
            <RouterLink class="router-link" to="/upload">
              <p>+ Subir nueva receta</p>
            </RouterLink>
          </div>
          <div class="configuration">
            <h1>Configuración</h1>
            <div class="checkbox-button">
              <label>Permitir notificaciones</label>
              <ToggleButton />
            </div>
          </div>
        </section>
      </div>
    </div>
  </main>
</template>

<style scoped>
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
<style lang="scss" scoped>
@media (min-width: 300px) {
  header {
    display: none;
  }
  .all{
    .configuration{
      h1{
        padding: 1.5rem;
      }
    }
  }

  .main-container {
    /* margin: 10px 0 10px 7rem; */
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .column-left {
      max-width: 80vw;
      display: flex;
      flex-direction: column;
      margin-bottom: 20px;

      .box {
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        align-self: center;
        width: 300px;
        height: 275px;
        background: white;
        border: gray dashed;
        margin-bottom: 30px;
        padding: 15px;

        img {
          width: 70%;
          padding: 5%;
        }

        .file-select {
          position: relative;
          display: inline-block;
          margin-bottom: 0.5rem;

          & ::before {
            background-color: #f9458e;
            color: white;
            display: flex;
            justify-content: center;
            align-items: center;
            border-radius: 3px;
            content: "Seleccionar";
            position: absolute;
            left: 0;
            right: 0;
            top: 0;
            bottom: 0;
            font-weight: bold;
          }

          & input[type="file"] {
            width: 200px;
            height: 32px;
            display: inline-block;

            &:hover {
              cursor: pointer;
            }
          }
        }

        div {
          display: flex;
          flex-direction: column;
          justify-content: center;
          align-items: center;
        }
      }

      .information {
        margin-bottom: 20px;

        label {
          font-size: 1rem;
          font-weight: bold;
        }

        p {
          font-size: 0.85rem;
          font-weight: 600;
          color: grey;
        }
      }

      .reset-password {
        margin-bottom: 20px;
        font-size: 1rem;
        font-weight: bold;
        color: #f9458e;

        &:hover {
          color: #b83268;
          cursor: pointer;
        }
      }
    }

    .buttons-submit {
      display: flex;
      align-items: center;
      gap: 20px;
      margin: 50px 0;

      button {
        background: #f9458e;
        border-radius: 30px;
        border-color: transparent;
        font-size: 1rem;
        font-weight: bold;
        color: #ffffff;
        width: 200px;
        height: 40px;

        &:hover {
          background: #b83268;
          cursor: pointer;
        }
      }

      .router-link {
        font-size: 1rem;
        font-weight: bold;
        color: #f9458e;
        text-decoration: none;

        &:hover {
          color: #b83268;
          cursor: pointer;
        }
      }
    }

    .checkbox-button {
      display: flex;
      align-items: center;
      gap: 10px;
      margin: 10px;

      label {
        font-size: 1.2rem;
      }
    }
  }
}

@media (min-width: 800px) {
  main {

      margin-bottom: 0;
      /* padding: 6rem 0 0 8rem; */
      box-sizing: border-box;

    .all{
      position: absolute;
      top: 5.5rem;
      left: 6.5rem;
      width: 94%;
      height: 90%;
      padding: 2rem;
      display: flex;
      flex-direction: column;

      .configuration{
        /* h1 {
          margin-bottom: 30px;
        } */
        margin-bottom: 2rem;
      }
      .main-container {
        display: flex;
        justify-content: space-around;
        flex-direction: row;
        align-items: inherit;
        width: 100%;
        height: 100%;
        padding-left: 4rem;


        .column-left {
          .box {
            display: flex;
            flex-direction: column;
            justify-content: center;
            align-items: center;
            width: 300px;
            height: 275px;
            background: white;
            border: gray dashed;
            margin-bottom: 30px;
            padding: 15px;

            img {
              width: 70%;
              padding: 5%;
            }

            .file-select {
              position: relative;
              display: inline-block;

              & ::before {
                background-color: #f9458e;
                color: white;
                display: flex;
                justify-content: center;
                align-items: center;
                border-radius: 3px;
                content: "Seleccionar";
                position: absolute;
                left: 0;
                right: 0;
                top: 0;
                bottom: 0;
                font-weight: bold;
              }

              & input[type="file"] {
                width: 200px;
                height: 32px;
                display: inline-block;

                &:hover {
                  cursor: pointer;
                }
              }
            }

            div {
              display: flex;
              flex-direction: column;
              justify-content: center;
              align-items: center;
            }
          }

          .information {
            margin-bottom: 20px;

            label {
              font-size: 1rem;
              font-weight: bold;
            }

            p {
              font-size: 0.85rem;
              font-weight: 600;
              color: grey;
            }
          }

          .reset-password {
            margin-bottom: 20px;
            font-size: 1rem;
            font-weight: bold;
            color: #f9458e;

            &:hover {
              color: #b83268;
              cursor: pointer;
            }
          }
        }

        .column-right {
          max-width: 60vw;
          width: 100%;
          margin: 0 10%;

          .userInformationContainer {
            display: grid;
            grid-template-columns: 1fr 1fr;
            grid-template-rows: auto;
            grid-gap: 20px;
            max-width: 800px;
            margin-bottom: 20px;
          }

          .buttons-submit {
            display: flex;
            align-items: center;
            gap: 20px;
            margin-bottom: 50px;

            button {
              background: #f9458e;
              border-radius: 30px;
              border-color: transparent;
              font-size: 1rem;
              font-weight: bold;
              color: #ffffff;
              width: 200px;
              height: 40px;

              &:hover {
                background: #b83268;
                cursor: pointer;
              }
            }

            .router-link {
              font-size: 1rem;
              font-weight: bold;
              color: #f9458e;
              text-decoration: none;

              &:hover {
                color: #b83268;
                cursor: pointer;
              }
            }
          }

          .checkbox-button {
            display: flex;
            align-items: center;
            gap: 10px;
            margin: 10px;

            label {
              font-size: 1.2rem;
            }
          }
        }
      }
    }
  }
}
</style>
