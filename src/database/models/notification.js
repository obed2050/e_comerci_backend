import { DataTypes, Model } from "sequelize";
import sequelize from "../../config/db.js";

class Notification extends Model {}

Notification.init({
    id: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
    },
    message: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    type: {
        type: DataTypes.STRING, // order, product, shop
        allowNull: false,
    },
    userId: {
        type: DataTypes.UUID,
        allowNull: true,
    },
    isRead: {
        type: DataTypes.BOOLEAN,
        defaultValue: false,
    }
}, {
    sequelize,
    modelName: "notification",
    tableName: "notification",
    timestamps: true
});

export default Notification;