import express from "express"; 
import cors from "cors"; 
import dotenv from "dotenv"; 
import pool from "./config/db.js"; // Import the database connection pool
import userRoutes from "./routes/userRoutes.js"; // Import user routes
import errorHandler from "./middlewares/errorHandler.js"; // Import error handling middleware
import createUserTable from "./data/createUserTable.js";


dotenv.config(); // move .env variable to process.env file
 
const app = express(); 
// console.log("Port", process.env.PORT); 
const PORT = process.env.PORT || 3001; 

// Middleware
app.use(express.json()); // Parse JSON bodies
app.use(cors()); // Enable CORS for all routes

// Routes 
app.use("/api", userRoutes); // Use user routes under /api path

// Error Handling Middleware
app.use(errorHandler); // Use error handling middleware

// Create User Table before starting the server 
createUserTable(); 

// Testing Postgres Connection 
app.get("/", async (req, res) => {
    console.log("Starting connection to the database..."); 
    const result = await pool.query("SELECT current_database()"); 
    console.log("Database connection established successfully!"); 
    res.send(`Connected to database: ${result.rows[0].current_database}`); 
}); 

// Server Running
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`); 
});