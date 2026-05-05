import sequelize from "../config/db.js";
import { createuserTable } from "../database/migrations/users.js";
import { createproductTable } from "../database/migrations/product.js";
import { createshopTable } from "../database/migrations/shop.js";
import { createorderTable } from "../database/migrations/order.js";
import { createNotificationTable } from "../database/migrations/notification.js";
import"../database/models/index.js";

const syncDatabase=async()=>{
    try {
        console.log("database starting async....");
        await sequelize.authenticate();
        console.log("database connection established successfully");
        await createuserTable();
        await createproductTable();
        await createshopTable();
        await createorderTable();
        await createNotificationTable();
        await sequelize.sync({logging:false});
         console.log("Database synced successfully ");
         process.exit(0);
    } catch (error) {
        console.log("Failed to sync database",error);
        process.exit(1);
    }
};

syncDatabase();