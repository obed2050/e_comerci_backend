import sequelize from "../../config/db.js";
import shop from "../models/shop.js";

export const createshopTable=async()=>{
    await sequelize.authenticate();
    await shop.sync({alter:true,logging:false});
    console.log("DB Table shop created successfull");
}