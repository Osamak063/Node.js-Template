import OrderController from './controller/order.controller';
import express from 'express';

const router = express.Router();

router.route('/orders').get(OrderController.getOrders);
router.route('/orders').post(OrderController.insertOrders);

export default router;


