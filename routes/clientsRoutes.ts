import express from "express";
import clientsController from "../controllers/clientsController";

const router = express.Router();

router
    .get("/clients", clientsController.listClients)
    .get("/clients/:id", clientsController.listClientsById)
    .post("/clients", clientsController.registerClient)
    .put("/clients/:id", clientsController.updateClient)
    .delete("/clients/:id", clientsController.deleteClient)

export default router;