import express from "express"
import cookierParser from "cookie-parser"
import cors from "cors"
const app = express();
  //basic setup
app.use(cors({
    origin: "http://localhost:3000",
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

export default app;