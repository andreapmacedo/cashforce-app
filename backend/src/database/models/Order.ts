// import * as Sequelize from 'sequelize';
import { INTEGER, STRING, Model } from 'sequelize';
import db from '.';

class Order extends Model {
  id?: number;
  orderNumber: string;
}

Order.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  orderNumber: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db, // db é ums instancia de sequelize (está no arquivo index.ts). O sequelize é o que vai fazer a conexão com o banco de dados.
  modelName: 'orders', // Nome da tabela.
  underscored: false, // Se os campos da tabela serão separados por underline (caso seja camelCase, o sequelize vai entender que é um campo separado).
  timestamps: false, // Se vai ter os campos de created_at e updated_at seria necessário colocar true.
});

export default Order;

