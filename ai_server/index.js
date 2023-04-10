import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

import connectDb from "./mongoDb/connect.js";
import postRoutes from "./routes/postRoutes.js";
import dalleRoutes from "./routes/dalleRoutes.js";

dotenv.config();

const app = express();
app.use(cors());
app.use(express.json({ limit: "50mb" }));
app.use("/api/v1/post", postRoutes);
app.use("/api/v1/dalle", dalleRoutes);

app.get("/", async (req, res) => {
  res.send("welcome");
});

//creating server instance
Promise.all([connectDb])
  .then(() => app.listen(8080, () => console.log("server is running on 8080")))
  .catch((error) => {
    console.error(`MongoDB Atlas Error: ${error}`);
    process.exit();
  });
