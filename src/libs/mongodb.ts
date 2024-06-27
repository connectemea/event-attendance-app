import mongoose from "mongoose";

const connectMongoDB = async (): Promise<void> => {
  try {
    await mongoose.connect(process.env.MONGODB_URI as string);
    // console.log("Connected to MongoDB.");
  } catch (error) {
    console.log("Error connecting to MongoDB.");
    console.log(error);
  }
};

export default connectMongoDB;
