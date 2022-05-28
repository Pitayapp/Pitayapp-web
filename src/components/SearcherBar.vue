<script setup>

</script>

<template>
  <div class="searcher">
    <input type="text" placeholder="Busca una receta" class="searcher-bar">
    <button>Buscar</button>
  </div>
</template>

<style lang="scss">
.searcher {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: transparent;

  .searcher-bar {
    width: 73%;
    height: 100%;
    border-radius: 15px;
    border: 0;
    background-color: white;
    text-indent: 20px;
  }

  & input::placeholder {
    font-size: 0.8rem;

  }

  & button {
    width: 20%;
    height: 100%;
    background: #FFFFFF;
    border: 0;
    border-radius: 15px;
    font-family: 'Inter';
    font-style: normal;
    font-weight: 700;
    font-size: 0.8rem;
    color: #F9458E;
    cursor: pointer;
  }
}

@media (min-width: 800px) {
  .searcher {
    .searcher-bar {
      box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);
    }

    & button {

      background: var(--primary);
      border: 0;
      border-radius: 15px;
      font-family: 'Inter';
      font-style: normal;
      font-weight: 700;
      font-size: 0.8rem;
      color: var(--secondary);
      cursor: pointer;
    }
  }
}
</style>
