import { INTEGER, STRING, Model } from 'sequelize';
import db from '.';
// import Order from './Order';

class Buyer extends Model {
  id: number;
  name: string;
}

Buyer.init({
  id: {
    type: INTEGER,
    allowNull: false,
    primaryKey: true,
    autoIncrement: true,
  },
  name: {
    type: STRING,
    allowNull: false,
  },
}, {
  sequelize: db, 
  modelName: 'buyers', 
  underscored: false, 
  timestamps: false, 
});

export default Buyer;

