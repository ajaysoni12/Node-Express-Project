import express from "express"; 
import { createUser, deleteUserById, getAllUser, getUserById, updateUserById } from "../controller/userController.js";
import validateUser from "../middlewares/inputValidator.js";

const router = express.Router(); // create new router instance
router.get("/user", getAllUser); // define route for getting all users
router.post("/user", validateUser, createUser); // define route for creating a new user
router.get("/user/:id", getUserById); // define route for getting user by ID
router.put("/user/:id", validateUser, updateUserById); // define route for updating user by ID
router.delete("/user/:id", deleteUserById); // define route for deleting user by ID

export default router; 