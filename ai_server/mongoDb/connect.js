import mongoose from "mongoose";
import { MongoClient, ServerApiVersion } from "mongodb";
import * as dotenv from "dotenv";
dotenv.config();

const uri = `mongodb+srv://ralphagbara:123123@cluster0.k3vhkk7.mongodb.net/?retryWrites=true&w=majority`;
const client = new MongoClient(uri, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const connectDb = mongoose
  .connect(uri, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("Connected to MongoDB Atlas");
    // Start the server
  })
  .catch((error) => {
    console.log("Error connecting to MongoDB Atlas", error);
  });

export default connectDb;
