import http from "http";
import { Server } from "socket.io";
import app from "../app.js";

const server = http.createServer(app);
const io = new Server(server, {
  cors: {
    origin: "http://localhost:5173", // FRONTEND URL
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("a user connected:", socket.id);
  

  socket.on("disconnect", () => {
    console.log("user disconnected:", socket.id);
  });


});
export { io,server };