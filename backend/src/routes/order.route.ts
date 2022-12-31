import { Router } from 'express';
import OrderController from '../controllers/OrderController';

const orderController = new OrderController();
const route = Router();

// route.get('/order', (_req,  res) => {
//   return res.json({ message: 'teste rota' });
// });

route.get('/order', (_req,  res, next) => orderController.findAll(_req, res, next));

route.get('/order/:id', (_req,  res, next) => orderController.findOne(_req, res, next));

export default route;
