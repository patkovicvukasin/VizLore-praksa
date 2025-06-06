import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

export const dataConn = mongoose.createConnection(
  process.env.MONGO_URI_DATA,
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  }
);