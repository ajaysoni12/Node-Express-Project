// Standarize Response Formate
// import userModels from "../models/userModels.js"; 

import { createUserService, deleteUserByIdService, getAllUsersService, getUserByIdService, updateUserByIdService } from "../models/userModel.js";

const response = (res, status, message, data = null) => {
    res.status(status).json({
        status: status,
        message: message,
        data: data,
    });
};

export const createUser = async (req, res, next) => {
    const { name, email } = req.body;
    if (!name || !email) return response(res, 400, "Name and email are required");

    try {
        const newUser = await createUserService(name, email);
        response(res, 201, "User created successfully", newUser);
    } catch (err) {
        next(err);
    }
};

export const getAllUser = async (req, res, next) => {
    try {
        const users = await getAllUsersService();
        response(res, 200, "Users retrieved successfully", users);
    } catch (err) {
        next(err);
    }
};

export const getUserById = async (req, res, next) => {
    const { id } = req.params;
    if (!id) return response(res, 400, "User ID is required");

    try {
        const user = await getUserByIdService(id);
        if (!user) return response(res, 404, "User not found");
        response(res, 200, "User retrieved successfully", user);
    } catch (err) {
        next(err);
    }
};

export const updateUserById = async (req, res, next) => {
    const { id } = req.params;
    const { name, email } = req.body;
    if (!id || !name || !email) return response(res, 400, "User ID, name, and email are required");

    try {
        const updateUser = await updateUserByIdService(id, name, email);
        response(res, 200, "User updated successfully", updateUser);
    } catch (err) {
        next(err);
    }
};

export const deleteUserById = async (req, res, next) => {
    const { id } = req.params;
    if (!id) return response(res, 400, "User ID is required");

    try {
        const deleteUser = await deleteUserByIdService(id);
        if (!deleteUser) return response(res, 404, "User not found!");
        response(res, 200, "User deleted successfully", deleteUser);
    } catch (err) {
        next(err);
    }
}
