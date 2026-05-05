import sequelize from "../../config/db.js";
import Notification from "../models/notification.js";

const createNotificationTable = async () => {
    await sequelize.authenticate();
    await Notification.sync({ alter: true, logging: false });
    console.log("DB Table Notification created successfully");
};

export { createNotificationTable };