<template>
  <main class="card-container">
    <img v-bind:src="[filename]" :alt="[title]" />
    <div>
      <h1>{{ title }}</h1>
      <p>{{ message }}</p>
      <div class="tags">
        <label v-for="tag in tags" :key="tag">
          {{ tag }}
        </label>
      </div>
    </div>
    <div class="time">
      <svg
        width="20"
        height="20"
        viewBox="0 0 60 60"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <circle cx="30" cy="30" r="27.5" stroke="black" stroke-width="5" />
        <line
          x1="27.5"
          y1="29"
          x2="27.5"
          y2="12"
          stroke="black"
          stroke-width="5"
        />
        <line
          x1="25"
          y1="31.5"
          x2="51"
          y2="31.5"
          stroke="black"
          stroke-width="5"
        />
      </svg>
      <span>{{ readyInMinutes }}'</span>
    </div>
  </main>
</template>

<script>
export default {
  name: "RecipeCard",
  props: {
    title: String,
    filename: String,
    readyInMinutes: Number,
    tags: Array,
    message: String,
  },
};
</script>

<style lang="scss" scoped>
.card-container {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  row-gap: 20px;
  column-gap: 20px;
  padding: 2rem;
  max-width: 450px;
  max-height: 250px;
  border-radius: 10px;
  background: var(--secondary);
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.28);

  & img {
    max-width: 100px;
    max-height: 100px;
    width: 100%;
    height: auto;
    object-fit: contain;
  }

  & div {
    display: flex;
    flex-direction: column;
    row-gap: 5px;
    & h1 {
      font-size: 1rem;
    }

    & p {
      font-size: 0.8rem;
      font-weight: 700;
      color: #979797;
    }

    & .tags {
      display: grid;
      grid-template-columns: 1fr 1fr;
      grid-auto-rows: auto;

      & label {
        margin: 5px;
        display: flex;
        justify-content: center;
        align-items: center;
        border-radius: 20px;
        padding: 2% 0;
        min-width: 100px;
        height: fit-content;
        font-weight: 500;
        font-size: 0.6rem;
        background: var(--primary);
        color: var(--secondary);
      }
    }
  }

  & .time {
    align-self: flex-start;
  }
}
</style>
