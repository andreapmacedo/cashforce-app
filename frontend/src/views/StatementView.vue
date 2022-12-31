<template>
  <div class="main">

    <div class="page-header">
      <h1>Notas fiscais</h1>
      <h4>Visualize as notas fiscais que você tem.</h4>
    </div>
    <div class="table">

    </div>

  </div>
</template>

<script>


export default {
  name: 'Statement',
  data() {
    return {
      id: null,
      orderNumver: null,
    };
  },
  methods: {
    async getStatement() {
      const response = await fetch('http://localhost:3001/orders');
      const data = await response.json();
      console.log(data);
    }
  },
  mounted() {
    this.getStatement();
  }
}


</script>


<style scoped>

.main {
  display : flex;
  flex-direction: column;
  padding: 20px;
}

.page-header {
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 20px;
}

</style>