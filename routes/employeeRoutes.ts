import express from "express";
import EmployeeController from "../controllers/employeeController";

const router = express.Router();

router
    .get("/employee", EmployeeController.listAll)
    .get("/employee/:id", EmployeeController.listById)
    .post("/employee", EmployeeController.register)
    .put("/employee/:id", EmployeeController.update)
    .delete("/employee/:id", EmployeeController.delete)

export default router;