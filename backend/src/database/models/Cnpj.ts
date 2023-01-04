import { STRING, DATE, Model } from 'sequelize';
import db from '.';

class Cnpj extends Model {
  id?: number;
  cnpj: string;
  companyType: string;
}

Cnpj.init({
  cnpj: {
    type: STRING,
    allowNull: false,
  },
  companyType: {
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
  modelName: 'cnpjs', 
  underscored: false, 
  timestamps: false, 
});


export default Cnpj;

