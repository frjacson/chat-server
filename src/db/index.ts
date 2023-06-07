import mongoose from "mongoose";
import { FIXED_KEY } from "../config/config";

const getConnection = async () => {
  try {
    await mongoose.connect(FIXED_KEY.mongodb.url);
    console.log("mongodb is connecting");
  } catch (err) {
    console.log(err);
  }
};

export default getConnection;
