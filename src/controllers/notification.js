import Notification from "../database/models/notification.js";

// GET USER NOTIFICATIONS
export const getNotifications = async (req, res) => {
    try {
        const notifications = await Notification.findAll({
            where: { userId: req.user.id },
            order: [["createdAt", "DESC"]],
        });

        res.status(200).json(notifications);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// MARK AS READ
export const markAsRead = async (req, res) => {
    try {
        const notification = await Notification.findByPk(req.params.id);

        if (!notification || notification.userId !== req.user.id) {
            return res.status(404).json({ message: "Not found" });
        }

        await notification.update({ isRead: true });

        res.status(200).json({ message: "Notification marked as read" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE
export const deleteNotification = async (req, res) => {
    try {
        const notification = await Notification.findByPk(req.params.id);

        if (!notification || notification.userId !== req.user.id) {
            return res.status(404).json({ message: "Not found" });
        }

        await notification.destroy();

        res.status(200).json({ message: "Notification deleted" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};