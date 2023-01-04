import { STRING, DATE, Model } from 'sequelize';
import db from '.';

class User extends Model {
  id?: number;
  name: string;
  email: string;
  createdAt: Date;
  updatedAt: Date;
}

User.init({
  name: {
    type: STRING,
    allowNull: false,
  },
  email: {
    type: STRING,
    allowNull: false,
  },
  createdAt: {
    type: DATE,
    allowNull: false,
  },
  updatedAt: {
    type: DATE,
    allowNull: false,
  },
}, {
  sequelize: db, 
  modelName: 'users', 
  underscored: false, 
  timestamps: false, 
});


export default User;

