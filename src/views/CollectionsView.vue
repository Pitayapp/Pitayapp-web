<template>
  <main class="collections-view">
    <h1>Vista Colecciones</h1>
    <p>Aquí mirarás tus recetas fav</p>
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
