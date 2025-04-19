import mongoose from "mongoose";
import { DB_Name } from "../constent.js";

const connectDB = async () => {
  try {
    const conectionInstance = await mongoose.connect(
      `${process.env.MONGODB_URI}/${DB_Name}`
    );
    console.log(
      `\n MongoDB Connected !! DB Host :- ${conectionInstance.connection.host}`
    );
  } catch (error) {
    console.log("MongooDB Connection Error :- ", error);
    process.exit(1);
  }
};

export default connectDB;
