import sequelize from "../../config/db.js";
import order from "../models/order.js";

const createorderTable = async () => {
    await sequelize.authenticate();
    await order.sync({alter:true,logging:false});
    console.log("DB Table order created successfull");
};

export { createorderTable };