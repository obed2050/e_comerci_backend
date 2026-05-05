import sequelize from "../../config/db.js";
import User from "../models/users.js";

export const createuserTable=async()=>{
    await sequelize.authenticate();
    await User.sync({alter:true,logging:false});
    console.log("DB Table User created successfull");
}