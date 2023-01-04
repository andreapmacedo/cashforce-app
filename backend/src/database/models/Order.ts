import { INTEGER, STRING, DATE, Model } from 'sequelize';
import db from '.';
import Buyer from './Buyer';
import Provider from './Provider';

class Order extends Model {
  nNf: string;
  value: string;
  buyerId: number;
  providerId: number;
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
  buyerId: {
    type: INTEGER,
    allowNull: false,
  },
  providerId: {
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

Buyer.hasMany(Order, { foreignKey: 'buyerId', as: 'buyerId' });
Provider.hasMany(Order, { foreignKey: 'providerId', as: 'providerId' });

Order.belongsTo(Buyer, { foreignKey: 'buyerId', as: 'buyer' });
Order.belongsTo(Provider, { foreignKey: 'providerId', as: 'provider' });

export default Order;

