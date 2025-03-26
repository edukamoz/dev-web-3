import express from "express";
import ProductController from "../controllers/productController";

const router = express.Router();

router
    .get("/products", ProductController.listProducts)
    .get("/products/:id", ProductController.listProductsById)
    .post("/products", ProductController.registerProduct)
    .put("/products/:id", ProductController.updateProduct)
    .delete("/products/:id", ProductController.deleteProduct)

export default router;