import { INTEGER, STRING, Model } from 'sequelize';
import db from '.';

class Provider extends Model {
  id: number;
  name: string;
}

Provider.init({
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
  modelName: 'providers', 
  underscored: false, 
  timestamps: false, 
});



export default Provider;

