import express from "express";

const router = express.Router();

router
    .get("/clients")
    .get("/clients/:id")
    .post("/clients")
    .delete("/clients/:id")

export default router;