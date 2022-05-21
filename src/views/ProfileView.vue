<script>
import CustomInput from '@/components/CustomInput.vue'
import ToggleButton from '@/components/ToggleButton.vue'

export default {
  components: {
    CustomInput,
    ToggleButton
  },
  data() {
    return {
      name: 'Nombre',
      nameText: 'Noelia',
      lastName: 'Apellidos',
      lastNameText: 'Plasencia',
      user: 'Usuario',
      userText: 'tastyfancy79',
      email: 'Email',
      emailText: 'tastyfancy79@gmail.com',
    }
  }
}
</script>

<template>
  <main class="collections-view">
    <h1>Editar perfil</h1>
    <div class="userInformationContainer">
      <CustomInput :title="name" :text="nameText"/>
      <CustomInput :title="lastName" :text="lastNameText"/>
      <CustomInput :title="user" :text="userText"/>
      <CustomInput :title="email" :text="emailText"/>
    </div>
    <div class="buttons-submit">
      <button>Guardar cambios</button>
      <p>+ Subir nueva receta</p>
    </div>
    <div class="configuration">
      <h1>Configuración</h1>
      <div class="checkbox-button">
        <label>Permitir notificaciones</label>
        <ToggleButton/>
      </div>
    </div>
  </main>
</template>

<style lang="scss" scoped>
.userInformationContainer {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: auto;
  grid-gap: 20px;
  max-width: fit-content;
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

  p {
    font-size: 1rem;
    font-weight: bold;
    color: #F9458E;

    &:hover {
      color: #b83268;
      cursor: pointer;
    }
  }
}

.checkbox-button{
  display: flex;
  align-items: center;
  gap: 10px;
  margin: 10px;

  label {
    font-size: 1.2rem;
  }
}

</style>