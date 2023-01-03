<template>
  <div class="main-container" >
    <Sidebar :logo="logo_src" :alt="app_name" />
    <div>
      <Navbar  />
      <router-view />    
    </div>  
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';

export default {
  data() {
    return {
      logo_src: "/img/logo.svg",
      app_name: "cachforce",
    };
  },
  components: { Navbar, Sidebar }
}
</script>

<style>
  * {
    font-family: Helvetica;
    padding: 0;
    margin: 0;
    box-sizing: border-box;
  }

  .main-container {
    display: flex;
    flex-direction: row;
    width: calc(1560px - 288px) ;
    height: calc(900px - 64px);
    position: relative;
  }

</style>
