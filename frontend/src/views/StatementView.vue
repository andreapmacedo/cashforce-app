<template>
  <div class="main">

    <div class="page-header">
      <span>
        <img src="/img/icon-2.svg" alt="alt" />
        <h1>Notas fiscais</h1>
      </span>
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
              <td scope="row">{{ (status[item.orderStatusBuyer]).toUpperCase() }}</td>
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
  // props: ["icon", "alt"],
  data() {
    return {
      data: [],
      status: [
        'Pendente de confirmação',
        'Pedido confirmado',
        'Não reconhece o pedido',
        'Mercadoria não recebida',
        'Recebida com avaria',
        'Devolvida',
        'Recebida com devolução parcial',
        'Recebida e confirmada',
        'Pagamento Autorizado'
      ]
    };
  },
  methods: {
    async getStatement() {
      const req = await fetch('http://localhost:3001/orders');
      const data = await req.json();
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
  padding: 48px;
}

.page-header {
  font-family: 'DM Sans';
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  margin-bottom: 19px;
}

.page-header h1 {
  font-size: 24px;
  font-weight: 700;
  color: #021b51;
  margin-bottom: 5px;
}

.page-header h4 {
  font-size: 14px;
  font-weight: 400;
  color: #727D94;
}


.table-container {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
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
  background-color: #FFF;
  font-family: 'DM Sans';
  border: 1px solid #CAD3FF;
  border-radius: 24px;
  color: #727d94;
  font-weight: 700;
  font-size: 12px;
  cursor: pointer;
  Width: 165px;
  height: 32px;
  margin-right: 8px;
  /* padding: 8px 29px; */
}

span {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
}

img {
  margin-right: 8px;
}

</style>