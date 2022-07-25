import mongoose from "../mongo.connection";

const OrderSchema = new mongoose.Schema({
    orderName: { type: String, required: true },
    orderId: { type: String, required: true, index: true, unique: true },
});

const order = mongoose.model("Order", OrderSchema, 'orders');

export default order;