import { Router } from "express";
import { registerUser, loginUser, logoutUser, getUserProfile,changePassword,updateBio,updateUserName} from "../controller/user.controller.js";
import { authCheck } from "../middleware/auth.middleware.js";
const router = Router();

router.post("/register", registerUser);
router.post("/login", loginUser);
router.post("/logout", authCheck , logoutUser);
router.get("/profile", authCheck, getUserProfile);
router.post("/change-password", authCheck, changePassword);
router.post("/update-bio", authCheck, updateBio);
router.post("/update-username", authCheck, updateUserName);

export default router;