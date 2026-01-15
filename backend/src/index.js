import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import { server } from "./Socket/socket.js";
import connectDB from "./database/conection.database.js";

try {
  await connectDB();
  console.log("Database connected");
} catch (err) {
  console.error("DB connect failed", err);
}

server.listen(process.env.PORT, () => {
  console.log(`Server listening on ${process.env.PORT}`);
});

