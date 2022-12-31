// import * as Sequelize from 'sequelize';
import { INTEGER, STRING, DATE, Model } from 'sequelize';
import db from '.';

class Order extends Model {
  nNf: string;
  value: string;
  buyerID: number;
  providerID: number;
  orderStatusBuyer: string;
  createdAt: Date;
}

Order.init({
  nNf: {
    type: STRING,
    allowNull: false,
  },
  value: {
    type: STRING,
    allowNull: false,
  },
  buyerID: {
    type: INTEGER,
    allowNull: false,
  },
  providerID: {
    type: INTEGER,
    allowNull: false,
  },
  orderStatusBuyer: {
    type: STRING,
    allowNull: false,
  },
  createdAt: {
    type: DATE,
    allowNull: false,
  },
}, {
  sequelize: db, // db é ums instancia de sequelize (está no arquivo index.ts). O sequelize é o que vai fazer a conexão com o banco de dados.
  modelName: 'orders', // Nome da tabela.
  underscored: false, // Se os campos da tabela serão separados por underline (caso seja camelCase, o sequelize vai entender que é um campo separado).
  timestamps: false, // Se vai ter os campos de created_at e updated_at seria necessário colocar true.
});

export default Order;

