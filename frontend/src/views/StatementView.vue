<template>
  <div class="main">

    <div class="page-header">
      <h1>Notas fiscais</h1>
      <h4>Visualize as notas fiscais que você tem.</h4>
    </div>
    <div class="table-container">
      <table class="table">
        <thead>
          <tr>
            <th scope="col">NOTA FISCAL</th>
            <th scope="col">SACADO</th>
            <th scope="col">CEDENTE</th>
            <th scope="col">EMISSÃO</th>
            <th scope="col">VALOR</th>
            <th scope="col">STATUS</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.nNf">
            <td scope="row">{{ item.nNf }}</td>
            <td scope="row">{{ item.buyer.name }}</td>
            <td scope="row">{{ item.provider.name }}</td>
            <td scope="row">{{ item.createdAt }}</td>
            <td scope="row">{{ item.value }}</td>
            <td scope="row">{{ item.orderStatusBuyer }}</td>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>


export default {
  name: 'Statement',
  data() {
    return {
      data: []
    };
  },
  methods: {
    async getStatement() {
      const req = await fetch('http://localhost:3001/orders');
      const data = await req.json();
      console.log(data);
      this.data = data;
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