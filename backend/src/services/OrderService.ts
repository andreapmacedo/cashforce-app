import OrderModel from '../models/OrderModel';
import CustomError from '../interfaces/CustomError';

export default class OrderService {
  constructor(private model: OrderModel = new OrderModel()) {}

  async findAll() {
    const data = await this.model.findAll();
    return data;
  }

  async findOne(id: string) {
    const data = await this.model.findOne(Number(id));
    if (!data) throw new CustomError(401, 'Invalid data id');
    return data;
  }
}
