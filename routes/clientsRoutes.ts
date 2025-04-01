import express from "express";
import clientsController from "../controllers/clientsController";

const router = express.Router();

router
    .get("/clients", clientsController.listAll)
    .get("/clients/:id", clientsController.listById)
    .post("/clients", clientsController.register)
    .put("/clients/:id", clientsController.update)
    .delete("/clients/:id", clientsController.delete)

export default router;