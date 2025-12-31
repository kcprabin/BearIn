import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: true, 
        unique: true,
        index: true,
    },
    email: {
        type: String,
        required: true, 
        unique: true,
        index: true,
    },
    password: {  
        type: String,
        required: true,
    }, 
    profileImage: {
        type: String,
        default: null,
    },
    coverImage: {
        type: String,
        default: null,
    },
    bio: {
        type: String,
        default: "",
    },
    refreshTokens: {
        type: [String],
        default: [],
    }   

}, { timestamps: true });

export const User = mongoose.model("User", userSchema);
