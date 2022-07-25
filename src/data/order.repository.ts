import order from './models/order.model';


class OrderRepository {
    /**
     *
     */
    constructor() {

    }

    async getOrders() {
        return await order.find({});
    }

    async insertOrder(orderName: string, orderId: string) {
        console.log('coming');
        try {
            await order.create({ orderName: orderName, orderId: orderId });
        }
        catch (err) {
            console.log(err);
        }
    }
}

export default new OrderRepository();