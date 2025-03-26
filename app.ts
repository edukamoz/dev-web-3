// Importação da biblioteca Express
import express from "express";
import routes from "./routes";

// Criação da aplicação
const app = express();

// Configura aplicação para receber json no body das requisições
app.use(express.json());

routes(app)

export default app;