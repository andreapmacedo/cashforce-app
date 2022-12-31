<template>
  <div>
    <router-view />    
  </div>
</template>

<script>

export default {
  data: function() {
    return {
      logo_src: "/img/logo.png",
      app_name: "cachforce"
    }
  }
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
    margin: 50px;
    min-height: 250px;
  }

  h1 {
    text-align: center;
    font-size: 42px;
    margin-bottom: 30px;
    color: #222;
  }
</style>
