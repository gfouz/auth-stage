import mongoose from 'mongoose';
import { connect, connection } from 'mongoose';

const alreadyConnected = {
  isConnected: false,
};

export async function connectDB() {
  await connect(process.env.MongoDB_URI);
}
connection.on('connected', () => {
  console.log('Mongoose is connected!');
});
connection.on('error', (error) => {
  console.log('Mongoose failed to connect', error);
});

export default connectDB;

/*const connectMongo = async () =>
  mongoose.connect(process.env.MongoDB_URI).then(() => {
    console.log('connected');
  });

export default connectMongo;*/
