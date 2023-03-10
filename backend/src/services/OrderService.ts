import Buyer from '../database/models/Buyer';
import Provider from '../database/models/Provider';
import Cnpj from '../database/models/Cnpj';
import User from '../database/models/User';
import Order from '../database/models/Order';
import { IOrder } from './../interfaces/IOrder';


export default class OrderModel {
  constructor(private _model: typeof Order = Order) {}

  async findAll(): Promise<IOrder[]> {
    const ASSOCIATIONS = [
      { model: Buyer, as: 'buyer', attributes: ['name'] },
      { model: Provider, as: 'provider', attributes: ['name'] },  
      { model: User, as: 'user', attributes: ['name'] },  
      { model: Cnpj, as: 'cnpj', attributes: ['cnpj'] },  
    ];

    const result = await this._model.findAll({ 
      include: ASSOCIATIONS,
      attributes: { exclude: ['id', 'buyerId', 'providerId', 'userId', 'cnpjID'] }
    });

    return result;
  }

}
