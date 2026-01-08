import { Router } from "express";
import { sendMessage } from "../controller/messege.controller.js";
import { authCheck } from "../middleware/auth.middleware.js";


const router = Router();

router.post("/send", authCheck, sendMessage);



export default router;

