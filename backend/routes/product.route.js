import express from "express";
import { creatProduct, deleteProduct, getProducts, updateProduct } from "../controllers/product.controllers.js";
const router = express.Router();

router.get("/",getProducts);

// Route to create a new product
router.post('/',creatProduct);

router.put("/:id",updateProduct);

router.delete("/:id",deleteProduct);

export default router;