import sequelize from "../../config/db.js";
import product from "../models/product.js";

export const createproductTable=async()=>{
    await sequelize.authenticate();
    await product.sync({alter:true,logging:false});
    console.log("DB Table product created successfull");
}