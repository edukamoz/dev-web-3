import express from "express";
import employeeController from "../controllers/employeeController";

const router = express.Router();

router
    .get("/employee", employeeController.listAll)
    .get("/employee/:id", employeeController.listById)
    .post("/employee", employeeController.register)
    .put("/employee/:id", employeeController.update)
    .delete("/employee/:id", employeeController.delete)

export default router;