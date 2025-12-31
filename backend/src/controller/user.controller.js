import { asynchandler } from "../utills/asynchandler.js";

const registerUser = asynchandler(async (req, res,) => {
    // Registration logic here
    res.status(201).json({ message: "User registered successfully" });
});

const loginUser = asynchandler(async (req, res,) => {
    // Login logic here 
    res.status(200).json({ message: "User logged in successfully" });
});

const logoutUser = asynchandler(async (req, res,) => {
    // Logout logic here 
    res.status(200).json({ message: "User logged out successfully" });
});             
const getUserProfile = asynchandler(async (req, res,) => {
    // Get user profile logic here 
    res.status(200).json({ message: "User profile fetched successfully" });
});

export { registerUser, loginUser, logoutUser, getUserProfile };