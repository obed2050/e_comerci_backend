import express from "express";
import protect from "../middleware/auth.js";
import authorize from "../middleware/authorize.js";
import {
    getAllOrders,
    getSingleOrder,
    createOrder,
    approveOrder,
    cancelOrder,
    updateOrder,
    deleteOrder
} from "../controllers/order.js";

const router = express.Router();

router.get("/orders",protect,authorize("admin","seller"), getAllOrders);
router.get("/orders/:id",protect,authorize("admin","seller","user"), getSingleOrder);
router.post("/orders",protect,authorize("admin","seller","user"), createOrder);
router.patch("/orders/:id/approve",protect,authorize("admin","seller"), approveOrder);
router.patch("/orders/:id/cancel",protect,authorize("admin","seller","user"), cancelOrder);
router.put("/orders/:id",protect,authorize("admin","seller","user"), updateOrder);
router.delete("/orders/:id",protect,authorize("admin","seller","user"), deleteOrder);

export default router;