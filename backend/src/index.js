import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import { server } from "./Socket/socket.js";
import connectDB from "./database/conection.database.js";

connectDB().then(() => {
  console.log("Database connected successfully");

  server.listen(process.env.PORT, () => {
    console.log(`Server listening on ${process.env.PORT}`);
  });

}).catch((error) => {
  console.error("Failed to connect to the database:", error);
  process.exit(1);
});