import { asynchandler } from "../utills/asynchandler.js";
import { User } from "../model/user.model.js";

const registerUser = asynchandler(async (req, res) => {
  // Registration logic here
  const { username, email, password, bio } = req.body;

  if (!username?.trim() || !email?.trim() || !password?.trim()) {
    return res.status(400).json({ message: "All fields are required" });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: "Invalid email format" });
  }

  const existingUser = await User.findOne({ $or: [{ email }, { username }] });
  if (existingUser) {
    return res
      .status(409)
      .json({ message: "User with given email or username already exists" });
  }
  const newUser = await User.create({ username, email, password, bio });

  if (!newUser) {
    return res.status(500).json({ message: "Failed to create user" });
  }

  res.status(201).json({ message: "User registered successfully" });
});

const generateTokens = async (user) => {
  try {
    const accessTokenkey = await user.generateAccessToken();
    const refreshTokenkey = await user.generateRefreshToken();
    user.refreshTokens = refreshTokenkey;
    await user.save();
    return { accessTokenkey, refreshTokenkey };
  } catch (error) {
    console.error("Error generating tokens:", error);
  }
};
const loginUser = asynchandler(async (req, res) => {
  // Login logic here
  const { email, username, password } = req.body;

  if (!email?.trim() || !username?.trim() || !password?.trim()) {
    return res
      .status(400)
      .json({ message: "Email or username and password are required" });
  }

  const user = await User.findOne({ $or: [{ email }, { username }] });
  if (!user) {
    return res.status(404).json({ message: "User not found" });
  }

  const isPasswordValid = await user.comparePassword(password);
  if (!isPasswordValid) {
    return res.status(401).json({ message: "Invalid password" });
  }
  const { refreshTokenkey, accessTokenkey } = await generateTokens(user);
 
  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  };
  res.cookie("accessToken", accessTokenkey, options);
  res.status(200)
    .json({ message: "User logged in successfully", success: true, data: user })
});

const logoutUser = asynchandler(async (req, res) => {
 const User = req.user;
  User.refreshTokens = "";
  await User.save();  

  const options = {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "Strict",
  };
  res.clearCookie("accessToken", options);
  res
    .status(200)
    .json({ message: "User logged out successfully" })
    
});
const getUserProfile = asynchandler(async (req, res) => {
  // Get user profile logic here
  res.status(200).json({ message: "User profile fetched successfully" });
});

export { registerUser, loginUser, logoutUser, getUserProfile };
