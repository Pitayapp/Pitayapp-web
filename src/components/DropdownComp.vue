<script>
export default {
  name: 'servicesA',
  props: ['title', 'items'],
  data() {
    return {
      isOpen: false
    }
  }
}
</script>

<template>
  <header>
    <div class="dropdown-item" @click="isOpen = !isOpen">
      <a href="#">
        {{ title }}
      </a>
      <transition name="fade" appear>
        <!-- <img src="../assets/img/user-image.png" alt="" class="pitayapp-user"> -->
        <div class="sub-menu" v-if="isOpen">
          <div v-for="{ item, i } in items" :key="i" class="dropdowm-item"><a :href="item.link">{{ item.title }}</a>
          </div>
        </div>
      </transition>
    </div>
  </header>
</template>

<style lang="scss" scoped>
@media (min-width: 300px) {
  header {
    display: none;
  }
}

@media (min-width: 800px) {

  header {
    display: block;

    .dropdown-item {
      background-color: white;
      top: calc(100% + 18px);
      width: 50px;
      height: 50px;

      .pitayapp-user {
        background-color: transparent;
        width: 50px;
        height: 50px;
        cursor: pointer;
      }

      .sub-menu {
        background-color: white;
        top: calc(100% + 18px);
        left: 50%;
        transform: translateX(-50%);
        width: max-content;

        .menu-item {
          background-color: white;
          top: calc(100% + 18px);
          left: 50%;
          transform: translateX(-50%);
          width: max-content;
        }
      }

      .fade-enter-active,
      .fade-leave-active {
        transition: all .5s ease-out;
      }

      .fade-enter,
      .fade-leave-to {
        opacity: 0;
      }
    }
  }
}
</style>
