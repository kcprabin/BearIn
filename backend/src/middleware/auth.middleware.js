import { asynchandler } from "../utills/asynchandler.js";
import jwt from "jsonwebtoken";
import { User } from "../model/user.model.js";

const authCheck = asynchandler(async (req, res, next) => {
  try {
    let token;

    if (req.cookies?.accessToken) {
      token = req.cookies.accessToken;
    } else if (req.headers.authorization?.startsWith("Bearer ")) {
      token = req.headers.authorization.split(" ")[1];
    }

    if (!token) {
      return res.status(401).json({ message: "Access token missing" });
    }

    const decoded = await jwt.verify(token, process.env.ACCESS_TOKEN_SECRECT);

    const user = await User.findById(decoded._id);
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }
    req.user = user;
    next();


  } catch (error) {
    console.error("Authentication error:", error);
    res.status(500).json({ message: "Server error during authentication" });
  }
});

export { authCheck };
