import Order from '../database/models/Order';
import { IOrder } from './../interfaces/IOrder';


export default class OrderModel {
  constructor(private _model: typeof Order = Order) {}

  async findAll(): Promise<IOrder[]> {
    const result = await this._model.findAll();
    return result;
  }

  async findOne(id: number): Promise<IOrder | null> {
    const result = await this._model.findByPk(id);
    return result;
  }
}
