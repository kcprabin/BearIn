import mongoose from "mongoose";

const connectDatabase = async () => {
 try {
      const connectionString = process.env.MONGODB_URI || process.env.MONGODB_URL_LOCAL;
      
      if (!connectionString) {
        throw new Error("MONGODB_URI or MONGODB_URL_LOCAL not defined in environment variables");
      }
      
      const response = await mongoose.connect(connectionString);
      console.log("Database connected", response.connection.host);
      return response;
   
 } catch (error) {
    console.error("Database connection error:", error);
    throw error;
 }
}

export default connectDatabase;