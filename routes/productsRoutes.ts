import express from "express";
import ProductController from "../controllers/productController";

const router = express.Router();

router
    .get("/products", ProductController.listAll)
    .get("/products/:id", ProductController.listById)
    .post("/products", ProductController.register)
    .put("/products/:id", ProductController.update)
    .delete("/products/:id", ProductController.delete)

export default router;