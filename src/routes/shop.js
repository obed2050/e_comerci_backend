import express from "express";
import {
    getAllShops,
    getSingleShop,
    createShop,
    updateShop,
    deleteShop
} from "../controllers/shop.js";
import protect from "../middleware/auth.js";
import authorize from "../middleware/authorize.js";

const router = express.Router();

router.get("/shops",protect,authorize("admin","user"),getAllShops);
router.get("/shops/:id",protect,authorize("admin","seller","user"), getSingleShop);
router.post("/shops",protect,authorize("admin","seller",), createShop);
router.put("/shops/:id",protect,authorize("admin","seller",), updateShop);
router.delete("/shops/:id",protect,authorize("admin","seller",), deleteShop);

export default router;