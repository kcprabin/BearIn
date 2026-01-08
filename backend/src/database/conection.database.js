import mongoose from "mongoose";

const connectDatabase = async () => {
    
    try {
       const connection = await mongoose.connect(`${process.env.MONGODB_URI}`)
      
        console.log("Database connected successfully",connection.connection.host);
        
    } catch (error) {
        console.error("Database connection error:", error);
        
    }
}

export default connectDatabase;