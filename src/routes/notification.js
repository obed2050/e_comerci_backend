import express from "express";
import protect from "../middleware/auth.js";
import authorize from "../middleware/authorize.js"; 
import {
    getNotifications,
    markAsRead,
    deleteNotification
} from "../controllers/notification.js";

const router = express.Router();

router.get("/notifications", protect, authorize("admin","seller","user"), getNotifications);
router.patch("/notifications/:id/read", protect, authorize("admin","seller","user"), markAsRead);
router.delete("/notifications/:id", protect, authorize("admin","seller","user"), deleteNotification);

export default router;