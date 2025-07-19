import pool from "../config/db.js";

export const getAllUsersService = async () => {
    const result = await pool.query("SELECT * FROM users"); 
    return result.rows; 
}; 

export const createUserService = async (name, email) => {
    const result = await pool.query(
        "INSERT INTO users (name, email) VALUES ($1, $2) RETURNING *", [name, email] 
    ); 

    return result.rows[0];     
}; 

export const getUserByIdService = async (id) => {
    const result = await pool.query("SELECT * FROM users WHERE id = $1", [id]); 
    if(result.rows.length === 0) 
        throw new Error("User not found"); 
    return result.rows[0]; 
}; 

export const updateUserByIdService = async (id, name, email) => {
    const result = await pool.query(
        "UPDATE users SET name = $1, email = $2 WHERE id = $3 RETURNING *", 
        [name, email, id] 
    ); 
    return result.rows[0]; 
}; 

export const deleteUserByIdService = async (id) => {
    const result = await pool.query(
        "DELETE FROM users WHERE id = $1 RETURNING *", [id]
    ); 
};

