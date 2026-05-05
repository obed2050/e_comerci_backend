import Order from "../database/models/order.js";
import Product from "../database/models/product.js";
import Notification from "../database/models/notification.js";

// GET ALL ORDERS
export const getAllOrders = async (req, res) => {
    try {
        const orders = await Order.findAll();
        res.status(200).json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET SINGLE ORDER
export const getSingleOrder = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) return res.status(404).json({ message: "Order not found" });
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// CREATE ORDER
export const createOrder = async (req, res) => {
    try {
        const { productid, quantity, ...rest } = req.body;

        if (!productid) {
            return res.status(400).json({ message: "productid is required" });
        }

        const product = await Product.findByPk(productid);
        if (!product) {
            return res.status(404).json({ message: "Product not found" });
        }

        const newOrder = await Order.create({
            ...rest,
            productid,
            quantity,
            status: rest.status || "pending",
        });

        // Create notification
        await Notification.create({
            message: `New order created for product ${productid}`,
            type: "order",
            userId: req.user ? req.user.id : null
        });

        res.status(201).json({
            message: "Order created successfully",
            order: newOrder
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// APPROVE ORDER
export const approveOrder = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) return res.status(404).json({ message: "Order not found" });

        await order.update({ status: "approved" });

        await Notification.create({
            message: "Order has been approved",
            type: "order",
            userId: req.user ? req.user.id : null
        });

        res.status(200).json({ message: "Order approved successfully", order });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// CANCEL ORDER
export const cancelOrder = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) return res.status(404).json({ message: "Order not found" });

        await order.update({ status: "cancelled" });

        await Notification.create({
            message: "Order has been cancelled",
            type: "order",
            userId: req.user ? req.user.id : null
        });

        res.status(200).json({ message: "Order cancelled successfully", order });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE & DELETE ORDER (keep as they were or use these simple versions)
export const updateOrder = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) return res.status(404).json({ message: "Order not found" });
        await order.update(req.body);
        res.status(200).json({ message: "Order updated successfully", order });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteOrder = async (req, res) => {
    try {
        const order = await Order.findByPk(req.params.id);
        if (!order) return res.status(404).json({ message: "Order not found" });
        await order.destroy();
        res.status(200).json({ message: "Order deleted successfully" });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};