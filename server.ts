import app from "./app";

const port = process.env.PORT || 3000;

// Inicia aplicação na Porta 3000
app.listen(port, () => {
    console.log(`Servidor escutando em http://localhost:${port}`);
});