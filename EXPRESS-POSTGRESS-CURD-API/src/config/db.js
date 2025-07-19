import pkg from "pg";
const { Pool } = pkg; // directly we are not able to import Pool from 'pg'
import dotenv from "dotenv"; // import dotenv to load environment variables
dotenv.config(); // Load environment variables from .env file

console.log(process.env.DB_USER, process.env.DB_PASSWORD, process.env.DB_HOST, process.env.DB_PORT, process.env.DB_DATABASE);   

const pool = new Pool({
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    host: process.env.DB_HOST, 
    port: process.env.DB_PORT, 
    database: process.env.DB_DATABASE
});

pool.on("connect", () => {
    console.log("Connected to the database successfully!"); 
}); 

pool.on("error", (err) => {
    console.log("Unexpected error on idle client!"); 
    process.exit(-1); 
}); 

export default pool; // export the pool to use in other files