import { asynchandler } from "../utills/asynchandler.js";
import { User } from "../model/user.model.js";

const registerUser = asynchandler(async (req, res,) => {
    // Registration logic here
    const { username, email, password , bio } = req.body;

    if (!username?.trim() || !email?.trim() || !password?.trim()) {
        return res.status(400).json({ message: "All fields are required" });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
        return res.status(400).json({ message: "Invalid email format" });
    }

    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
        return res.status(409).json({ message: "User with given email or username already exists" });
    }
    const newUser = await User.create({ username, email, password , bio})

    if(!newUser){
        return res.status(500).json({ message: "Failed to create user" });
    }   


    res.status(201).json({ message: "User registered successfully",
     });
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