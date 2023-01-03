import { Router, Request, Response, NextFunction } from 'express';
import OrderController from '../controllers/OrderController';

const orderController = new OrderController();
const route = Router();

route.get('/orders', (_req: Request,  res: Response, next: NextFunction) => orderController.findAll(_req, res, next));

export default route;
