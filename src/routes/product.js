import express from "express";
import protect from "../middleware/auth.js";
import authorize from "../middleware/authorize.js";
import {
    getAllProducts,
    getSingleProduct,
    createProduct,
    updateProduct,
    deleteProduct
} from "../controllers/product.js";

const router = express.Router();

router.get("/products",protect,authorize("admin","seller","user"), getAllProducts);
router.get("/products/:id",protect,authorize("admin","seller","user"), getSingleProduct);
router.post("/products",protect,authorize("admin","seller"), createProduct);
router.put("/products/:id",protect,authorize("admin","seller"), updateProduct);
router.delete("/products/:id",protect,authorize("admin","seller"), deleteProduct);

export default router;