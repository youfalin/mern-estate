import express from "express";
import mangoose from "mongoose";
import dotenv from "dotenv";
dotenv.config();

mangoose
  .connect(process.env.MONGO)
  .then(() => {
    console.log("connected to MongoDB!");
  })
  .catch((err) => {
    console.log(err);
  });

const app = express();

app.listen(3000, () => {
  console.log("server is listening on port 3000");
});
