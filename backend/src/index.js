import dotenv from "dotenv";
dotenv.config({ path: "./.env" });

import app from "./app.js";
import connectDB from "./database/conection.database.js";
import { createServer } from "http";
import { Server } from "socket.io";

const PORT = process.env.PORT ;

const server = createServer(app);
const io = new Server(server, {
  cors: {
    origin: process.env.CLIENT_ORIGIN || "http://localhost:5173",
    methods: ["GET", "POST"],
    credentials: true
  }
});

io.on("connection", (socket) => {
  console.log("Socket connected:", socket.id);
});

try {
  await connectDB();
  console.log("Database connected");
} catch (err) {
  console.error("DB connect failed", err);
}

server.listen(PORT, () => {
  console.log(`Server listening on ${PORT}`);
});