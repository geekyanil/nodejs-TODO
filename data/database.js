import mongoose from 'mongoose';

export const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URI, {
      dbName: 'backendAPI',
    })
    .then((c) => {
      console.log(`Db connected ${c.connection.host}`);
    })
    .catch((e) => {
      console.log(e);
    });
};
