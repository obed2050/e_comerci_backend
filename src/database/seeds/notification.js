import Notification from "../models/notification.js";

export const seednotification = async () => {
    const data = [
        {
            message: "Notifications have been added",
            type: "system",
            userId: null
        },
        {
            message: "Your order has been received",
            type: "order",
            userId: null
        },
        {
            message: "A new product is available",
            type: "product",
            userId: null
        }
    ];

    await Notification.bulkCreate(data, { ignoreDuplicates: true });
};