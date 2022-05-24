<script>
import CustomInput from '@/components/CustomInput.vue'
import ToggleButton from '@/components/ToggleButton.vue'

let idInterests = 0;

export default {
  components: {
    CustomInput,
    ToggleButton
  },
  data() {
    return {
      name: 'Noelia',
      lastName: 'Plasencia',
      username: 'tastyfancy79',
    }
  },
  methods: {
    onFileSelected(event) {
      console.log(event)
    }
  }
}
</script>

<template>
  <main>
    <h1>Editar perfil</h1>
    <div class="main-container">
      <section class="column-left">
        <div class="box">
          <img src="/src/assets/img/user-image.png" class="pitayapp-user">
          <div>
            <input type="file" @change="onFileSelected">
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
      </section>
      <section class="column-right">
        <div class="userInformationContainer">
          <CustomInput v-model="name" title="Nombre" text="Noelia"/>
          <CustomInput v-model="lastName" title="Apellido" text="Plasencia"/>
          <CustomInput v-model="username" title="Usuario" text="tastyfancy79"/>
          <CustomInput title="Email" text="tastyfancy79@gmail.com"/>
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
            <ToggleButton/>
          </div>
        </div>
      </section>
    </div>
  </main>
</template>

<style lang="scss" scoped>

@media (min-width: 300px) {
  header {
    display: none;
  }

  .main-container {
    margin: 10px 0;
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
        color: #F9458E;

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
        background: #F9458E;
        border-radius: 30px;
        border-color: transparent;
        font-size: 1rem;
        font-weight: bold;
        color: #FFFFFF;
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
        color: #F9458E;
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
    h1 {
      margin-bottom: 30px;
    }

    .main-container {
      display: flex;
      justify-content: space-around;
      flex-direction: row;
      align-items: inherit;

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
          color: #F9458E;

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
            background: #F9458E;
            border-radius: 30px;
            border-color: transparent;
            font-size: 1rem;
            font-weight: bold;
            color: #FFFFFF;
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
            color: #F9458E;
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

</style>