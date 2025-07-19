import pool from "../config/db.js"; // Import the database connection pool

const createUserTable = async () => {
    const queryText =  `
        CREATE TABLE IF NOT EXISTS users (
        id SERIAL PRIMARY KEY, 
        name VARCHAR(100) NOT NULL, 
        email VARCHAR(100) UNIQUE NOT NULL, 
        created_at TIMESTAMP DEFAULT NOW(),
        updated_at TIMESTAMP DEFAULT NOW()
    ) `; 

    try {
        await pool.query(queryText); // Execute the query to create the table
        console.log("User table created successfully or already exists.");
    } catch (err) {
        console.log("Error creating user table: ", err.message); 
    }
}

export default createUserTable; // Export the function to be used in other files