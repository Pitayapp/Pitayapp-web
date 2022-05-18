<script>
export default {
  props: {
    title: String,
    text: String
  }
}
</script>
<template>
  <div>
    <label>{{ title }}</label>
    <input :placeholder="[[ text ]]">
  </div>
</template>
<style lang="scss" scoped>
div {
  display: flex;
  flex-direction: column;
  width: 300px;

  label {
    font-weight: bold;
    font-size: 1.2rem;
    margin-bottom: 10px;
  }

  input {
    height: 40px;
    width: 100%;
    border-radius: 15px;
    padding-left: 15px;
    border-color: #E5E5E5;
  }
}
</style>