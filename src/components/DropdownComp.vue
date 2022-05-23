<script>
export default {
  name: 'DropDownComp',
  props: ['title', 'items']
}
</script>

<template>
  <div class="dropdown-item">
    <a href="#">
      {{ title }}
    </a>
    <img src="../assets/img/user-image.png" alt="" class="pitayapp-user">
    <div class="sub-menu">
      <div v-for="{ item, i } in items" :key="i" class="menu-item"><a href="item.link">{{ item.title }}</a></div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.dropdown-item {
  background-color: white;
  width: 50px;
  height: 50px;

  .pitayapp-user {
    background-color: red;
    width: 50px;
    height: 50px;
    cursor: pointer;
  }

  .sub-menu {
    .menu-item {
      background-color: white;
      top: calc(100% + 18px);
      left: 50%;
      transform: translateX(-50%);
      width: max-content;
    }
  }
}
</style>
