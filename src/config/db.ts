import mongoose from 'mongoose';

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(process.env.MONGO_URI|| "mongodb+srv://lplp9566:XQXftmA9qixgA9DA@closter0.3er76.mongodb.net/collegeTest?retryWrites=true&w=majority&appName=closter0");
    console.log(`Mongo Connected: ${conn.connection.host}`);
  } catch (error) {
    console.log(`${error}`);
  }
};

export default connectDB;