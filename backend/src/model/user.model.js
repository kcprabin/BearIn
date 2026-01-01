import mongoose from "mongoose";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config({
    path: "./.env" 
});

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


userSchema.pre("save", async function () {
    if (!this.isModified("password")) {
        return ;
    }
    this.password = await bcrypt.hash(this.password, 10);
    
});

userSchema.methods.comparePassword = async function (candidatePassword) {
    return await bcrypt.compare(candidatePassword, this.password);
};

userSchema.methods.generateRefreshToken = function () {
    return jwt.sign(
        { _id: this._id,
          username: this.username,
          email: this.email
        },
        process.env.REFRESH_TOKEN_SECRECT,
      { expiresIn: process.env.REFRESH_TOKEN_EXPIRY}
    );
}
userSchema.methods.generateAccessToken = function () {
     return jwt.sign(
        { _id: this._id }, process.env.ACCESS_TOKEN_SECRECT,
       {expiresIn: process.env.ACCESS_TOKEN_EXPIRY}
    );
}


export const User = mongoose.model("User", userSchema);
