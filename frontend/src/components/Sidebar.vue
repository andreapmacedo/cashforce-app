<template>
  <div>
    <div id="nav">
      <img :src="logo" :alt="alt" id="logo"  />
      <div class="menu-container">
        <ItemMenu v-for="({icon, title, selected}) in menuItems" :key="title" :icon="icon" :title="title" :selected="selected" />
      </div>
    </div>
  </div>
</template>

<script>
  import ItemMenu from "./ItemMenu.vue";

  export default {
    name: "Sidebar",
    props: ["logo", "alt"],
    data(){
      return { 
        menuItems: [
          {
            icon: "/img/icon-1.svg",
            title: "Notas fiscais",
            selected: true
          }
        ]
      }
    },
    components: { ItemMenu }
  }
  
</script>

<style scoped>
  #nav {
    background-color: #fbfdfe;
    display: flex;
    align-items: flex-start;
    justify-content: flex-start;
    flex-direction: column;
    width: 288px ;
    height: 900px;
  }

  .menu-container {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
    width: 100%;
    height: 100%; 
  }

</style>