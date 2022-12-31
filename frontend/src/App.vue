<template>
  <div class="main-container" >
    <Sidebar />
    <div>
      <Navbar />
      <router-view />    
    </div>  
  </div>
</template>

<script>
import Navbar from './components/Navbar.vue';
import Sidebar from './components/Sidebar.vue';


export default {
  data: function () {
    return {
      logo_src: "/img/logo.png",
      app_name: "cachforce"
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
    width: 100vh;
  }

</style>
