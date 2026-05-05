import sequelize from "../../config/db.js";
import User from "./users.js";
import product from "./product.js";
import shop from "./shop.js";
import order from "./order.js";
import notification from "./notification.js";

const db={
    sequelize,
    User,
    product,
    shop,
    order,
    notification
};
export default db;