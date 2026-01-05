import app  from "./app.js";
import connectDB  from "./database/conection.database.js";
import dotenv from "dotenv";

dotenv.config({
    path:"./.env"
});

try {
    connectDB()
    console.log(`Database connection established successfully`);

} catch (error) {
    console.error("Failed to connect to the database:", error); 
}

app.listen(process.env.PORT, () => {
    console.log(`Server is running on port ${process.env.PORT}`);
}); 
