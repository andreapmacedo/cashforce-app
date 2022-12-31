import CustomError from '../interfaces/CustomError';
import Buyer from '../database/models/Buyer';
import Provider from '../database/models/Provider';
import Order from '../database/models/Order';
import { IOrder } from './../interfaces/IOrder';


export default class OrderModel {
  constructor(private _model: typeof Order = Order) {}

  async findAll(): Promise<IOrder[]> {
    const ASSOCIATIONS = [
      { model: Buyer, as: 'buyer', attributes: ['name'] },
      { model: Provider, as: 'provider', attributes: ['name'] },  
    ];

    const result = await this._model.findAll({ 
      include: ASSOCIATIONS,
      attributes: { exclude: ['id', 'buyerID', 'providerID'] }
    });

    return result;
  }

  async findOne(id: number): Promise<IOrder | null> {   
    const result = await this._model.findByPk(Number(id));
    if (!result) throw new CustomError(401, 'Invalid id');
    return result;
  }


}
