import express from "express";
import { getAllUsers,createUser,getSingleUser,updateUser,deleteUser } from "../controllers/users.js";
import protect from "../middleware/auth.js";
import authorize from "../middleware/authorize.js";
const userRoutes=express.Router();

userRoutes.get("/getAllUsers",getAllUsers);
userRoutes.post("/createUser",createUser);
userRoutes.get("/getSingleUser/:id",getSingleUser);
userRoutes.put("/updateUser/:id",protect,authorize("admin"),updateUser);
userRoutes.delete("/deleteUser/:id",protect,authorize("admin"),deleteUser);

export default userRoutes;
