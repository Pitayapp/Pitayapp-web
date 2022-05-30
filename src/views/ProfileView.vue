<template>
  <main class="collections-view">
    <h1>Vista Perfil</h1>
    <p>Aquí editarás tus datos</p>
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