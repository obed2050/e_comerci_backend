import Shop from "../database/models/shop.js";

// GET ALL SHOPS
export const getAllShops = async (req, res) => {
    try {
        const shops = await Shop.findAll();
        res.status(200).json(shops);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// GET SINGLE SHOP
export const getSingleShop = async (req, res) => {
    try {
        const shop = await Shop.findByPk(req.params.id);

        if (!shop) {
            return res.status(404).json({ message: "Shop not found" });
        }

        res.status(200).json(shop);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// CREATE SHOP
export const createShop = async (req, res) => {
    try {
        const newShop = await Shop.create(req.body);

        res.status(201).json({
            message: "Shop created successfully",
            shop: newShop
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// UPDATE SHOP
export const updateShop = async (req, res) => {
    try {
        const shop = await Shop.findByPk(req.params.id);

        if (!shop) {
            return res.status(404).json({ message: "Shop not found" });
        }

        await shop.update(req.body);

        res.status(200).json({
            message: "Shop updated successfully",
            shop
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

// DELETE SHOP
export const deleteShop = async (req, res) => {
    try {
        const shop = await Shop.findByPk(req.params.id);

        if (!shop) {
            return res.status(404).json({ message: "Shop not found" });
        }

        await shop.destroy();

        res.status(200).json({
            message: "Shop deleted successfully"
        });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};