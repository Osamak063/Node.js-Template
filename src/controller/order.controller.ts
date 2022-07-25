import { Request, Response } from 'express'
import orderRepository from '../data/order.repository';
import { v4 as uuid } from 'uuid';

class OrderController {
    getOrders = async (req: Request, res: Response) => {
        try {
            let orders = await orderRepository.getOrders();
            res.send(orders);
        }
        catch (ex) {
            res.status(500).send({ message: "Error fetching data." });
        }
    }

    insertOrders = async (req: Request, res: Response) => {
        try {
            await orderRepository.insertOrder(req.body.orderName, uuid());
            res.status(200).send();
        }
        catch (ex) {
            res.status(500).send({ message: "Error inserting data." });
        }
    }
}

export default new OrderController();