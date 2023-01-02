import { RequestHandler } from 'express';
import OrderService from '../services/OrderService';

export default class OrderController {
  constructor(private service: OrderService = new OrderService()) {}

  findAll: RequestHandler = async (_req, res, next) => {
    try {
      const result = await this.service.findAll();
      return res.status(200).json(result);
    } catch (error) {
      next(error);
    }
  };

}
