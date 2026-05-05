import express from "express";
import { getAllUsers,createUser,getSingleUser,updateUser,deleteUser } from "../controllers/users.js";
import protect from "../middleware/auth.js";
import authorize from "../middleware/authorize.js";
const userRoutes=express.Router();

userRoutes.get("/getAllUsers",protect,authorize("admin","seller"),getAllUsers);
userRoutes.post("/createUser",protect,authorize("admin"),createUser);
userRoutes.get("/getSingleUser/:id",protect,authorize("admin","seller"),getSingleUser);
userRoutes.put("/updateUser/:id",protect,authorize("admin"),updateUser);
userRoutes.delete("/deleteUser/:id",protect,authorize("admin"),deleteUser);

export default userRoutes;