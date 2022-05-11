<script>
/* import { RouterLink } from 'vue-router' */
</script>

<template>
  <header>
    <div class="container">
      <div class="logo">
        <img src="../assets/img/pitayapp-rosa.png" alt="" class="pitayapp-img-logo">
        <h2 class="logo-name">Pitayapp</h2>
      </div>
      <div class="header-icons">
        <div class="left-svgs">
          <img class="svg create" src="../assets/svg/upload-icon.svg" alt="">
          <img class="svg notifications" src="../assets/svg/notification-icons.svg" alt="">
        </div>
        <div class="user-button">user</div>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@media (min-width: 400px) {
  header {
    display: none;
  }
}

@media (min-width: 800px) {
  header {
    display: block;

    .container {
      background-color: black;
      display: flex;
      align-items: center;
      justify-content: space-between;
      box-shadow: 2px 20px 26px 2px rgba(0, 0, 0, 0.4);
      -webkit-box-shadow: 2px 20px 26px 2px rgba(0, 0, 0, 0.4);
      width: 100%;
      height: 6rem;

      .logo {
        display: flex;
        background-color: transparent;
        margin-left: 10%;

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
        margin-right: 5%;

        .left-svgs {
          background-color: red;
          display: flex;
          background-color: transparent;
          width: 8rem;
          height: 4rem;

          .svg {
            fill: red;
            stroke: var(--primary);
            color: aqua;
            width: 4rem;
            height: 4rem;
          }
        }

        .user-button {
          display: flex;
          align-items: center;
          justify-content: center;
          color: var(--primary);
          background-color: var(--secondary);
          border-radius: 100%;
          width: 4rem;
          height: 4rem;
          border-color: gray 1px;
          border-style: solid;
        }
      }
    }
  }
}
</style>
