import express from "express"
import cookierParser from "cookie-parser"
import cors from "cors"
 
const app = express();
  
app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}))
app.use(express.json({
    limit: "5mb"
}))
app.use(express.urlencoded({
    extended: true,
    limit: "5mb"
}))
app.use(cookierParser())

// user routes
import userRouter from "./routes/user.routes.js";
app.use("/api/v1/bearin/users", userRouter);

// message routes
import messageRouter from "./routes/messege.routes.js";
app.use("/api/v1/bearin/messages", messageRouter);




export default app;