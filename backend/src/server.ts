  import "reflect-metadata";
import dotenv from "dotenv";
import app from "./app";
import { AppDataSource } from "./config/data-source";

dotenv.config();

AppDataSource.initialize()
  .then(() => {
    console.log("Database connected");

    app.listen(3001, () => {
      console.log("Server running on port 3000");
    });
  })
  .catch((error) => console.log(error));
