import dotenv from 'dotenv';
import mongoose from 'mongoose';
dotenv.config();
const uri = process.env.MONGODB_CONNECTION_URL;
console.log(uri);
mongoose.connect(uri ?? "");

mongoose.connection.on('error', function () {
    mongoose.connect(uri ?? "");
});

mongoose.connection.once('open', function () {
    console.log("MongoDb Connected");
});

export default mongoose;
