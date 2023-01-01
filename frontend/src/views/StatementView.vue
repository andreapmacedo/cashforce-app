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
            <div class="table-header">
              <th scope="col">NOTA FISCAL</th>
              <th scope="col">SACADO</th>
              <th scope="col">CEDENTE</th>
              <th scope="col">EMISSÃO</th>
              <th scope="col">VALOR</th>
              <th scope="col">STATUS</th>
            </div>
          </tr>
        </thead>
        <tbody>
          <tr v-for="item in data" :key="item.nNf">
            <div class="table-row">
              <td scope="row">{{ item.nNf }}</td>
              <td scope="row">{{ item.buyer.name }}</td>
              <td scope="row">{{ item.provider.name }}</td>
              <td scope="row">{{ moment(item.createdAt) }}</td>
              <td scope="row">{{ currencyBr(item.value) }}</td>
              <td scope="row">{{ item.orderStatusBuyer }}</td>
              <button class="btn btn-provider-data">Dados do cedente</button>
            </div>
          </tr>
        </tbody>
      </table>
    </div>

  </div>
</template>

<script>
import moment from 'moment/moment';
moment.locale('pt-br');


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
    },
      moment(date) {
        return moment(date).format('DD/MM/YYYY');
    },
      currencyBr(value) { 
        return `R$ ${Number(value).toLocaleString('pt-br', {minimumFractionDigits: 2})}`;
    }
  },
  mounted() {
    this.getStatement();
  },
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

.table-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
}

.table {
  width: 100%;
}

.table-header {
  display: flex;
  flex-direction: row;
  align-items: center;
  width: calc(1177px - 200px);
  margin-bottom: 16px;
}

.table-row {
  display: flex;
  flex-direction: row;
  align-items: center;
  border: 1px solid #DFE2EB;
  border-radius: 6px;
  width: 1177px;
  height: 48px;
  margin-bottom: 16px;
}

th {
  color: #A1A8B8;
  font-family: 'DM Sans';
  font-size: 12px;
  font-weight: 700;
  width: 200px;
} 

td {
  color: #4D5566;
  font-family: 'DM Sans';
  font-size: 14px;
  font-weight: 500;
  padding-left: 30px;
  width: 200px;
}

td:nth-child(5), td:nth-child(6)  {
  color: #00AD8C;
}

.btn-provider-data {
  /* font-family: 'DM Sans'; */
  background: #fff;
  border: 1px solid #CAD3FF;
  border-radius: 25px;
  padding: 10px;
  color: #727d94;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  Width: 165px;
  height: 32px;
  padding: 8px 29px;
}


</style>