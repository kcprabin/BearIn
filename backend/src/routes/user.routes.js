import { Router } from "express";
import { registerUser, loginUser, logoutUser, getUserProfile} from "../controller/user.controller.js";
import { authCheck } from "../middleware/auth.middleware.js";
const router = Router();


router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", authCheck , logoutUser);
router.get("/profile", authCheck, getUserProfile);

export default router;