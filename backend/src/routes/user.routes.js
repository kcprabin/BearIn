import { Router } from "express";
import { registerUser, loginUser, logoutUser, getUserProfile} from "../controller/user.controller.js";

const router = Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", logoutUser);
router.get("/profile", getUserProfile);

export default router;