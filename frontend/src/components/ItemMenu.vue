<template>
    <div class="item-container">
      <section v-if="selected" id="selected"></section>
      <div id="item-menu" @click="click">
        <img :src="icon" :alt="title" id="icon"/>
        <p>{{ title }}</p>      
      </div>
    </div>
</template>

<script>
  export default {
    name: "ItemMenu",
    props: ["icon", "title", "selected"]
  }
</script>

<style scoped>
  #item-menu {
    display: flex;
    flex-direction: row;
    align-content: center;
    align-items: center;
    width: 260px;
    height: 44px;
    margin-left: 25px;
    gap: 10px;
  }

  p {
    /* color: #00AD8C; */
    font-family: 'DM Sans';
    /* font-size: 14px; */
    font-weight: 500;
  }

  img {
    margin-right: 8px;
    max-width: 24px;
  }

  section {
    background-color: #00AD8C;
    border: 2px solid #00AD8C;
    border-radius: 2px;
    width: 4px;
    height: 100%;
  }

  .item-container {
    display: flex;
    flex-direction: row;
    cursor: pointer;
    transition: 0.2s;
    color: #00AD8C;
    font-size: 14px;
    font-weight: 500;
  }

  .item-container:hover {
    transition: 0.3s;
    font-size: 15px;
    padding-left: 15px;
    color: #021b51;
  }

  </style>