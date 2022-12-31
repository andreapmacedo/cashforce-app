import { INTEGER, STRING, DATE, Model } from 'sequelize';
import db from '.';
import Buyer from './Buyer';
import Provider from './Provider';

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
  sequelize: db, 
  modelName: 'orders', 
  underscored: false, 
  timestamps: false, 
});

Buyer.hasMany(Order, { foreignKey: 'buyerID', as: 'buyerID' });
Provider.hasMany(Order, { foreignKey: 'providerID', as: 'providerID' });

Order.belongsTo(Buyer, { foreignKey: 'buyerID', as: 'buyer' });
Order.belongsTo(Provider, { foreignKey: 'providerID', as: 'provider' });

export default Order;

