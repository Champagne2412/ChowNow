import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config();
const db = process.env.mongoDB;

mongoose
  .connect(`${db}`)
  .then(() => console.log("DB connected"))
  .catch((error) => console.log(error, "DB connection failed"));
