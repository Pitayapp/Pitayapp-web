<script>
import CustomInput from '@/components/CustomInput.vue'

export default {
  components: {
    CustomInput
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
  </main>
</template>

<style lang="scss" scoped>
  .userInformationContainer{
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-template-rows: auto;
    grid-gap: 20px;
    max-width: fit-content;
  }
</style>
